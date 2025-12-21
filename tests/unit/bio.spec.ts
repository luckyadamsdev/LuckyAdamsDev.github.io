import { test, expect } from 'playwright/test';
import path from 'path';

var siteUrl: string = 'file://' + path.resolve('index.html');

test.describe('social media links', () => {
	test('itch link working', async ({ page }) => {
		await page.goto(siteUrl);
		await page.locator('#social-icon-links > a').first().click();
		await expect(page).toHaveURL(/itch.io/)
	});

	test('github link working', async ({ page }) => {
		await page.goto(siteUrl);
		await page.locator('#social-icon-links > a:nth-child(2)').click();
		await expect(page).toHaveURL(/github.com/)
	});

	test('youtube link working', async ({ page }) => {
		await page.goto(siteUrl);
		await page.locator('#social-icon-links > a:nth-child(3)').click();
		await expect(page).toHaveURL(/youtube.com/)
	});

	test('linkedin link working', async ({ page }) => {
		await page.goto(siteUrl);
		await page.locator('#social-icon-links > a:nth-child(4)').click();
		await expect(page).toHaveURL(/linkedin.com/)
	});
});
