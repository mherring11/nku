const { test, expect } = require("@playwright/test");

test.describe("Resources Section", () => {
  test.setTimeout(60000); // Set test timeout to 60 seconds

  // Before each test, navigate to the NKU online degrees homepage
  test.beforeEach(async ({ page }) => {
    await page.goto("https://onlinedegrees.nku.edu");
  });

  test("Verify Resources section links navigate correctly", async ({
    page,
  }) => {
    // Step 1: Expand the Resources section
    console.log("Clicking on 'Resources' to expand the menu...");
    const resourcesSelector = "#mega-menu-item-6235 > a"; // Selector for Resources
    await page.click(resourcesSelector);

    // Step 2: Verify the "About" link
    console.log("Clicking and verifying 'About' link...");
    const aboutLink = "#mega-menu-item-6236 > a";
    await page.click(aboutLink);
    console.log("Verifying 'About' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/about/");
    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 3: Verify the "Accreditations & Accolades" link
    console.log("Clicking and verifying 'Accreditations & Accolades' link...");
    const accreditationsLink = "#mega-menu-item-6237 > a";
    await page.click(accreditationsLink);
    console.log("Verifying 'Accreditations & Accolades' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/accreditations-accolades/"
    );
    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 4: Verify the "Financial Aid" link and perform additional checks
    console.log("Clicking and verifying 'Financial Aid' link...");
    const financialAidLink = "#mega-menu-item-6239 > a";
    await page.click(financialAidLink);
    console.log("Verifying 'Financial Aid' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/financial-aid/"
    );

    // Step 5: Test 'Contact our staff' link by looking for its text
    console.log("Looking for 'Contact our staff' link by text...");
    const contactOurStaffTextLocator = page.locator("text=Contact our staff");
    await contactOurStaffTextLocator.waitFor(); // Wait for the link to appear

    console.log("Removing target='_blank' to prevent opening a new tab...");
    await page.$eval(
      'a[href="http://inside.nku.edu/financialaid.html"]',
      (el) => el.removeAttribute("target")
    );

    // Click the link
    await contactOurStaffTextLocator.click();

    console.log("Verifying 'Contact our staff' page URL...");
    await expect(page).toHaveURL("https://inside.nku.edu/financialaid.html"); // Updated URL to match https
    await page.goBack(); // Go back after verifying the link

    // Step 6: Verify 'ofa@nku.edu' Email Visibility
    console.log("Verifying 'ofa@nku.edu' email is visible...");
    const emailLink = 'a[href="mailto:ofa@nku.edu"]'; // Selector for the email link
    await page.waitForSelector(emailLink, { state: "visible" });
    const isEmailVisible = await page.isVisible(emailLink);
    console.log("Email visibility status: ", isEmailVisible);
    expect(isEmailVisible).toBe(true); // Ensure the email link is visible

    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 7: Verify the "Military & Veterans Resources" link
    console.log(
      "Clicking and verifying 'Military & Veterans Resources' link..."
    );
    const militaryLink = "#mega-menu-item-6240 > a";
    await page.click(militaryLink);
    console.log("Verifying 'Military & Veterans Resources' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/military/");
    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 8: Verify the "Student Services" link
    console.log("Clicking and verifying 'Student Services' link...");
    const studentServicesLink = "#mega-menu-item-6241 > a";
    await page.click(studentServicesLink);
    console.log("Verifying 'Student Services' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/student-services/"
    );
    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 9: Verify the "Articles" link
    console.log("Clicking and verifying 'Articles' link...");
    const articlesLink = "#mega-menu-item-9136 > a";
    await page.click(articlesLink);
    console.log("Verifying 'Articles' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/articles/");
    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 10: Verify the "FAQs" link
    console.log("Clicking and verifying 'FAQs' link...");
    const faqsLink = "#mega-menu-item-6238 > a";
    await page.click(faqsLink);
    console.log("Verifying 'FAQs' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/faqs/");
    await page.goBack();
    await page.click(resourcesSelector); // Re-click Resources to expand again

    // Step 11: Verify the "Faculty" link
    console.log("Clicking and verifying 'Faculty' link...");
    const facultyLink = "#mega-menu-item-9135 > a";
    await page.click(facultyLink);
    console.log("Verifying 'Faculty' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/faculty/");
    await page.goBack();
  });
});
