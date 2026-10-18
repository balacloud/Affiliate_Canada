// Browser regression check for evidence-panel fragment navigation.
// NOT part of `npm run test:editorial`: it needs a running production server
// and Playwright, which is not a project dependency.
//
//   npm run build && npm run start            # serves on :3200
//   npx -y playwright@1.56.1 install chromium # or use an existing Chromium
//   node tests/browser/fragment-navigation.check.cjs [baseUrl]
//
// Checks, on both comparison pages:
//   1. malformed fragments (#%, #%E0%A4%A) leave the page usable
//   2. evidence link: click → panel opens → close it → same link again → reopens
//   3. the same with keyboard Enter
//   4. a direct deep link to an encoded #details-<id> opens that panel
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Playwright is not installed; skipping browser regression check.');
  process.exit(0);
}

const base = process.argv[2] || 'http://localhost:3200';
const pages = ['/care/skincare/face-moisturizers', '/care/skincare/body-moisturizers'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 800 } });
  const failures = [];
  const check = (name, ok) => {
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
    if (!ok) failures.push(name);
  };
  const usable = async () => !(await page.content()).includes('Application error') && (await page.isVisible('h1'));
  const isOpen = (id) => page.evaluate((i) => document.getElementById(i).open, id);
  const close = (id) => page.evaluate((i) => { document.getElementById(i).open = false; }, id);

  for (const path of pages) {
    const url = base + path;
    for (const frag of ['#%', '#%E0%A4%A']) {
      await page.goto('about:blank');
      await page.goto(url + frag);
      await page.waitForTimeout(400);
      check(`${path}${frag} stays usable`, await usable());
    }

    await page.goto(url);
    const link = page.locator('a[href^="#details-"]').first();
    const id = (await link.getAttribute('href')).slice(1);
    await link.click();
    await page.waitForTimeout(150);
    check(`${path} first click opens panel`, await isOpen(id));
    await close(id);
    await link.click();
    await page.waitForTimeout(150);
    check(`${path} click → close → same link reopens`, await isOpen(id));
    await close(id);
    await link.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(150);
    check(`${path} keyboard Enter reopens`, await isOpen(id));

    await page.goto('about:blank');
    await page.goto(`${url}#${encodeURIComponent(id)}`);
    await page.waitForTimeout(400);
    check(`${path} direct deep link opens panel`, await isOpen(id));
  }

  await browser.close();
  if (failures.length) {
    console.error(`${failures.length} failure(s)`);
    process.exit(1);
  }
})();
