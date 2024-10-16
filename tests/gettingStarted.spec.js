const { test, expect } = require("@playwright/test");

test.describe("Programs Section", () => {
  test.setTimeout(30000); // Set test timeout to 30 seconds

  // Before each test, navigate to the NKU online degrees homepage
  test.beforeEach(async ({ page }) => {
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/");
  });

  test("Verify Getting Started section links navigate correctly", async ({
    page,
  }) => {
    // Step 1: Click on "Getting Started" to expand the menu
    const gettingStartedSelector = "#mega-menu-item-6229 > a"; // Selector for Getting Started
    console.log("Clicking on 'Getting Started' section...");
    await page.click(gettingStartedSelector);

    // Step 2: Verify Admissions Page Link
    const admissionsLink = "#mega-menu-item-6231 > a"; // Selector for Admissions link
    console.log("Waiting for 'Admissions' link to be visible...");
    await page.waitForSelector(admissionsLink, { state: "visible" });
    console.log("Clicking on 'Admissions' link...");
    await page.click(admissionsLink);
    console.log("Verifying 'Admissions' page URL...");
    await expect(page).toHaveURL(
      "https://dev-risepoint-nku.pantheonsite.io/admissions/"
    );
    console.log("Navigation to 'Admissions' page verified successfully.");
    await page.goBack();
    await page.click(gettingStartedSelector); // Re-click Getting Started to expand it again

    // Step 3: Verify Tuition Page Link
    const tuitionLink = "#mega-menu-item-6234 > a"; // Selector for Tuition link
    console.log("Waiting for 'Tuition' link to be visible...");
    await page.waitForSelector(tuitionLink, { state: "visible" });
    console.log("Clicking on 'Tuition' link...");
    await page.click(tuitionLink);
    console.log("Verifying 'Tuition' page URL...");
    await expect(page).toHaveURL(
      "https://dev-risepoint-nku.pantheonsite.io/tuition/"
    );
    console.log("Navigation to 'Tuition' page verified successfully.");
    await page.goBack();
    await page.click(gettingStartedSelector); // Re-click Getting Started to expand it again

    // Step 4: Verify Calendar Page Link
    const calendarLink = "#mega-menu-item-6230 > a"; // Selector for Calendar link
    console.log("Waiting for 'Calendar' link to be visible...");
    await page.waitForSelector(calendarLink, { state: "visible" });
    console.log("Clicking on 'Calendar' link...");
    await page.click(calendarLink);
    console.log("Verifying 'Calendar' page URL...");
    await expect(page).toHaveURL(
      "https://dev-risepoint-nku.pantheonsite.io/calendar/"
    );
    console.log("Navigation to 'Calendar' page verified successfully.");
    await page.goBack();
    await page.click(gettingStartedSelector); // Re-click Getting Started to expand it again
  });
});
