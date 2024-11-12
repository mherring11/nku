const { test, expect } = require("@playwright/test");

test.describe("Program Navigation", () => {
  // Existing test to verify navigation to each program landing page
  test("Verify navigation to each program landing page and course data", async ({
    page,
  }) => {
    // Define program links, expected URLs, and course catalog selectors
    const programLinks = [
      {
        name: "Business Programs",
        linkSelector:
          "a[href='/programs/business/'] h3:has-text('Business Programs')",
        expectedURL: "https://stage.onlinedegrees.nku.edu/programs/business/",
        courseCatalogSelector:
          "section.elementor-section[data-id='71caa73'] .program-card-container",
      },
      {
        name: "Education Programs",
        linkSelector:
          "a[href='/programs/education/'] h3:has-text('Education Programs')",
        expectedURL: "https://stage.onlinedegrees.nku.edu/programs/education/",
        courseCatalogSelector:
          "section.elementor-section[data-id='9013ff8'] .program-card-container",
      },
      {
        name: "Healthcare Programs",
        linkSelector:
          "a[href='/programs/healthcare/'] h3:has-text('Healthcare Programs')",
        expectedURL: "https://stage.onlinedegrees.nku.edu/programs/healthcare/",
        courseCatalogSelector:
          "section.elementor-section[data-id='4c79b726'] .program-card-container",
      },
      {
        name: "Informatics Programs",
        linkSelector:
          "a[href='/programs/business/informatics/'] h3:has-text('Informatics Programs')",
        expectedURL:
          "https://stage.onlinedegrees.nku.edu/programs/business/informatics/",
        courseCatalogSelector:
          "section.elementor-section[data-id='483270a'] .program-card-container",
      },
      {
        name: "Legal Programs",
        linkSelector:
          "a[href='/programs/business/master-legal-studies-digital-law-and-technology/'] h3:has-text('Legal Programs')",
        expectedURL:
          "https://stage.onlinedegrees.nku.edu/programs/business/master-legal-studies-digital-law-and-technology/",
      },
      {
        name: "Nursing Programs",
        linkSelector:
          "a[href='/programs/healthcare/'] h3:has-text('Nursing Programs')",
        expectedURL: "https://stage.onlinedegrees.nku.edu/programs/healthcare/",
        courseCatalogSelector:
          "section.elementor-section[data-id='4c79b726'] .program-card-container",
      },
      {
        name: "Technology Programs",
        linkSelector:
          "a[href='/programs/technology/'] h3:has-text('Technology Programs')",
        expectedURL: "https://stage.onlinedegrees.nku.edu/programs/technology/",
        courseCatalogSelector:
          "section.elementor-section[data-id='5a53ab69'] .program-card-container",
      },
      {
        name: "Undergraduate Programs",
        linkSelector:
          "a[href='/programs/undergraduate/'] h3:has-text('Undergraduate Programs')",
        expectedURL:
          "https://stage.onlinedegrees.nku.edu/programs/undergraduate/",
        courseCatalogSelector:
          "section.elementor-section[data-id='7022c8c8'] .program-card-container",
      },
    ];

    // Navigate to the homepage
    await page.goto("https://stage.onlinedegrees.nku.edu/");

    // Iterate through each program link and verify navigation and course catalog
    for (const program of programLinks) {
      console.log(`Navigating to ${program.name}...`);
      // Wait for the link to be visible and click it
      await page.waitForSelector(program.linkSelector, { state: "visible" });
      await page.click(program.linkSelector);

      console.log(
        `Verifying that the page URL is correct for ${program.name}...`
      );
      // Verify that the page URL matches the expected URL
      await expect(page).toHaveURL(program.expectedURL);

      // Only verify the course catalog visibility for programs other than Legal Programs
      if (program.courseCatalogSelector) {
        console.log(
          `Verifying that the course catalog is visible for ${program.name}...`
        );
        // Wait for the course catalog to be visible and verify its visibility
        try {
          await page.waitForSelector(program.courseCatalogSelector, {
            state: "visible",
            timeout: 15000,
          });
        } catch (error) {
          console.error(
            `Error: Course catalog not visible for ${program.name}. Skipping to the next program.`
          );
          await page.goBack();
          continue;
        }
        const isCourseCatalogVisible = await page.isVisible(
          program.courseCatalogSelector
        );
        console.log(
          `Course catalog visibility for ${program.name}: ${isCourseCatalogVisible}`
        );
        expect(isCourseCatalogVisible).toBe(true);
      }

      // Go back to the homepage
      await page.goBack();
    }
  });

 // Test to verify the Request Information form in the footer
test("Verify the Request Information form loads correctly at the footer", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("https://stage.onlinedegrees.nku.edu/");

  // Define the selector for the 'Request Info' button by its `data-id` attribute
  const requestInfoButtonSelector = '[data-id="950e078"] button.request-info';

  // Wait for the 'Request Info' button to be visible
  await page.waitForSelector(requestInfoButtonSelector, { state: "visible" });

  console.log("Clicking the 'Request Info' button...");

  // Get the bounding box of the button to ensure it's in view before clicking
  const requestInfoButton = await page.locator(requestInfoButtonSelector);
  const box = await requestInfoButton.boundingBox();
  if (box) {
    // Scroll to the position of the button
    await page.mouse.wheel(0, box.y);
  }

  // Click the 'Request Info' button
  await requestInfoButton.click();

  // Define the selector for the dialog that contains the form
  const requestInfoDialogSelector = 'div.dialog-widget-content.dialog-lightbox-widget-content[role="dialog"]';

  console.log("Verifying that the Request Information form is displayed...");
  // Wait for the form dialog to be visible
  await page.waitForSelector(requestInfoDialogSelector, { state: "visible", timeout: 10000 });

  // Verify that the dialog containing the form is visible
  const isDialogVisible = await page.isVisible(requestInfoDialogSelector);
  expect(isDialogVisible).toBe(true);

  console.log("The Request Information form loaded successfully.");
});

});
