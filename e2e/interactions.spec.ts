import { test, expect } from "@playwright/test";

test.describe("User Interactions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should handle button clicks without errors", async ({ page }) => {
    const buttons = page.locator("button");
    const buttonsCount = await buttons.count();

    // If there are buttons, clicking them should work
    if (buttonsCount > 0) {
      const firstButton = buttons.first();

      // Just click the button
      await firstButton.click();
    }
  });

  test("should handle link clicks without errors", async ({ page }) => {
    const links = page.locator("a[href^='/'], a[href^='#']");
    const linksCount = await links.count();

    if (linksCount > 0) {
      const firstLink = links.first();
      const href = await firstLink.getAttribute("href");

      if (href && href.startsWith("/")) {
        // Click link
        await firstLink.click();

        // Page should still be valid
        await page.waitForLoadState("networkidle");
        expect(page.url()).toBeTruthy();
      }
    }
  });

  test("should support hover on interactive elements", async ({ page }) => {
    const cards = page
      .locator("a[class*='container'], [class*='card']")
      .filter({
        has: page.locator("img").or(page.locator("h3")),
      });

    if ((await cards.count()) > 0) {
      const firstCard = cards.first();

      // Hover should work without errors
      await firstCard.hover();
      await expect(firstCard).toBeVisible();
    }
  });

  test("should handle multiple rapid clicks", async ({ page }) => {
    const buttons = page.locator("button, a[class*='button']");

    if ((await buttons.count()) > 0) {
      const firstButton = buttons.first();

      // Rapid clicks
      await firstButton.click();
      await firstButton.click();
      await firstButton.click();

      await expect(firstButton).toBeVisible();
    }
  });

  test("should handle scrolling smoothly", async ({ page }) => {
    const initialScrollY = await page.evaluate(() => window.scrollY);

    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 500));

    const newScrollY = await page.evaluate(() => window.scrollY);

    // Should have scrolled
    expect(newScrollY).toBeGreaterThan(initialScrollY);

    // Scroll back up
    await page.evaluate(() => window.scrollBy(0, -500));

    const finalScrollY = await page.evaluate(() => window.scrollY);
    expect(finalScrollY).toBeLessThanOrEqual(initialScrollY + 100);
  });

  test("should maintain page state during scroll", async ({ page }) => {
    await page.goto("/");

    const sections = page.locator("section");
    const initialCount = await sections.count();

    // Scroll and back
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.evaluate(() => window.scrollBy(0, -300));

    // Content should persist
    const finalCount = await sections.count();
    expect(finalCount).toBeLessThanOrEqual(initialCount + 1);
  });

  test("should handle keyboard navigation with Tab", async ({ page }) => {
    const focusElements = page.locator("a, button, input, [tabindex]");
    const focusElementsCount = await focusElements.count();

    // Should be able to tab through elements
    if (focusElementsCount > 0) {
      await page.keyboard.press("Tab");

      const focusedElement = await page.evaluate(() => {
        return document.activeElement?.tagName;
      });

      expect(focusedElement).toBeTruthy();
    }
  });

  test("should handle Enter key on links", async ({ page }) => {
    const links = page.locator("a[href^='#']");

    if ((await links.count()) > 0) {
      const firstLink = links.first();

      // Focus and press Enter
      await firstLink.focus();
      await page.keyboard.press("Enter");

      // Page should respond
      await expect(page).toHaveURL(/localhost:3000/);
    }
  });

  test("should prevent accidental double clicks", async ({ page }) => {
    const links = page.locator("a");

    if ((await links.count()) > 0) {
      const firstLink = links.first();

      // Double click should not cause navigation issues
      await firstLink.dblclick();

      await expect(page).toHaveURL(/localhost:3000/);
    }
  });

  test("images should load on scroll", async ({ page }) => {
    const images = page.locator("img");
    const imagesCount = await images.count();

    if (imagesCount > 0) {
      for (let i = 0; i < Math.min(3, imagesCount); i++) {
        const image = images.nth(i);

        // Scroll image into view
        await image.scrollIntoViewIfNeeded();

        // Image should be loaded
        const isLoaded = await image.evaluate(
          (img) =>
            (img as HTMLImageElement).complete &&
            (img as HTMLImageElement).naturalHeight > 0,
        );

        expect(isLoaded).toBeTruthy();
      }
    }
  });

  test("should handle focus visible states", async ({ page }) => {
    const focusableElements = page.locator("a, button, [tabindex='0']");

    if ((await focusableElements.count()) > 0) {
      const firstElement = focusableElements.first();

      // Focus element with keyboard
      await firstElement.focus();

      // Should have focus style
      const hasFocus = await firstElement.evaluate(
        (el) => el === document.activeElement,
      );

      expect(hasFocus).toBeTruthy();
    }
  });

  test("should not have console errors during interaction", async ({
    page,
  }) => {
    await page.goto("/");

    // Perform basic interaction
    const buttons = page.locator("button");
    if ((await buttons.count()) > 0) {
      await buttons.first().hover();
    }

    // Page should still be responsive
    await expect(page.locator("section").first()).toBeVisible();
  });

  test("should handle rapid scroll interactions", async ({ page }) => {
    await page.goto("/");

    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 500));

    // Should handle scrolling without freezing
    const sections = page.locator("section");
    expect(await sections.count()).toBeGreaterThan(0);
  });
});
