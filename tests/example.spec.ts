import { test, expect } from "@playwright/test";
import { headingText } from "../src/copy";

// 在每次测试之前执行钩子
// https://playwright.dev/docs/test-annotations#use-fixme-in-beforeeach-hook

test.beforeEach("测试前执行", async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test("标题应该是课件的", async ({ page }) => {
  const heading = page.locator("h1", { hasText: headingText });
  await expect(heading).toBeVisible();
});

test.describe("计数器", () => {
  test("应该是显示的", async ({ page }) => {
    const counterButton = page.locator("#counter");
    await expect(counterButton).toBeVisible();
  });
  test("应该是加", async ({ page }) => {
    const counterButton = page.locator("#counter");
    await expect(counterButton).toHaveText("count is 0");
    await counterButton.click();
    await expect(counterButton).toHaveText("count is 1");
  });
});
