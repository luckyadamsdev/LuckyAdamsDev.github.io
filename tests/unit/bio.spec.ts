import { test, expect } from 'playwright/test';
import path from 'path';

var siteUrl: string = 'file://' + path.resolve('index.html');

test('has title', async ({ page }) => {
	await page.goto(siteUrl);

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle('Portfolio Bio - Lucky Adams');
});
