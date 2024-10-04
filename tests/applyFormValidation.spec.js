const { test, expect } = require('@playwright/test');

test.describe("Apply Form Validation", () => {
  test.setTimeout(30000); // Set timeout to 60 seconds

  // Before each test, navigate to the NKU online degrees homepage and clear cache & cookies
  test.beforeEach(async ({ page, context }) => {
    console.log("Clearing cache and cookies...");
    await context.clearCookies(); // Clears cookies
    await page.goto('about:blank'); // Navigate to blank page to help clear cache
    await page.goto("https://onlinedegrees.nku.edu"); // Navigate to the NKU online degrees homepage
  });

  // Test to verify 'Apply Now' button redirects to the apply form
  test("Verify 'Apply Now' button leads to the apply form", async ({ page }) => {
    console.log("Clicking on 'Apply Now' button...");
    const applyNowSelector = "#mega-menu-item-6330 > a"; // Selector for the Apply Now button
    await page.click(applyNowSelector);

    console.log("Verifying 'Apply Now' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/apply/");
    console.log("'Apply Now' page loaded successfully.");
  });

  // Test to fill out form and verify confirmation page
   test("Fill out the form with valid data and verify next steps screen", async ({ page }) => {
    console.log("Clicking on 'Apply Now' button...");
    const applyNowSelector = "#mega-menu-item-6330 > a"; // Selector for the Apply Now button
    await page.click(applyNowSelector);

    console.log("Verifying 'Apply Now' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/apply/");
    console.log("'Apply Now' page loaded successfully.");

    // Wait for the form to load and become visible
    const formSelector = '.gform_wrapper'; // Selector for the form
    await page.waitForSelector(formSelector, { state: 'visible', timeout: 60000 });
    console.log("Application form is visible.");

    // Add a wait for the form elements to be stable and fully loaded
    await page.waitForLoadState('networkidle'); // Ensure all resources have loaded
    await page.waitForTimeout(3000); // Extra wait time to ensure stability

    // Fill in the required form fields using updated selectors with extra wait times
    console.log("Filling in the 'Program of Interest' dropdown...");
    const programDropdownXPath = '//select[@name="input_1"]'; // XPath for the dropdown
    await page.waitForSelector(programDropdownXPath, { state: 'visible', timeout: 60000 }); // Wait for the dropdown to be visible
    await page.selectOption(programDropdownXPath, { label: 'MBA' });
    console.log("Program selected: MBA");

    // Click on the 'First Name' field before filling it
    console.log("Filling in 'First Name'...");
    const firstNameXPath = '//input[@id="input_517579433_2"]'; // XPath for First Name
    await page.waitForSelector(firstNameXPath, { state: 'visible', timeout: 60000 }); // Wait for first name field to be visible
    await page.click(firstNameXPath); // Click on the field to focus
    await page.fill(firstNameXPath, 'John'); // Fill the field
    console.log("First Name filled.");

    // Click on the 'Last Name' field before filling it
    console.log("Filling in 'Last Name'...");
    const lastNameXPath = '//input[@id="input_517579433_3"]'; // XPath for Last Name
    await page.waitForSelector(lastNameXPath, { state: 'visible', timeout: 60000 }); // Wait for last name field to be visible
    await page.click(lastNameXPath); // Click on the field to focus
    await page.fill(lastNameXPath, 'Doe'); // Fill the field
    console.log("Last Name filled.");

    // Click on the 'Email' field before filling it
    console.log("Filling in 'Email'...");
    const emailXPath = '//input[@id="input_517579433_4"]'; // XPath for Email
    await page.waitForSelector(emailXPath, { state: 'visible', timeout: 60000 }); // Wait for email field to be visible
    await page.click(emailXPath); // Click on the field to focus
    await page.fill(emailXPath, 'johndoe@example.com'); // Fill the field
    console.log("Email filled.");

    // Click on the 'Phone' field before filling it
    console.log("Filling in 'Phone'...");
    const phoneXPath = '//input[@id="input_517579433_5"]'; // XPath for Phone
    await page.waitForSelector(phoneXPath, { state: 'visible', timeout: 60000 }); // Wait for phone field to be visible
    await page.click(phoneXPath); // Click on the field to focus
    await page.fill(phoneXPath, '(123) 456-7890'); // Fill the field
    console.log("Phone filled.");

    // Click on the 'ZIP Code' field before filling it
    console.log("Filling in 'ZIP Code'...");
    const zipCodeXPath = '//input[@id="input_517579433_6"]'; // XPath for ZIP Code
    await page.waitForSelector(zipCodeXPath, { state: 'visible', timeout: 60000 }); // Wait for ZIP Code field to be visible
    await page.click(zipCodeXPath); // Click on the field to focus
    await page.fill(zipCodeXPath, '12345'); // Fill the field
    console.log("ZIP Code filled.");

    // Fill in 'How did you hear about us?' dropdown
    console.log("Filling in 'How did you hear about us?'...");
    const howDidYouHearDropdownXPath = '//select[@name="input_7"]'; // XPath for how you heard about them
    await page.waitForSelector(howDidYouHearDropdownXPath, { state: 'visible', timeout: 60000 }); // Wait for dropdown to be visible
    await page.selectOption(howDidYouHearDropdownXPath, { label: 'Online' });
    console.log("How did you hear about us? filled: Online");

    // Click the 'Continue' button
    console.log("Clicking 'Continue' button...");
    const continueButtonXPath = '//input[@id="gform_submit_button_517579433"]'; // XPath for the Continue button
    await page.waitForSelector(continueButtonXPath, { state: 'visible', timeout: 60000 }); // Wait for button to be visible
    await page.click(continueButtonXPath);
    console.log("Form submitted by clicking 'Continue' button.");

    // Verify next steps screen or submission confirmation
    console.log("Verifying next steps screen...");
    const confirmationMessageXPath = "//h2[contains(text(),'Thank you for your submission')]"; // Adjust based on actual confirmation
    await page.waitForSelector(confirmationMessageXPath, { state: 'visible', timeout: 60000 });
    console.log("Next steps screen verified: Confirmation message displayed.");
  });
});
