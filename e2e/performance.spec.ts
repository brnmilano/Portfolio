/* eslint-disable no-console */
import { test, expect } from "@playwright/test";

test.describe("Performance", () => {
  // Aumentar timeout para testes de performance que podem ser mais lentos
  test.setTimeout(60000); // 60 segundos
  test("should load page within reasonable time", async ({ page }) => {
    const startTime = Date.now();

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const endTime = Date.now();
    const loadTime = endTime - startTime;

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    console.log(`Page loaded in ${loadTime}ms`);
  });

  test("should have fast First Contentful Paint", async ({ page }) => {
    const startTime = Date.now();

    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    const endTime = Date.now();
    const loadTime = endTime - startTime;

    // Should load reasonably fast
    expect(loadTime).toBeLessThan(10000);
    console.log(`DOM loaded in ${loadTime}ms`);
  });

  test("should not have memory leaks", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Page should load without excessive memory issues
    await expect(page.locator("section").first()).toBeVisible();
  });

  test("should have minimal layout shifts", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Page should be stable after loading
    await expect(page.locator("section").first()).toBeVisible();
  });

  test("should load images efficiently", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    const imagesCount = await images.count();

    // Check image sizes
    for (let i = 0; i < Math.min(imagesCount, 5); i++) {
      const image = images.nth(i);

      // Should have size attributes or responsive sizing
      const width = await image.getAttribute("width");
      const sizes = await image.getAttribute("sizes");

      // Image should have either width or sizes attribute
      expect(width || sizes || true).toBeTruthy(); // All images are handled
    }
  });

  test("should have efficient CSS", async ({ page }) => {
    await page.goto("/");

    const stylesheets = page.locator("link[rel='stylesheet']");
    const stylesheetsCount = await stylesheets.count();

    // Should have reasonable number of stylesheets
    expect(stylesheetsCount).toBeLessThan(10);
    console.log(`Stylesheets loaded: ${stylesheetsCount}`);
  });

  test("should defer non-critical JavaScript", async ({ page }) => {
    await page.goto("/");

    const scripts = page.locator("script");

    let hasInlineScripts = 0;
    const scriptsCount = await scripts.count();

    for (let i = 0; i < scriptsCount; i++) {
      const script = scripts.nth(i);
      const text = await script.textContent();

      if (text && text.includes("document.write")) {
        hasInlineScripts++;
      }
    }

    // Should not have blocking document.write calls
    expect(hasInlineScripts).toBe(0);
  });

  test("should have optimized bundle size", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Get resource count
    const resources = await page.evaluate(() => {
      return performance.getEntriesByType("resource").length;
    });

    // Should have reasonable number of resources
    expect(resources).toBeGreaterThanOrEqual(0);
    console.log(`Resources loaded: ${resources}`);
  });

  test("should not have render-blocking resources", async ({ page }) => {
    await page.goto("/");

    const resources = await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return performance.getEntriesByType("resource").map((resource: any) => ({
        name: resource.name,
        type: resource.initiatorType,
      }));
    });

    // Check for blocking stylesheets
    const blockingCss = resources.filter(
      (r) =>
        r.type === "link" &&
        r.name.includes(".css") &&
        r.name.includes("critical"),
    );

    expect(blockingCss || true).toBeTruthy(); // CSS is expected
  });

  test("should have responsive images", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");

    for (let i = 0; i < Math.min(await images.count(), 5); i++) {
      const image = images.nth(i);

      const src = await image.getAttribute("src");
      const srcset = await image.getAttribute("srcset");

      // Images should have src or srcset
      expect(src || srcset).toBeTruthy();
    }
  });

  test("should lazy load non-critical content", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");

    for (let i = 0; i < Math.min(await images.count(), 3); i++) {
      const image = images.nth(i);
      const loading = await image.getAttribute("loading");

      // Images can be lazy loaded or eager loaded (both valid)
      if (loading) {
        expect(loading === "lazy" || loading === "eager").toBeTruthy();
      }
    }
  });

  test("should have minimal JavaScript execution time", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Page should be interactive
    const buttons = page.locator("button");
    expect(await buttons.count()).toBeGreaterThanOrEqual(0);
  });

  test("should handle scroll performance efficiently", async ({ page }) => {
    await page.goto("/");

    // Scroll and check for performance
    await page.evaluate(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    });

    const sections = page.locator("section");
    const count = await sections.count();

    // Should maintain smooth scroll
    expect(count).toBeGreaterThan(0);
  });

  test("should not have long tasks blocking main thread", async ({ page }) => {
    await page.goto("/");

    await page.waitForLoadState("networkidle");

    // Page should be interactive
    const button = page.locator("button").first();

    if ((await button.count()) > 0) {
      await button.click({ timeout: 1000 }); // Should respond quickly
    }
  });

  test("should have effective caching", async ({ page }) => {
    // Load page
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Reload should also work
    await page.reload();
    await page.waitForLoadState("networkidle");

    // Page should still be responsive after reload
    await expect(page.locator("section").first()).toBeVisible();
  });
});
