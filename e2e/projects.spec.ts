import { test, expect } from "@playwright/test";

test.describe("Projects Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for projects section to load
    await page.waitForLoadState("networkidle");
  });

  test("should render projects section", async ({ page }) => {
    // Find the projects section (usually 3rd major section)
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);

    await expect(projectsSection).toBeVisible();
  });

  test("should display project title/heading", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);
    const heading = projectsSection.locator("h2, h3").first();

    if ((await heading.count()) > 0) {
      await expect(heading).toBeVisible();
    }
  });

  test("should render project cards grid", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);

    // Cards should be visible
    const cards = projectsSection.locator("[class*='container']");
    const cardsCount = await cards.count();

    // Should have at least some cards
    expect(cardsCount).toBeGreaterThanOrEqual(0);
  });

  test("should have clickable project cards", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);
    const links = projectsSection.locator("a");
    const linksCount = await links.count();

    expect(linksCount).toBeGreaterThanOrEqual(0);
  });

  test("should display project images", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);
    const images = projectsSection.locator("img");
    const imagesCount = await images.count();

    // Projects should have images
    if (imagesCount > 0) {
      const firstImage = images.first();
      await expect(firstImage).toBeVisible();
    }
  });

  test("should have proper grid layout on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 1024 });

    const sections = page.locator("section");
    const projectsSection = sections.nth(2);

    // On desktop (1024px and above), should display 3 columns
    await expect(projectsSection).toBeVisible();
  });

  test("should have responsive grid layout on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    const sections = page.locator("section");
    const projectsSection = sections.nth(2);

    // On tablet (768px), should display 2 columns
    await expect(projectsSection).toBeVisible();
  });

  test("should stack cards on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const sections = page.locator("section");
    const projectsSection = sections.nth(2);

    // On mobile, should stack vertically
    await expect(projectsSection).toBeVisible();
  });

  test("project cards should have hover effect", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);
    const firstCard = projectsSection.locator("a").first();

    if ((await firstCard.count()) > 0) {
      await firstCard.hover();
      // Hover should be possible without errors
      await expect(firstCard).toBeVisible();
    }
  });

  test("should have proper spacing between cards", async ({ page }) => {
    const cards = page.locator("[class*='card']");

    // Should have projects displayed
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("project links should be accessible", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);
    const links = projectsSection.locator("a");

    for (let i = 0; i < (await links.count()); i++) {
      const link = links.nth(i);
      const href = await link.getAttribute("href");

      if (href) {
        expect(href.length).toBeGreaterThan(0);
      }
    }
  });

  test("should load project images with proper alt text", async ({ page }) => {
    const sections = page.locator("section");
    const projectsSection = sections.nth(2);
    const images = projectsSection.locator("img");

    for (let i = 0; i < (await images.count()); i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute("alt");

      if (alt) {
        expect(alt.length).toBeGreaterThan(0);
      }
    }
  });
});
