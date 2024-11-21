const { test, expect } = require("@playwright/test");

test.describe("Programs Section", () => {
  test.setTimeout(30000); // Set test timeout to 30 seconds

  // Before each test, navigate to the NKU online degrees homepage
  test.beforeEach(async ({ page }) => {
    await page.goto("https://onlinedegrees.nku.edu/");
  });

  // Helper function to expand the 'Getting Started' section if not expanded
  async function ensureSectionExpanded(page, sectionSelector) {
    const expandedSelector = "#mega-menu-item-6229 > ul"; // Selector to check if the dropdown is expanded
    const isExpanded = await page.isVisible(expandedSelector);

    if (!isExpanded) {
      console.log("Clicking on 'Getting Started' section to expand...");
      await page.click(sectionSelector);
      await page.waitForSelector(expandedSelector, { state: "visible" });
      console.log("'Getting Started' section expanded.");
    } else {
      console.log("'Getting Started' section is already expanded.");
    }
  }

  test("Verify Getting Started section links navigate correctly", async ({
    page,
  }) => {
    const gettingStartedSelector = "#mega-menu-item-6229 > a"; // Selector for Getting Started

    // Step 1: Ensure 'Getting Started' section is expanded
    await ensureSectionExpanded(page, gettingStartedSelector);

    // Step 2: Verify Admissions Page Link
    const admissionsLink = "#mega-menu-item-6231 > a"; // Selector for Admissions link
    console.log("Waiting for 'Admissions' link to be visible...");
    await page.waitForSelector(admissionsLink, { state: "attached" });
    console.log("Clicking on 'Admissions' link...");
    await page.click(admissionsLink);
    console.log("Verifying 'Admissions' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/admissions/"
    );
    console.log("Navigation to 'Admissions' page verified successfully.");

    // Go back and re-expand 'Getting Started' section if needed
    await page.goBack();
    await ensureSectionExpanded(page, gettingStartedSelector);

    // Step 3: Verify Tuition Page Link
    const tuitionLink = "#mega-menu-item-6234 > a"; // Selector for Tuition link
    console.log("Waiting for 'Tuition' link to be visible...");
    await page.waitForSelector(tuitionLink, { state: "attached" });
    console.log("Ensuring 'Tuition' link is visible and interactable...");
    await page.waitForFunction((selector) => {
      const element = document.querySelector(selector);
      return element && element.offsetParent !== null;
    }, tuitionLink);
    console.log(
      "Clicking on 'Getting Started' section to ensure it is expanded..."
    );
    await page.click(gettingStartedSelector);
    console.log("'Getting Started' section expanded.");

    console.log("Clicking on 'Tuition' link...");
    await page.click(tuitionLink);
    console.log("Verifying 'Tuition' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/tuition/"
    );
    console.log("Navigation to 'Tuition' page verified successfully.");
    // Go back and re-expand 'Getting Started' section if needed
    await page.goBack();
    await ensureSectionExpanded(page, gettingStartedSelector);

    // Step 4: Verify Calendar Page Link
    const calendarLink = "#mega-menu-item-6230 > a"; // Selector for Calendar link
    console.log("Waiting for 'Calendar' link to be visible...");
    await page.waitForSelector(calendarLink, { state: "attached" });
    console.log("Ensuring 'Calendar' link is visible and interactable...");
    await page.waitForFunction((selector) => {
      const element = document.querySelector(selector);
      return element && element.offsetParent !== null;
    }, calendarLink);
    console.log(
      "Clicking on 'Getting Started' section to ensure it is expanded..."
    );
    await page.click(gettingStartedSelector);
    console.log("'Getting Started' section expanded.");

    console.log("Clicking on 'Calendar' link...");
    await page.click(calendarLink);
    console.log("Verifying 'Calendar' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/calendar/"
    );
    console.log("Navigation to 'Calendar' page verified successfully.");
  });
});
