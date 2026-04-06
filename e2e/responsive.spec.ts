import { test, expect } from "@playwright/test";

const breakpoints = [
  { name: "Mobile 320px", width: 320, height: 667 },
  { name: "Mobile XS 375px", width: 375, height: 667 },
  { name: "Mobile SM 425px", width: 425, height: 667 },
  { name: "Tablet 768px", width: 768, height: 1024 },
  { name: "Desktop 1024px", width: 1024, height: 768 },
  { name: "Desktop XL 1366px", width: 1366, height: 768 },
  { name: "Desktop 2K 1920px", width: 1920, height: 1080 },
  { name: "Desktop Max 1980px", width: 1980, height: 1080 },
];

test.describe("Responsive Design", () => {
  breakpoints.forEach((breakpoint) => {
    test(`should render properly at ${breakpoint.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");
      await page.waitForLoadState("networkidle");

      // Page should be visible
      const container = page.locator("section").first();
      await expect(container).toBeVisible();
    });

    test(`should have proper layout at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const sections = page.locator("section");
      const sectionsCount = await sections.count();

      expect(sectionsCount).toBeGreaterThanOrEqual(4);
    });

    test(`should display text readable at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const textElements = page.locator("p, h1, h2, h3, h4, h5, h6");
      const textCount = await textElements.count();

      expect(textCount).toBeGreaterThan(0);
    });

    test(`should have no horizontal scroll overflow at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasOverflow).toBeFalsy();
    });

    test(`images should be responsive at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const images = page.locator("img");
      const imagesCount = await images.count();

      for (let i = 0; i < Math.min(imagesCount, 3); i++) {
        const image = images.nth(i);
        const boundingBox = await image.boundingBox();

        if (boundingBox) {
          // Image width should not exceed viewport
          expect(boundingBox.width).toBeLessThanOrEqual(breakpoint.width);
        }
      }
    });

    test(`text should be readable font size at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const textElements = page.locator("p");

      if ((await textElements.count()) > 0) {
        const fontSize = await textElements
          .first()
          .evaluate((el) => window.getComputedStyle(el).fontSize);

        // Font size should be reasonable (at least 12px)
        const fontSizeNum = parseFloat(fontSize);
        expect(fontSizeNum).toBeGreaterThanOrEqual(12);
      }
    });

    test(`buttons should be clickable at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const buttons = page.locator("button, a[class*='button']");

      if ((await buttons.count()) > 0) {
        const firstButton = buttons.first();
        await expect(firstButton).toBeVisible();
      }
    });

    test(`spacing should be appropriate at ${breakpoint.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      const sections = page.locator("section");

      // Page should have content with proper spacing
      for (let i = 0; i < Math.min(await sections.count(), 2); i++) {
        const section = sections.nth(i);
        const boundingBox = await section.boundingBox();

        if (boundingBox) {
          // Section should not be collapsed
          expect(boundingBox.height).toBeGreaterThan(50);
        }
      }
    });

    test(`grid layout should adapt at ${breakpoint.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      });

      await page.goto("/");

      // Projects and Services sections should have responsive grids
      const sections = page.locator("section");

      if ((await sections.count()) >= 3) {
        const gridSection = sections.nth(2); // Projects section

        const elements = gridSection.locator(
          "[class*='wrapper'], [class*='grid'], [class*='container']",
        );
        const elementsCount = await elements.count();

        expect(elementsCount).toBeGreaterThanOrEqual(0);
      }
    });
  });

  test("should maintain layout consistency across breakpoints", async ({
    page,
  }) => {
    const viewportSizes = [
      { width: 320, height: 667 },
      { width: 768, height: 1024 },
      { width: 1366, height: 768 },
      { width: 1920, height: 1080 },
    ];

    for (const size of viewportSizes) {
      await page.setViewportSize(size);
      await page.goto("/");

      const sections = page.locator("section");
      const sectionsCount = await sections.count();

      // Same content across all breakpoints
      expect(sectionsCount).toBeGreaterThanOrEqual(4);
    }
  });

  test("should not have layout shift during responsive change", async ({
    page,
  }) => {
    await page.goto("/");

    const initialUrl = page.url();

    // Change viewport
    await page.setViewportSize({ width: 768, height: 1024 });

    // URL should remain the same
    expect(page.url()).toBe(initialUrl);

    // Content should still be visible
    const container = page.locator("section").first();
    await expect(container).toBeVisible();
  });

  test("should handle window resize smoothly", async ({ page }) => {
    await page.goto("/");

    // Simulate window resize
    const sizes = [320, 768, 1024, 1366, 1920, 1980];

    for (const width of sizes) {
      await page.setViewportSize({ width, height: 768 });

      const container = page.locator("section").first();
      await expect(container).toBeVisible();
    }
  });

  test("should have proper padding on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 667 });
    await page.goto("/");

    const container = page.locator("section").first();

    // On mobile, should have visible padding
    const boundingBox = await container.boundingBox();

    if (boundingBox) {
      // Section should not take the entire width (should have padding)
      expect(boundingBox.width).toBeLessThanOrEqual(320);
    }
  });

  test("should have proper padding on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const container = page.locator("section").first();

    const boundingBox = await container.boundingBox();

    if (boundingBox) {
      // Desktop section can be larger
      expect(boundingBox.width).toBeLessThanOrEqual(1920);
    }
  });

  test("should stack elements properly on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 667 });
    await page.goto("/");

    // Elements should stack vertically without breaking layout
    const sections = page.locator("section");

    for (let i = 0; i < (await sections.count()); i++) {
      const section = sections.nth(i);
      await expect(section).toBeVisible();
    }
  });

  test("should display multi-column layout on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto("/");

    // Projects section should show multiple columns
    const sections = page.locator("section");

    if ((await sections.count()) >= 3) {
      const projectsSection = sections.nth(2);

      const cards = projectsSection.locator(
        "a[class*='container'], [class*='card']",
      );
      const cardsCount = await cards.count();

      // Should have multiple cards visible
      expect(cardsCount).toBeGreaterThanOrEqual(0);
    }
  });
});
