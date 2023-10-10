import { test, expect } from "@playwright/test";

// 在每次测试之前执行钩子
// https://playwright.dev/docs/test-annotations#use-fixme-in-beforeeach-hook

test.beforeEach("测试前执行", async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test("标题应该是课件的", async ({ page }) => {
  const heading = page.locator("h1", { hasText: "Vite + TypeScript" });
  await expect(heading).toBeVisible();
});
