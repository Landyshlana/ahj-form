import puppeteer from 'puppeteer';

jest.setTimeout(50000);

describe('popover', () => {
  const baseUrl = 'http://localhost:9000';
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, 
      slowMo: 500,
      devtools: true, 
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  })
  test('popover', async () => {
    await page.goto(baseUrl);
    const container = await page.$('#container');
    const btn = await container.$('.btn');
    btn.click();
    await page.waitForSelector('.hidden');
  });
})