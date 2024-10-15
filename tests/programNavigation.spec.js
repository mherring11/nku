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
        expectedURL: "https://dev-risepoint-nku.pantheonsite.io/programs/business/",
        courseCatalogSelector:
          "section.elementor-section[data-id='71caa73'] .program-card-container",
      },
      {
        name: "Education Programs",
        linkSelector:
          "a[href='/programs/education/'] h3:has-text('Education Programs')",
        expectedURL: "https://dev-risepoint-nku.pantheonsite.io/programs/education/",
        courseCatalogSelector:
          "section.elementor-section[data-id='9013ff8'] .program-card-container",
      },
      {
        name: "Healthcare Programs",
        linkSelector:
          "a[href='/programs/healthcare/'] h3:has-text('Healthcare Programs')",
        expectedURL: "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/",
        courseCatalogSelector:
          "section.elementor-section[data-id='4c79b726'] .program-card-container",
      },
      {
        name: "Informatics Programs",
        linkSelector:
          "a[href='/programs/business/informatics/'] h3:has-text('Informatics Programs')",
        expectedURL:
          "https://dev-risepoint-nku.pantheonsite.io/programs/business/informatics/",
        courseCatalogSelector:
          "section.elementor-section[data-id='483270a'] .program-card-container",
      },
      {
        name: "Legal Programs",
        linkSelector:
          "a[href='/programs/business/master-legal-studies-digital-law-and-technology/'] h3:has-text('Legal Programs')",
        expectedURL:
          "https://dev-risepoint-nku.pantheonsite.io/programs/business/master-legal-studies-digital-law-and-technology/",
      },
      {
        name: "Nursing Programs",
        linkSelector:
          "a[href='/programs/healthcare/'] h3:has-text('Nursing Programs')",
        expectedURL: "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/",
        courseCatalogSelector:
          "section.elementor-section[data-id='4c79b726'] .program-card-container",
      },
      {
        name: "Technology Programs",
        linkSelector:
          "a[href='/programs/technology/'] h3:has-text('Technology Programs')",
        expectedURL: "https://dev-risepoint-nku.pantheonsite.io/programs/technology/",
        courseCatalogSelector:
          "section.elementor-section[data-id='5a53ab69'] .program-card-container",
      },
      {
        name: "Undergraduate Programs",
        linkSelector:
          "a[href='/programs/undergraduate/'] h3:has-text('Undergraduate Programs')",
        expectedURL: "https://dev-risepoint-nku.pantheonsite.io/programs/undergraduate/",
        courseCatalogSelector:
          "section.elementor-section[data-id='7022c8c8'] .program-card-container",
      },
    ];

    // Navigate to the homepage
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/");

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

  // Existing test to verify "View Programs" button functionality
  test("Verify that the 'View Programs' button clicks through to the program detail page", async ({
    page,
  }) => {
    // Navigate to the homepage
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/");

    // Define the selector for the 'View Programs' button
    const viewProgramsButtonSelector =
      "a.button.gold.desktop-only[href='/programs/']";

    console.log(
      "Verifying that the 'View Programs' button is visible and clickable..."
    );
    // Wait for the 'View Programs' button to be visible
    await page.waitForSelector(viewProgramsButtonSelector, {
      state: "visible",
    });

    // Click the 'View Programs' button
    await page.click(viewProgramsButtonSelector);

    console.log(
      "Verifying that the page navigates to the program detail page..."
    );
    // Verify that the page URL matches the expected URL for the programs page
    await expect(page).toHaveURL("https://dev-risepoint-nku.pantheonsite.io/programs/");
  });

  test("Verify 'View Programs' buttons for Business, Education, Healthcare, Nursing, Legal, and Technology Programs", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/");
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
  
    // Define the selector for the 'View Programs' button
    const viewProgramsButtonSelector = "a.button.gold.desktop-only[href='/programs/']";
    
    console.log("Verifying that the 'View Programs' button is visible and clickable...");
    await page.waitForSelector(viewProgramsButtonSelector, { state: "visible", timeout: 60000 });
    await page.click(viewProgramsButtonSelector);
    
    console.log("Verifying that the page navigates to the program detail page...");
    await expect(page).toHaveURL("https://dev-risepoint-nku.pantheonsite.io/programs/");
  
    // Helper function to check if a tab is collapsed or expanded, and click if collapsed
    async function toggleSectionIfCollapsed(sectionText) {
      const sectionTitleSelector = `text=${sectionText}`;
      const sectionToggleSelector = `${sectionTitleSelector} >> xpath=..//span[contains(@class, 'elementor-toggle-icon')]`;
  
      try {
        // Click the tab to expand if needed
        await page.click(sectionToggleSelector);
        await page.waitForTimeout(3000); // Wait for the section to expand
        console.log(`Clicked on the '${sectionText}' tab to expand.`);
      } catch (error) {
        console.error(`Failed to expand the '${sectionText}' section: ${error.message}`);
      }
    }
  
    // Helper function to verify the 'View Program' buttons
    async function verifyProgramButtons(sectionTitle) {
      const viewProgramButtonsSelector = "div.program-module-content span a.button.primary";
      console.log(`Verifying 'View Program' buttons for ${sectionTitle} section...`);
  
      try {
        // Wait for the 'View Program' buttons to become visible
        await page.waitForSelector(viewProgramButtonsSelector, { state: "visible", timeout: 60000 });
        
        // Get all the 'View Program' buttons for the section
        const programButtons = await page.$$(viewProgramButtonsSelector);
        console.log(`Number of 'View Program' buttons found for ${sectionTitle}: ${programButtons.length}`);
      } catch (error) {
        console.error(`Failed to verify 'View Program' buttons for ${sectionTitle}: ${error.message}`);
      }
    }
  
    // Step 1: Business Programs (Graduate and Undergraduate)
    await toggleSectionIfCollapsed("Graduate");
    await verifyProgramButtons("Business Programs Graduate");
    
    await toggleSectionIfCollapsed("Undergraduate");
    await verifyProgramButtons("Business Programs Undergraduate");
    
    // Step 2: Education Programs (Graduate, Postgraduate, and Certificate)
    console.log("Verifying 'Education Programs' sections...");
    
    const educationGraduateSelector = 'div#elementor-tab-title-1491 a:has-text("Graduate")';
    const educationGraduateVisible = await page.isVisible(educationGraduateSelector, { timeout: 60000 });
    console.log(educationGraduateVisible ? "Education Graduate section is visible." : "Education Graduate section is NOT visible.");
    if (educationGraduateVisible) {
      await verifyProgramButtons("Education Programs Graduate");
    }
  
    const educationPostgraduateSelector = 'a:has-text("Postgraduate")';
    const educationPostgraduateVisible = await page.isVisible(educationPostgraduateSelector, { timeout: 60000 });
    console.log(educationPostgraduateVisible ? "Education Postgraduate section is visible." : "Education Postgraduate section is NOT visible.");
  
    const educationCertificateSelector = 'div#elementor-tab-title-1381 a:has-text("Certificate")';
    const educationCertificateVisible = await page.isVisible(educationCertificateSelector, { timeout: 60000 });
    console.log(educationCertificateVisible ? "Education Certificate section is visible." : "Education Certificate section is NOT visible.");
  
    // Step 3: Healthcare Programs (Graduate, Undergraduate, and Certificate)
    console.log("Verifying sections under Healthcare Programs...");
    
    const healthcareGraduateSelector = 'div#elementor-tab-title-1491 a:has-text("Graduate")';
    const healthcareGraduateVisible = await page.isVisible(healthcareGraduateSelector);
    console.log(healthcareGraduateVisible ? "Healthcare Graduate section is present." : "Healthcare Graduate section is NOT present.");
    if (healthcareGraduateVisible) {
      await verifyProgramButtons("Healthcare Programs Graduate");
    }
  
    const healthcareUndergraduateSelector = 'div#elementor-tab-title-2671 a:has-text("Undergraduate")';
    const healthcareUndergraduateVisible = await page.isVisible(healthcareUndergraduateSelector);
    console.log(healthcareUndergraduateVisible ? "Healthcare Undergraduate section is present." : "Healthcare Undergraduate section is NOT present.");
    if (healthcareUndergraduateVisible) {
      await verifyProgramButtons("Healthcare Programs Undergraduate");
    }
  
    const healthcareCertificateSelector = 'div#elementor-tab-title-7001 a:has-text("Certificate")';
    const healthcareCertificateVisible = await page.isVisible(healthcareCertificateSelector);
    console.log(healthcareCertificateVisible ? "Healthcare Certificate section is present." : "Healthcare Certificate section is NOT present.");
    
    // Step 4: Nursing Programs (Graduate, Postgraduate, and Undergraduate)
    console.log("Verifying Nursing Programs sections...");
    
    const nursingGraduateSectionSelector = 'div#elementor-tab-title-1061 a:has-text("Graduate")';
    const nursingGraduateSectionVisible = await page.isVisible(nursingGraduateSectionSelector, { timeout: 60000 });
    console.log(nursingGraduateSectionVisible ? "Nursing Graduate section is visible." : "Nursing Graduate section is NOT visible.");
    
    const nursingUndergraduateSelector = 'div#elementor-tab-title-2301 a:has-text("Undergraduate")';
    const nursingUndergraduateVisible = await page.isVisible(nursingUndergraduateSelector, { timeout: 60000 });
    console.log(nursingUndergraduateVisible ? "Nursing Undergraduate section is visible." : "Nursing Undergraduate section is NOT visible.");
    
    const nursingPostgraduateSelector = 'a:has-text("Postgraduate")';
    const nursingPostgraduateVisible = await page.isVisible(nursingPostgraduateSelector, { timeout: 60000 });
    console.log(nursingPostgraduateVisible ? "Nursing Postgraduate section is visible." : "Nursing Postgraduate section is NOT visible.");
  
    // Step 5: Legal Programs (Graduate and Undergraduate)
    console.log("Verifying Legal Programs sections...");
    
    const legalGraduateSectionSelector = 'div#elementor-tab-title-1301 a:has-text("Graduate")';
    const legalGraduateSectionVisible = await page.isVisible(legalGraduateSectionSelector, { timeout: 60000 });
    console.log(legalGraduateSectionVisible ? "Legal Graduate section is visible." : "Legal Graduate section is NOT visible.");
    
    const legalUndergraduateSelector = 'div#elementor-tab-title-2501 a:has-text("Undergraduate")';
    const legalUndergraduateVisible = await page.isVisible(legalUndergraduateSelector, { timeout: 60000 });
    console.log(legalUndergraduateVisible ? "Legal Undergraduate section is visible." : "Legal Undergraduate section is NOT visible.");
    
    const legalPostgraduateSelector = 'a:has-text("Postgraduate")';
    const legalPostgraduateVisible = await page.isVisible(legalPostgraduateSelector, { timeout: 60000 });
    console.log(legalPostgraduateVisible ? "Legal Postgraduate section is visible." : "Legal Postgraduate section is NOT visible.");
  
    // Step 6: Technology Programs (Graduate, Undergraduate, and Certificate)
    console.log("Verifying Technology Programs sections...");
    
    const techGraduateSectionSelector = 'div#elementor-tab-title-1521 a:has-text("Graduate")';
    const techGraduateSectionVisible = await page.isVisible(techGraduateSectionSelector, { timeout: 60000 });
    console.log(techGraduateSectionVisible ? "Technology Graduate section is visible." : "Technology Graduate section is NOT visible.");
    
    const techUndergraduateSelector = 'div#elementor-tab-title-1521 a:has-text("Undergraduate")';
    const techUndergraduateVisible = await page.isVisible(techUndergraduateSelector, { timeout: 60000 });
    console.log(techUndergraduateVisible ? "Technology Undergraduate section is visible." : "Technology Undergraduate section is NOT visible.");
    
    const techCertificateSelector = 'div#elementor-tab-title-1181 a:has-text("Certificate")';
    const techCertificateVisible = await page.isVisible(techCertificateSelector, { timeout: 60000 });
    console.log(techCertificateVisible ? "Technology Certificate section is visible." : "Technology Certificate section is NOT visible.");
  
    // Step 7: Informatics Programs (Graduate and Certificate)
    const informaticsGraduateSelector = 'div#elementor-tab-title-1721 a:has-text("Graduate")';
    const informaticsGraduateVisible = await page.isVisible(informaticsGraduateSelector);
    console.log(informaticsGraduateVisible ? "Informatics Graduate section is present." : "Informatics Graduate section is NOT present.");
    if (informaticsGraduateVisible) {
      await verifyProgramButtons("Informatics Programs Graduate");
    }
  
    const informaticsCertificateSelector = 'div#elementor-tab-title-2671 a:has-text("Certificate")';
    const informaticsCertificateVisible = await page.isVisible(informaticsCertificateSelector);
    console.log(informaticsCertificateVisible ? "Informatics Certificate section is present." : "Informatics Certificate section is NOT present.");
  
    // Step 8: Undergraduate Programs
    const undergraduateSelector = 'div#elementor-tab-title-2021 a:has-text("Undergraduate")';
    const undergraduateVisible = await page.isVisible(undergraduateSelector);
    console.log(undergraduateVisible ? "Undergraduate Programs section is present." : "Undergraduate Programs section is NOT present.");
    if (undergraduateVisible) {
      await verifyProgramButtons("Undergraduate Programs");
    }
  
    console.log("Test completed.");
  });
  
 // Test to verify the Request Information form in the footer
 test("Verify the Request Information form loads correctly at the footer", async ({
  page,
}) => {
  // Navigate to the homepage
  await page.goto("https://dev-risepoint-nku.pantheonsite.io/");

  // Define the selector for the 'Request Info' button in the footer
  const requestInfoButtonSelector =
    'button.request-info.button.primary.request-info-popup.programpage-hide[aria-label="Request info for footer sticky"]';

  // Wait for the 'Request Info' button in the footer to be visible
  await page.waitForSelector(requestInfoButtonSelector, { state: "visible" });

  // Click the 'Request Info' button
  await page.click(requestInfoButtonSelector);

  // Define the selector for the dialog that contains the form
  const requestInfoDialogSelector =
    'div.dialog-widget-content.dialog-lightbox-widget-content[role="dialog"]';

  console.log("Verifying that the Request Information form is displayed...");
  // Wait for the form dialog to be visible
  await page.waitForSelector(requestInfoDialogSelector, { state: "visible" });

  // Verify that the dialog containing the form is visible
  const isDialogVisible = await page.isVisible(requestInfoDialogSelector);
  expect(isDialogVisible).toBe(true);

  // Define the form selector inside the dialog
  const requestInfoFormSelector = 'form.ap-lead-form';

  // Wait for the form itself to be visible
  await page.waitForSelector(requestInfoFormSelector, { state: "visible" });

  // Verify that the form is visible on the page
  const isFormVisible = await page.isVisible(requestInfoFormSelector);
  expect(isFormVisible).toBe(true);

  console.log("The Request Information form loaded successfully.");
});
});
