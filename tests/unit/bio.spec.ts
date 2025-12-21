import { test, expect } from 'playwright/test';
import path from 'path';

var siteUrl: string = 'file://' + path.resolve('index.html');

test.describe('bio', () => {
	test.describe('social media links', () => {
		test('itch working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.locator('#social-icon-links > a').first().click();
			await expect(page).toHaveURL(/itch.io/)
		});

		test('github working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.locator('#social-icon-links > a:nth-child(2)').click();
			await expect(page).toHaveURL(/github.com/)
		});

		test('youtube working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.locator('#social-icon-links > a:nth-child(3)').click();
			await expect(page).toHaveURL(/youtube.com/)
		});

		test('linkedin working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.locator('#social-icon-links > a:nth-child(4)').click();
			await expect(page).toHaveURL(/linkedin.com/)
		});
	});

	test.describe('hyperlinks', () => {
		test('winnipeg game collective working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.getByRole('link', { name: 'Winnipeg Game Collective' }).click();
			await expect(page).toHaveURL(/pegjam.com/)
		});
		test('sea birds working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.getByRole('link', { name: 'Sea Birds: End of an Age' }).click();
			await expect(page).toHaveURL(/Sea_Birds_End_of_an_Age/)
		});
		test('single feather working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.getByRole('link', { name: 'Single Feather' }).click();
			await expect(page).toHaveURL(/Single_Feather/)
		});
		test('rrc working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.getByRole('link', { name: 'Red River College Polytechnic' }).click();
			await expect(page).toHaveURL(/rrc.ca/)
		});
		test('umanitoba working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.getByRole('link', { name: 'University of Manitoba' }).click();
			await expect(page).toHaveURL(/umanitoba.ca/)
		});
		test('employees scholarship working', async ({ page }) => {
			await page.goto(siteUrl);
			await page.getByRole('link', { name: 'Employees Scholarship' }).click();
			await expect(page).toHaveURL(/umanitoba.ca/)
		});
	});

	test('images load', async ({ page }) => {
		await page.goto(siteUrl);
		await expect(page).toHaveScreenshot('bio.png');
	});
});