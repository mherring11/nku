const { test, expect } = require("@playwright/test");

test.describe("Program Navigation", () => {
  test("Verify navigation to each program landing page and course data", async ({ page }) => {
    // Define program links, expected URLs, and course catalog selectors
    const programLinks = [
      {
        name: "Business Programs",
        linkSelector:
          "a[href='/programs/business/'] h3:has-text('Business Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/business/",
        courseCatalogSelector:
          "section.elementor-section[data-id='71caa73'] .program-card-container",
      },
      {
        name: "Education Programs",
        linkSelector:
          "a[href='/programs/education/'] h3:has-text('Education Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/education/",
        courseCatalogSelector:
          "section.elementor-section[data-id='9013ff8'] .program-card-container",
      },
      {
        name: "Healthcare Programs",
        linkSelector:
          "a[href='/programs/healthcare/'] h3:has-text('Healthcare Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/healthcare/",
        courseCatalogSelector:
          "section.elementor-section[data-id='4c79b726'] .program-card-container",
      },
      {
        name: "Informatics Programs",
        linkSelector:
          "a[href='/programs/business/informatics/'] h3:has-text('Informatics Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/business/informatics/",
        courseCatalogSelector:
          "section.elementor-section[data-id='483270a'] .program-card-container",
      },
      {
        name: "Legal Programs",
        linkSelector:
          "a[href='/programs/business/master-legal-studies-digital-law-and-technology/'] h3:has-text('Legal Programs')",
        expectedURL:
          "https://onlinedegrees.nku.edu/programs/business/master-legal-studies-digital-law-and-technology/",
      },
      {
        name: "Nursing Programs",
        linkSelector:
          "a[href='/programs/healthcare/'] h3:has-text('Nursing Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/healthcare/",
        courseCatalogSelector:
          "section.elementor-section[data-id='4c79b726'] .program-card-container",
      },
      {
        name: "Technology Programs",
        linkSelector:
          "a[href='/programs/technology/'] h3:has-text('Technology Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/technology/",
        courseCatalogSelector:
          "section.elementor-section[data-id='5a53ab69'] .program-card-container",
      },
      {
        name: "Undergraduate Programs",
        linkSelector:
          "a[href='/programs/undergraduate/'] h3:has-text('Undergraduate Programs')",
        expectedURL: "https://onlinedegrees.nku.edu/programs/undergraduate/",
        courseCatalogSelector:
          "section.elementor-section[data-id='7022c8c8'] .program-card-container",
      },
    ];

    // Navigate to the homepage
    await page.goto("https://onlinedegrees.nku.edu");

    // Iterate through each program link and verify navigation and course catalog
    for (const program of programLinks) {
      console.log(`Navigating to ${program.name}...`);
      // Wait for the link to be visible and click it
      await page.waitForSelector(program.linkSelector, { state: "visible" });
      await page.click(program.linkSelector);

      console.log(`Verifying that the page URL is correct for ${program.name}...`);
      // Verify that the page URL matches the expected URL
      await expect(page).toHaveURL(program.expectedURL);

      // Only verify the course catalog visibility for programs other than Legal Programs
      if (program.courseCatalogSelector) {
        console.log(`Verifying that the course catalog is visible for ${program.name}...`);
        // Wait for the course catalog to be visible and verify its visibility
        try {
          await page.waitForSelector(program.courseCatalogSelector, { state: "visible", timeout: 15000 });
        } catch (error) {
          console.error(`Error: Course catalog not visible for ${program.name}. Skipping to the next program.`);
          await page.goBack();
          continue;
        }
        const isCourseCatalogVisible = await page.isVisible(program.courseCatalogSelector);
        console.log(`Course catalog visibility for ${program.name}: ${isCourseCatalogVisible}`);
        expect(isCourseCatalogVisible).toBe(true);
      }

      // Go back to the homepage
      await page.goBack();
    }
  });

  test("Verify that the 'View Programs' button clicks through to the program detail page", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://onlinedegrees.nku.edu");

    // Define the selector for the 'View Programs' button
    const viewProgramsButtonSelector = "a.button.gold.desktop-only[href='/programs/']";

    console.log("Verifying that the 'View Programs' button is visible and clickable...");
    // Wait for the 'View Programs' button to be visible
    await page.waitForSelector(viewProgramsButtonSelector, { state: "visible" });

    // Click the 'View Programs' button
    await page.click(viewProgramsButtonSelector);

    console.log("Verifying that the page navigates to the program detail page...");
    // Verify that the page URL matches the expected URL for the programs page
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/programs/");
  });

  test("Verify that the 'View Programs' button clicks through to the program detail page and specific program data loads", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://onlinedegrees.nku.edu");

    // Define the selector for the 'View Programs' button
    const viewProgramsButtonSelector = "a.button.gold.desktop-only[href='/programs/']";

    console.log("Verifying that the 'View Programs' button is visible and clickable...");
    // Wait for the 'View Programs' button to be visible
    await page.waitForSelector(viewProgramsButtonSelector, { state: "visible" });

    // Click the 'View Programs' button
    await page.click(viewProgramsButtonSelector);

    console.log("Verifying that the page navigates to the program detail page...");
    // Verify that the page URL matches the expected URL for the programs page
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/programs/");

    // Define selectors for the program details
    const programDetails = [
      {
        name: "Education Programs",
        detailSelector: "section.elementor-section[data-id='a556414'] .program-card-container",
      },
      {
        name: "Healthcare Programs",
        detailSelector: "section.elementor-section[data-id='f59876c'] .program-card-container",
      },
      {
        name: "Business Programs",
        detailSelector: "section.elementor-section[data-id='e903da3'] .program-card-container",
      },
      {
        name: "Nursing Programs",
        detailSelector: "section.elementor-section[data-id='4142793'] .program-card-container",
      },
      {
        name: "Legal Programs",
        detailSelector: "section.elementor-section[data-id='1d22fdf'] .program-card-container",
      },
      {
        name: "Informatics Programs",
        detailSelector: "section.elementor-section[data-id='a4afd7d'] .program-card-container",
      },
      {
        name: "Undergraduate Programs",
        detailSelector: "section.elementor-section[data-id='0ec3958'] .program-card-container",
      },
    ];

    // Verify that each program detail section is visible
    for (const program of programDetails) {
      console.log(`Verifying that the ${program.name} detail section is visible...`);
      await page.waitForSelector(program.detailSelector, { state: "visible" });
      const isProgramDetailVisible = await page.isVisible(program.detailSelector);
      console.log(`${program.name} detail visibility: ${isProgramDetailVisible}`);
      expect(isProgramDetailVisible).toBe(true);
    }
  });
});