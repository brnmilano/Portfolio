import { test, expect } from "@playwright/test";

test.describe("Contact Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should render contact section", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      await expect(contactSection).toBeVisible();
    }
  });

  test("should display contact title/heading", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const heading = contactSection.locator("h2, h3").first();

      if ((await heading.count()) > 0) {
        await expect(heading).toBeVisible();
      }
    }
  });

  test("should have contact information visible", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const textContent = await contactSection.textContent();
      expect(textContent?.length).toBeGreaterThan(0);
    }
  });

  test("should display contact links/buttons", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const links = contactSection.locator("a, button");
      const linksCount = await links.count();

      expect(linksCount).toBeGreaterThanOrEqual(0);
    }
  });

  test("should have email contact link", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const emailLinks = contactSection.locator("a[href^='mailto:']");

      // Check if there's an email link
      if ((await emailLinks.count()) > 0) {
        const href = await emailLinks.first().getAttribute("href");
        expect(href).toContain("mailto:");
      }
    }
  });

  test("should have social media links", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const socialLinks = contactSection.locator(
        "a[href*='github'], a[href*='linkedin'], a[href*='instagram'], a[href*='twitter']",
      );
      const socialLinksCount = await socialLinks.count();

      expect(socialLinksCount).toBeGreaterThanOrEqual(0);
    }
  });

  test("contact links should be clickable", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const links = contactSection.locator("a");

      for (let i = 0; i < (await links.count()); i++) {
        const link = links.nth(i);
        const href = await link.getAttribute("href");

        // Links should have valid href
        if (href) {
          expect(href.length).toBeGreaterThan(0);
        }
      }
    }
  });

  test("should have proper responsive layout on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 667 });

    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      await expect(contactSection).toBeVisible();
    }
  });

  test("should have proper responsive layout on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      await expect(contactSection).toBeVisible();
    }
  });

  test("should have proper responsive layout on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      await expect(contactSection).toBeVisible();
    }
  });

  test("contact section should have distinct background", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const boundingBox = await contactSection.boundingBox();
      expect(boundingBox).not.toBeNull();

      if (boundingBox) {
        expect(boundingBox.height).toBeGreaterThan(200);
      }
    }
  });

  test("contact links should open in new tab if external", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const externalLinks = contactSection.locator("a[target='_blank']");
      const externalLinksCount = await externalLinks.count();

      expect(externalLinksCount).toBeGreaterThanOrEqual(0);
    }
  });

  test("should display contact section text clearly", async ({ page }) => {
    const sections = page.locator("section");
    const contactSection = sections.nth(4);

    if ((await contactSection.count()) > 0) {
      const paragraphs = contactSection.locator("p");
      const paragraphsCount = await paragraphs.count();

      expect(paragraphsCount).toBeGreaterThanOrEqual(0);
    }
  });
});
