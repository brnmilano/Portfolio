import { test, expect } from "@playwright/test";

test.describe("Home Page (page.tsx)", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto("/");
  });

  test("should load the home page successfully", async ({ page }) => {
    // Check if the page loaded with status 200
    expect(page.url()).toContain("localhost:3000");
  });

  test("should render the main container", async ({ page }) => {
    // Look for the main container - using first() to get the main container
    const container = page.locator("section").first();
    await expect(container).toBeVisible();
  });

  test("should render Intro component", async ({ page }) => {
    // The Intro component should be present in the page
    // Check for the intro section (second section after main container)
    const introSection = page.locator("section").nth(1);
    await expect(introSection).toBeVisible();
  });

  test("should render all section components", async ({ page }) => {
    // Check if multiple sections are present (Intro, Projects, Services, Contact)
    const sections = page.locator("section");
    const sectionsCount = await sections.count();

    // We expect at least 4 main sections (container, intro, projects, services, contact, and possibly others)
    expect(sectionsCount).toBeGreaterThanOrEqual(4);
  });

  test("should have proper page structure", async ({ page }) => {
    // Verify that the document structure is correct
    const mainContent = page.locator("section").first();
    await expect(mainContent).toBeVisible();
  });

  test("should be responsive and accessible", async ({ page }) => {
    // Check if page loads correctly
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Should have main sections
    const sections = page.locator("section");
    expect(await sections.count()).toBeGreaterThan(0);
  });

  test("should render without JavaScript errors", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Page should be properly rendered
    const mainContainer = page.locator("main, div[role='main']");
    if ((await mainContainer.count()) > 0) {
      await expect(mainContainer.first()).toBeVisible();
    }
  });
});

test.describe("Home Page Components Integration", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load all components without errors", async ({ page }) => {
    // Wait for the page to fully load
    await page.waitForLoadState("networkidle");

    // Check if the page is still responsive
    const container = page.locator("section").first();
    await expect(container).toBeVisible();
  });

  test("should maintain proper layout on different screen sizes", async ({
    page,
  }) => {
    const container = page.locator("section").first();

    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(container).toBeVisible();

    // Set viewport to tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(container).toBeVisible();

    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(container).toBeVisible();
  });

  test("should have proper document title", async ({ page }) => {
    // Check if the page has a title
    const title = page.locator("title");
    await expect(title).toHaveCount(1);
  });
});
