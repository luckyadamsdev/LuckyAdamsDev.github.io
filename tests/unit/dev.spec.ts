import { test, expect } from 'playwright/test';
import path from 'path';

var siteUrl: string = 'file://' + path.resolve('dev.html');

test.describe('dev', () => {
	test('images/videos load', async ({ page }) => {
		await page.goto(siteUrl);
		// scroll down to load every video
		for(var i: number = 0 ; i < 1000; i += 100) {
			await page.mouse.wheel(0, i);
		}
		await expect(page).toHaveScreenshot('dev.png', { animations: 'disabled', fullPage: true });
	});
});
