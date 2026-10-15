const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const { mkdtempSync, writeFileSync, symlinkSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const { execFileSync } = require('node:child_process');

const root = resolve(__dirname, '..');
const build = mkdtempSync(join(tmpdir(), 'smartshopca-editorial-test-'));
after(() => rmSync(build, { recursive: true, force: true }));
writeFileSync(join(build, 'tsconfig.json'), JSON.stringify({
  extends: join(root, 'tsconfig.json'),
  compilerOptions: {
    baseUrl: root, module: 'commonjs', moduleResolution: 'node', jsx: 'react-jsx',
    noEmit: false, incremental: false, rootDir: root, outDir: build, plugins: [],
  },
  files: [join(root, 'lib/format.ts'), join(root, 'components/OutboundLink.tsx')],
  include: [], exclude: [],
}));
execFileSync(process.execPath, [join(root, 'node_modules/typescript/bin/tsc'), '-p', join(build, 'tsconfig.json')], {
  cwd: root, stdio: 'pipe',
});
symlinkSync(join(root, 'node_modules'), join(build, 'node_modules'), 'dir');
const { isPurchaseEligible } = require(join(build, 'lib/format.js'));
const { OutboundLink } = require(join(build, 'components/OutboundLink.js'));

function candidate() {
  return {
    status: 'published', holdReasons: [],
    merchantLink: { kind: 'merchant-direct', href: 'https://merchant.example/product', affiliateStatus: 'none' },
    ingredients: { completeness: 'full-published', sourceIds: ['current-formula'] },
    origin: { statements: [{ scope: 'exact-variant', level: 'product-page-claim', sourceIds: ['exact-origin'] }] },
  };
}

test('reviewed exact-product evidence permits a non-affiliate merchant link', () => {
  assert.equal(isPurchaseEligible(candidate()), true);
});

for (const [name, mutate] of [
  ['research hold', (c) => { c.status = 'research-hold'; }],
  ['unresolved hold reason despite published status', (c) => { c.holdReasons = ['Formula conflict']; }],
  ['missing merchant destination', (c) => { delete c.merchantLink.href; }],
  ['partial formula', (c) => { c.ingredients.completeness = 'partial'; }],
  ['unsourced formula', (c) => { c.ingredients.sourceIds = []; }],
  ['empty origin evidence', (c) => { c.origin.statements = []; }],
  ['brand-only origin', (c) => { c.origin.statements[0].scope = 'brand-wide'; c.origin.statements[0].level = 'brand-wide-claim'; }],
  ['unsourced exact origin', (c) => { c.origin.statements[0].sourceIds = []; }],
  ['conflicting origin', (c) => { c.origin.statements.push({ scope: 'none', level: 'conflicting', sourceIds: [] }); }],
  ['inactive affiliate relationship', (c) => { c.merchantLink.kind = 'affiliate'; c.merchantLink.affiliateStatus = 'researched'; }],
]) {
  test(`purchase CTA blocked for ${name}`, () => {
    const c = candidate(); mutate(c);
    assert.equal(isPurchaseEligible(c), false);
  });
}

test('active affiliate still requires all exact-product evidence', () => {
  const c = candidate(); c.merchantLink.kind = 'affiliate'; c.merchantLink.affiliateStatus = 'active';
  assert.equal(isPurchaseEligible(c), true);
  c.ingredients.completeness = 'not-obtained';
  assert.equal(isPurchaseEligible(c), false);
});

test('merchant navigation stays a real link and sends the existing tracker contract', async () => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const oldWindow = globalThis.window;
  let body;
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {
    sendBeacon: (url, data) => { assert.equal(url, '/api/track-click'); body = data; return true; },
  } });
  globalThis.window = { location: { pathname: '/care/skincare/face-moisturizers' } };
  try {
    const element = OutboundLink({ href: 'https://merchant.example/product', productId: 'p', merchantId: 'm', merchantName: 'Merchant' });
    assert.equal(element.type, 'a');
    assert.equal(element.props.href, 'https://merchant.example/product');
    assert.match(element.props.rel, /sponsored/);
    element.props.onClick();
    const event = JSON.parse(await body.text());
    for (const key of ['productId', 'merchantId', 'campaignId', 'pageSlug', 'affiliateLink']) assert.ok(event[key], key);
    assert.equal(event.affiliateLink, element.props.href);
    assert.equal(event.pageSlug, '/care/skincare/face-moisturizers');
  } finally {
    if (descriptor) Object.defineProperty(globalThis, 'navigator', descriptor); else delete globalThis.navigator;
    if (oldWindow === undefined) delete globalThis.window; else globalThis.window = oldWindow;
  }
});

test('tracking failure does not block a non-affiliate destination', () => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const oldWindow = globalThis.window;
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { sendBeacon: () => { throw new Error('Unavailable'); } } });
  globalThis.window = { location: { pathname: '/care' } };
  try {
    const element = OutboundLink({ href: 'https://merchant.example/product', productId: 'p', merchantId: 'm', merchantName: 'Merchant', linkKind: 'merchant' });
    assert.doesNotMatch(element.props.rel, /sponsored/);
    assert.equal(element.props.href, 'https://merchant.example/product');
    assert.doesNotThrow(() => element.props.onClick());
  } finally {
    if (descriptor) Object.defineProperty(globalThis, 'navigator', descriptor); else delete globalThis.navigator;
    if (oldWindow === undefined) delete globalThis.window; else globalThis.window = oldWindow;
  }
});
