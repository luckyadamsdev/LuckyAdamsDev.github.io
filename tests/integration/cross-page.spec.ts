import { test, expect } from 'playwright/test';
import path from 'path';

var siteUrlArr: Array<string> = [
	'file://' + path.resolve('index.html'),
	'file://' + path.resolve('dev.html'),
	'file://' + path.resolve('art.html')
];

test.describe('cross-page integration', () => {
	test.describe('navigation', () => {
		test('click bio', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Bio', exact: true }).click();
				await expect(page.getByRole('heading', { name: 'About Me' })).toBeInViewport()
			}
		});
		test('click dev', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Dev', exact: true }).click();
				await expect(page.getByRole('heading', { name: 'Development' })).toBeInViewport()
			}
		});
		test('click art', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Art', exact: true }).click();
				await expect(page.getByRole('heading', { name: 'Art' })).toBeInViewport()
			}
		});
		test('hover over dev', async ({ page }) => {
			await page.goto(siteUrlArr[0]);
			await expect(page.getByRole('link', { name: 'Commercial Games' })).not.toBeInViewport()
			await expect(page.getByRole('link', { name: 'Free Web Games' })).not.toBeInViewport()
			await expect(page.getByRole('link', { name: 'Other Notable Projects' })).not.toBeInViewport()
			await page.getByRole('link', { name: 'Dev', exact: true }).hover();
			await expect(page.getByRole('link', { name: 'Commercial Games' })).toBeInViewport()
			await expect(page.getByRole('link', { name: 'Free Web Games' })).toBeInViewport()
			await expect(page.getByRole('link', { name: 'Other Notable Projects' })).toBeInViewport()
		});
		test('hover over art', async ({ page }) => {
			await page.goto(siteUrlArr[0]);
			await expect(page.getByRole('link', { name: 'Characters' })).not.toBeInViewport()
			await expect(page.getByRole('link', { name: 'Environments' })).not.toBeInViewport()
			await expect(page.getByRole('link', { name: 'Animated Videos' })).not.toBeInViewport()
			await expect(page.getByRole('link', { name: 'Graphic Design' })).not.toBeInViewport()
			await page.getByRole('link', { name: 'Art', exact: true }).hover();
			await expect(page.getByRole('link', { name: 'Characters' })).toBeInViewport()
			await expect(page.getByRole('link', { name: 'Environments' })).toBeInViewport()
			await expect(page.getByRole('link', { name: 'Animated Videos' })).toBeInViewport()
			await expect(page.getByRole('link', { name: 'Graphic Design' })).toBeInViewport()
		});
		test('click dev/commercial-games', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Dev', exact: true }).hover();
				await page.getByRole('link', { name: 'Commercial Games' }).click();
				await expect(page.getByRole('heading', { name: 'Commercial Games' })).toBeInViewport()
			}
		});
		test('click dev/free-web-games', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Dev', exact: true }).hover();
				await page.getByRole('link', { name: 'Free Web Games' }).click();
				await expect(page.getByRole('heading', { name: 'Free Web Games' })).toBeInViewport()
			}
		});
		test('click dev/other-notable-projects', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Dev', exact: true }).hover();
				await page.getByRole('link', { name: 'Other Notable Projects' }).click();
				await expect(page.getByRole('heading', { name: 'Other Notable Projects' })).toBeInViewport()
			}
		});
		test('click art/characters', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Art', exact: true }).hover();
				await page.getByRole('link', { name: 'Characters' }).click();
				await expect(page.getByRole('heading', { name: 'Characters' })).toBeInViewport()
			}
		});
		test('click art/environments', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Art', exact: true }).hover();
				await page.getByRole('link', { name: 'Environments' }).click();
				await expect(page.getByRole('heading', { name: 'Environments' })).toBeInViewport()
			}
		});
		test('click art/animated-videos', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Art', exact: true }).hover();
				await page.getByRole('link', { name: 'Animated Videos' }).click();
				await expect(page.getByRole('heading', { name: 'Animated Videos' })).toBeInViewport()
			}
		});
		test('click art/graphic-design', async ({ page }) => {
			for(var currUrl of siteUrlArr) {
				await page.goto(currUrl);
				await page.getByRole('link', { name: 'Art', exact: true }).hover();
				await page.getByRole('link', { name: 'Graphic Design' }).click();
				await expect(page.getByRole('heading', { name: 'Graphic Design' })).toBeInViewport()
			}
		});
	});
});
