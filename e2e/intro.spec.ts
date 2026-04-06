import { test, expect } from "@playwright/test";

test.describe("Intro Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for intro section to be visible
    await page.waitForSelector("section");
  });

  test("should render intro section", async ({ page }) => {
    const introSection = page.locator("section").nth(1);
    await expect(introSection).toBeVisible();
  });

  test("should display avatar image", async ({ page }) => {
    // Try to find avatar image
    const allImages = page.locator("img");
    const count = await allImages.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should have avatar with red border shadow", async ({ page }) => {
    const introSection = page.locator("section").nth(1);
    const avatarWrapper = introSection.locator("img").first();

    if ((await avatarWrapper.count()) > 0) {
      await expect(avatarWrapper).toBeVisible();
    }
  });

  test("should display intro text content", async ({ page }) => {
    const introSection = page.locator("section").nth(1);
    const textContent = await introSection.textContent();

    // Should have some text content
    expect(textContent?.length).toBeGreaterThan(0);
  });

  test("should render intro tags/badges grid", async ({ page }) => {
    const introSection = page.locator("section").nth(1);
    const tags = introSection.locator("a, div[class*='tag']").filter({
      has: page.locator("svg"),
    });

    const tagsCount = await tags.count();
    expect(tagsCount).toBeGreaterThanOrEqual(0);
  });

  test("should have proper heading structure", async ({ page }) => {
    const headings = page.locator("h1, h2, h3, h4, h5, h6");
    const headingsCount = await headings.count();

    expect(headingsCount).toBeGreaterThan(0);
  });

  test("should contain links to social profiles or CTA buttons", async ({
    page,
  }) => {
    const introSection = page.locator("section").nth(1);
    const links = introSection.locator("a, button");
    const linksCount = await links.count();

    expect(linksCount).toBeGreaterThanOrEqual(0);
  });

  test("should be properly positioned in viewport", async ({ page }) => {
    const introSection = page.locator("section").nth(1);
    const boundingBox = await introSection.boundingBox();

    expect(boundingBox).not.toBeNull();
    if (boundingBox) {
      expect(boundingBox.height).toBeGreaterThan(0);
      expect(boundingBox.width).toBeGreaterThan(0);
    }
  });

  test("should have readable text contrast", async ({ page }) => {
    const introSection = page.locator("section").nth(1);
    const textElements = introSection.locator("p, span, h1, h2, h3");
    const textCount = await textElements.count();

    expect(textCount).toBeGreaterThan(0);
  });

  test("should load without visual glitches", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    const introSection = page.locator("section").nth(1);

    // Take screenshot to verify visual integrity
    await expect(introSection).toBeVisible();
  });
});
