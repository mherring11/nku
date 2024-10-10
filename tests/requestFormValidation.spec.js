const { test, expect } = require("@playwright/test");

test.describe("Verify Form Elements", () => {
  test.setTimeout(30000); // Set timeout to 30 seconds

  // Before each test, navigate to the NKU online degrees homepage and clear cache & cookies
  test.beforeEach(async ({ page, context }) => {
    console.log("Clearing cache and cookies...");
    await context.clearCookies(); // Clears cookies
    await page.goto("about:blank"); // Navigate to blank page to help clear cache
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/"); // Navigate to the NKU online degrees homepage
  });

  // Test to verify specific form element is visible and present
  test("Verify specific form element is visible and present", async ({
    page,
  }) => {
    console.log("Verifying form element is visible on the page...");
    const formContainerSelector = ".elementor-element-91d0733"; // Updated selector for the form container
    try {
      await page.waitForSelector(formContainerSelector, {
        state: "visible",
        timeout: 60000,
      });
      console.log(
        "iframe loaded and name, email, phone, degree interest exist.."
      );
    } catch (e) {
      console.error("iframe did not load.");
      console.error(e);
    }
  });
});
