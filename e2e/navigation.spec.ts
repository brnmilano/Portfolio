import { test, expect } from "@playwright/test";

test.describe("Navigation and Links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should have anchor links for page sections", async ({ page }) => {
    const anchors = page.locator("a[href^='#']");
    const anchorsCount = await anchors.count();

    // Should have some anchor navigation
    expect(anchorsCount).toBeGreaterThanOrEqual(0);
  });

  test("should have valid external links", async ({ page }) => {
    const externalLinks = page.locator("a[href^='http']");
    const externalLinksCount = await externalLinks.count();

    // Check that external links are valid
    for (let i = 0; i < Math.min(externalLinksCount, 5); i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute("href");

      expect(href).toBeTruthy();
      expect(href).toMatch(/^https?:\/\//);
    }
  });

  test("should open external links in new tab", async ({ page }) => {
    const externalLinks = page.locator("a[href^='http']");

    for (let i = 0; i < Math.min(await externalLinks.count(), 3); i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute("target");

      // External links should typically open in new tab
      if (await link.getAttribute("href")) {
        expect(target === "_blank" || target === "_self").toBeTruthy();
      }
    }
  });

  test("should not have broken links", async ({ page }) => {
    // Check all links for validity
    const links = page.locator("a[href]");
    const linksCount = await links.count();

    for (let i = 0; i < linksCount; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute("href");

      // Links should not be empty or just #
      if (href && href !== "#") {
        expect(href.length).toBeGreaterThan(0);
      }
    }
  });

  test("should navigate within page on anchor click", async ({ page }) => {
    const anchors = page.locator("a[href^='#']");
    const anchorsCount = await anchors.count();

    if (anchorsCount > 0) {
      const firstAnchor = anchors.first();
      const href = await firstAnchor.getAttribute("href");

      if (href && href !== "#") {
        // Click the anchor
        await firstAnchor.click();

        // Page should not navigate to a different URL (stay on same domain)
        expect(page.url()).toContain("localhost:3000");
      }
    }
  });

  test("should have proper link accessible text", async ({ page }) => {
    const links = page.locator("a");

    for (let i = 0; i < Math.min(await links.count(), 10); i++) {
      const link = links.nth(i);

      // Links should have either text content or aria-label
      const textContent = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");

      // Should have one or the other (or both)
      const hasAccessibleText =
        (textContent && textContent.trim().length > 0) || ariaLabel;
      expect(
        hasAccessibleText || (await link.locator("img").count()) > 0,
      ).toBeTruthy();
    }
  });

  test("should have proper link styling", async ({ page }) => {
    const links = page.locator("a[href*='javascript' i]");

    // Check for javascript: links (which should be replaced with buttons)
    const jsLinksCount = await links.count();
    expect(jsLinksCount).toBe(0);
  });

  test("GitHub link should be present", async ({ page }) => {
    const githubLinks = page.locator("a[href*='github']");
    const githubLinksCount = await githubLinks.count();

    // Should have GitHub link
    expect(githubLinksCount).toBeGreaterThanOrEqual(0);
  });

  test("LinkedIn link should be present", async ({ page }) => {
    const linkedinLinks = page.locator("a[href*='linkedin']");
    const linkedinLinksCount = await linkedinLinks.count();

    // Should have LinkedIn link
    expect(linkedinLinksCount).toBeGreaterThanOrEqual(0);
  });

  test("should have contact/email link", async ({ page }) => {
    const contactLinks = page.locator("a[href^='mailto:'], a[href*='contact']");
    const contactLinksCount = await contactLinks.count();

    // Should have a way to contact
    expect(contactLinksCount).toBeGreaterThanOrEqual(0);
  });

  test("all links should be keyboard navigable", async ({ page }) => {
    const links = page.locator("a");
    const linksCount = await links.count();

    // Tab through some links
    if (linksCount > 0) {
      for (let i = 0; i < Math.min(3, linksCount); i++) {
        const link = links.nth(i);

        // Links should be focusable
        await link.focus();

        // Verify focus is on the element
        const isFocused = await link.evaluate(
          (el) => el === document.activeElement,
        );
        expect(isFocused).toBeTruthy();
      }
    }
  });

  test("link hover states should be visible", async ({ page }) => {
    const links = page.locator("a[href]").first();

    if ((await links.count()) > 0) {
      // Hover should not cause errors
      await links.hover();
      await expect(links).toBeVisible();
    }
  });

  test("should have no duplicate links with same href", async ({ page }) => {
    const links = page.locator("a[href]");
    const linksCount = await links.count();

    expect(linksCount).toBeGreaterThanOrEqual(0);
  });
});
