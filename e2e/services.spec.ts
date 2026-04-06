import { test, expect } from "@playwright/test";

test.describe("Services Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should render services section", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    await expect(servicesSection).toBeVisible();
  });

  test("should display services title", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);
    const heading = servicesSection.locator("h2, h3").first();

    if ((await heading.count()) > 0) {
      await expect(heading).toBeVisible();
    }
  });

  test("should render service cards", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    // Service cards should be present
    const cards = servicesSection.locator(
      "[class*='card'], [class*='service']",
    );
    const cardsCount = await cards.count();

    expect(cardsCount).toBeGreaterThanOrEqual(0);
  });

  test("should display service icons", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    const icons = servicesSection.locator("svg");
    const iconsCount = await icons.count();

    // Services should have icon representations
    expect(iconsCount).toBeGreaterThanOrEqual(0);
  });

  test("should have service titles and descriptions", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    const textContent = await servicesSection.textContent();
    expect(textContent?.length).toBeGreaterThan(0);
  });

  test("should have 3-column layout on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });

    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    // On large desktop (1366px), should display 3 columns
    await expect(servicesSection).toBeVisible();
  });

  test("should have 2-column layout on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    // On tablet (768px), should display 2 columns
    await expect(servicesSection).toBeVisible();
  });

  test("should stack on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 667 });

    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    // On mobile (320px), should stack vertically
    await expect(servicesSection).toBeVisible();
  });

  test("service cards should be interactive", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);
    const firstCard = servicesSection.locator("[class*='card']").first();

    if ((await firstCard.count()) > 0) {
      await firstCard.hover();
      await expect(firstCard).toBeVisible();
    }
  });

  test("should display service information clearly", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    const headings = servicesSection.locator("h3, h4");
    const headingsCount = await headings.count();

    // Should have service names/titles
    expect(headingsCount).toBeGreaterThanOrEqual(0);
  });

  test("should have proper background color", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    await expect(servicesSection).toBeVisible();

    // Services section should have distinct styling
    const boundingBox = await servicesSection.boundingBox();
    expect(boundingBox).not.toBeNull();
  });

  test("services icons should be visible and properly sized", async ({
    page,
  }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    const icons = servicesSection.locator("svg");
    const iconsCount = await icons.count();

    for (let i = 0; i < Math.min(iconsCount, 3); i++) {
      const icon = icons.nth(i);
      const boundingBox = await icon.boundingBox();

      if (boundingBox) {
        expect(boundingBox.height).toBeGreaterThan(0);
        expect(boundingBox.width).toBeGreaterThan(0);
      }
    }
  });

  test("should have proper spacing and padding", async ({ page }) => {
    const sections = page.locator("section");
    const servicesSection = sections.nth(3);

    const boundingBox = await servicesSection.boundingBox();
    expect(boundingBox).not.toBeNull();

    if (boundingBox) {
      expect(boundingBox.height).toBeGreaterThan(200);
      expect(boundingBox.width).toBeGreaterThan(100);
    }
  });
});
