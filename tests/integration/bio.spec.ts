import { test, expect } from 'playwright/test';
import path from 'path';

var siteUrl: string = 'file://' + path.resolve('index.html');

test.describe('bio integration', () => {
	test('images load', async ({ page }) => {
		await page.goto(siteUrl);
		await expect(page).toHaveScreenshot('bio.png');
	});
});