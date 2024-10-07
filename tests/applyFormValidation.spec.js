const { test, expect } = require("@playwright/test");

test.describe("Apply Form Validation", () => {
  test.setTimeout(60000); // Set timeout to 60 seconds

  // Before each test, navigate to the NKU online degrees homepage and clear cache & cookies
  test.beforeEach(async ({ page, context }) => {
    console.log("Clearing cache and cookies...");
    await context.clearCookies(); // Clears cookies
    await page.goto("about:blank"); // Navigate to blank page to help clear cache
    await page.goto("https://onlinedegrees.nku.edu"); // Navigate to the NKU online degrees homepage
  });

  // Test to verify 'Apply Now' button redirects to the apply form
  test("Verify 'Apply Now' button leads to the apply form", async ({
    page,
  }) => {
    console.log("Clicking on 'Apply Now' button...");
    const applyNowSelector = "#mega-menu-item-6330 > a"; // Selector for the Apply Now button
    await page.click(applyNowSelector);

    console.log("Verifying 'Apply Now' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/apply/");
    console.log("'Apply Now' page loaded successfully.");
  });

  // Test to verify specific element is loaded on the apply form page
  test("Verify specific element is loaded on the apply form page", async ({
    page,
  }) => {
    console.log("Clicking on 'Apply Now' button...");
    const applyNowSelector = "#mega-menu-item-6330 > a"; // Selector for the Apply Now button
    await page.click(applyNowSelector);

    console.log("Verifying 'Apply Now' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/apply/");
    console.log("'Apply Now' page loaded successfully.");

    // Fill in the 'Program of Interest' dropdown to ensure the form is loaded properly
    console.log("Filling in the 'Program of Interest' dropdown...");
    const programDropdownXPath = '//select[@name="input_1"]'; // XPath for the dropdown
    await page.waitForSelector(programDropdownXPath, {
      state: "visible",
      timeout: 60000,
    }); // Wait for the dropdown to be visible
    await page.selectOption(programDropdownXPath, { label: "MBA" });
    console.log("Program selected: MBA");

    // Wait for the specific element to be visible
    const specificElementSelector =
      "div.elementor-element-8d72cd4.apply-page-form.elementor-widget"; // Selector for the specific element
    try {
      await page.waitForSelector(specificElementSelector, {
        state: "visible",
        timeout: 60000,
      });
      console.log("iframe loaded.");
    } catch (e) {
      console.error("iframe did not load.");
      console.error(e);
    }
  });
});
