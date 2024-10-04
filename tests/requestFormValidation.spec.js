const { test, expect } = require('@playwright/test');

test.describe('Verify Form Elements', () => {

  // Before each test, navigate to the form page
  test.beforeEach(async ({ page }) => {
    await page.goto("https://onlinedegrees.nku.edu"); // replace with your form URL
  });

  test('Verify required fields exist', async ({ page }) => {
    // Step 1: Ensure the form is scrolled into view
    console.log("Scrolling to the form section...");
    await page.locator('h2.form-title', { hasText: "Request Information" }).scrollIntoViewIfNeeded();

    // Step 2: Increase timeout to allow form to fully load
    const firstNameSelector = '#input_1745852837_2';
    console.log("Waiting for 'First Name' field to be visible...");
    await expect(page.locator(firstNameSelector)).toBeVisible({ timeout: 10000 });
    console.log("'First Name' field is visible.");
    
    await expect(page.locator(firstNameSelector)).toHaveAttribute('aria-required', 'true');
    console.log("'First Name' field is required.");

    // Similarly, verify other fields
    const lastNameSelector = '#input_1745852837_3';
    await expect(page.locator(lastNameSelector)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(lastNameSelector)).toHaveAttribute('aria-required', 'true');
    console.log("'Last Name' field is present and required.");

    const emailSelector = '#input_1745852837_6';
    await expect(page.locator(emailSelector)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(emailSelector)).toHaveAttribute('aria-required', 'true');
    console.log("'Email' field is present and required.");

    const phoneSelector = '#input_1745852837_4';
    await expect(page.locator(phoneSelector)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(phoneSelector)).toHaveAttribute('aria-required', 'true');
    console.log("'Phone' field is present and required.");

    const programInterestSelector = '#input_1745852837_1';
    await expect(page.locator(programInterestSelector)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(programInterestSelector)).toHaveAttribute('aria-required', 'true');
    console.log("'Program of Interest' field is present and required.");
  });
});
