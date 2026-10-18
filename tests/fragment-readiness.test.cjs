// Unit tests for same-page fragment handling (lib/fragment.ts) and the shared
// editorial-readiness rule (lib/readiness.ts).
// Run: node --test tests/fragment-readiness.test.cjs
const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const { mkdtempSync, writeFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const { execFileSync } = require('node:child_process');

const root = resolve(__dirname, '..');
const build = mkdtempSync(join(tmpdir(), 'smartshopca-fragment-test-'));
after(() => rmSync(build, { recursive: true, force: true }));
writeFileSync(join(build, 'tsconfig.json'), JSON.stringify({
  extends: join(root, 'tsconfig.json'),
  compilerOptions: {
    baseUrl: root, module: 'commonjs', moduleResolution: 'node', jsx: 'react-jsx',
    noEmit: false, incremental: false, rootDir: root, outDir: build, plugins: [],
  },
  files: [join(root, 'lib/fragment.ts'), join(root, 'lib/readiness.ts')],
  include: [], exclude: [],
}));
execFileSync(process.execPath, [join(root, 'node_modules/typescript/bin/tsc'), '-p', join(build, 'tsconfig.json')], {
  cwd: root, stdio: 'pipe',
});
const { fragmentToId, findDisclosureForFragment } = require(join(build, 'lib/fragment.js'));
const { isEditoriallyReviewed, comparisonStatusLabel } = require(join(build, 'lib/readiness.js'));

function fakeDoc() {
  const details = { tagName: 'DETAILS', open: false };
  const inner = { tagName: 'P', closest: (sel) => (sel === 'details' ? details : null) };
  const plain = { tagName: 'SECTION', closest: () => null };
  const byId = { 'details-x': details, 'inner-x': inner, 'plain-x': plain, 'café id': details };
  return { details, doc: { getElementById: (id) => byId[id] ?? null } };
}

for (const bad of ['#%', '#%E0%A4%A', '%', '#%zz', '#%%41']) {
  test(`malformed fragment ${JSON.stringify(bad)} does not throw and matches nothing`, () => {
    const { doc } = fakeDoc();
    assert.doesNotThrow(() => fragmentToId(bad));
    assert.doesNotThrow(() => findDisclosureForFragment(bad, doc));
    assert.equal(findDisclosureForFragment(bad, doc), null);
  });
}

test('empty and missing fragments return null', () => {
  const { doc } = fakeDoc();
  for (const v of ['', '#', null, undefined]) {
    assert.equal(fragmentToId(v), null);
    assert.equal(findDisclosureForFragment(v, doc), null);
  }
});

test('plain and percent-encoded ids resolve to the <details> panel', () => {
  const { doc, details } = fakeDoc();
  assert.equal(findDisclosureForFragment('#details-x', doc), details);
  assert.equal(findDisclosureForFragment('details-x', doc), details);
  assert.equal(findDisclosureForFragment('#caf%C3%A9%20id', doc), details);
});

test('an element inside a panel resolves to its enclosing <details>', () => {
  const { doc, details } = fakeDoc();
  assert.equal(findDisclosureForFragment('#inner-x', doc), details);
});

test('unknown ids and non-disclosure targets return null', () => {
  const { doc } = fakeDoc();
  assert.equal(findDisclosureForFragment('#nope', doc), null);
  assert.equal(findDisclosureForFragment('#plain-x', doc), null);
});

test('getElementById errors are contained', () => {
  const doc = { getElementById: () => { throw new Error('boom'); } };
  assert.equal(findDisclosureForFragment('#details-x', doc), null);
});

test('editorial readiness requires published status AND no hold reasons', () => {
  assert.equal(isEditoriallyReviewed({ status: 'published', holdReasons: [] }), true);
  assert.equal(isEditoriallyReviewed({ status: 'published', holdReasons: ['Formula conflict'] }), false);
  assert.equal(isEditoriallyReviewed({ status: 'research-hold', holdReasons: [] }), false);
  assert.equal(isEditoriallyReviewed({ status: 'ready-for-review', holdReasons: [] }), false);
});

test('status labels use the same readiness rule', () => {
  const held = { status: 'research-hold', holdReasons: ['x'] };
  const publishedButReason = { status: 'published', holdReasons: ['x'] };
  const reviewed = { status: 'published', holdReasons: [] };
  assert.equal(comparisonStatusLabel([held, held]), '2 products, both still being checked');
  assert.equal(comparisonStatusLabel([reviewed, publishedButReason]), '2 products, 1 still being checked');
  assert.equal(comparisonStatusLabel([reviewed, reviewed]), '2 products reviewed');
  assert.equal(comparisonStatusLabel([held, held, held]), '3 products, all still being checked');
});
