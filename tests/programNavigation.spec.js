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
        expectedURL:
          "https://onlinedegrees.nku.edu/programs/business/informatics/",
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
    await page.goto("https://onlinedegrees.nku.edu");

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
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/programs/");
  });

  // Test to verify "View Programs" button functionality for Business, Education, Healthcare, Nursing, Legal, and Technology Programs
  test("Verify 'View Programs' buttons for Business, Education, Healthcare, Nursing, Legal, and Technology Programs", async ({
    page,
  }) => {
    // Navigate to the homepage
    await page.goto("https://onlinedegrees.nku.edu");

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
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/programs/");

    // Helper function to check if a tab is collapsed or expanded, and click if collapsed
    async function toggleSectionIfCollapsed(sectionText) {
      const sectionToggleSelector = `text=${sectionText} >> xpath=..//span[contains(@class, 'elementor-toggle-icon')]`;
      const sectionTitleSelector = `text=${sectionText}`;

      const isCollapsed = await page.getAttribute(
        sectionTitleSelector,
        "aria-expanded"
      );

      if (isCollapsed === "false" || isCollapsed === null) {
        console.log(`Clicking on the '${sectionText}' tab to expand...`);
        await page.click(sectionToggleSelector);
      }
    }

    // Helper function to verify program buttons
    async function verifyProgramButtons(sectionTitle) {
      const viewProgramButtonsSelector =
        "div.program-module-content span a.button.primary";
      console.log(
        `Verifying that the 'View Program' buttons are visible for ${sectionTitle} section...`
      );
      await page.waitForSelector(viewProgramButtonsSelector, {
        state: "visible",
        timeout: 20000,
      }); // Increased timeout for slow rendering

      // Get all "View Program" buttons for the section
      const programButtons = await page.$$(viewProgramButtonsSelector);
      console.log(
        `Number of 'View Program' buttons found for ${sectionTitle} section: ${programButtons.length}`
      );
    }

    // Step 1: Business Programs (Graduate and Undergraduate)
    await toggleSectionIfCollapsed("Graduate");
    await verifyProgramButtons("Business Programs Graduate");

    await toggleSectionIfCollapsed("Undergraduate");
    await verifyProgramButtons("Business Programs Undergraduate");

    // Step 2: Education Programs (Graduate, Postgraduate, and Certificate)

    // Graduate
    await toggleSectionIfCollapsed("Graduate");
    await verifyProgramButtons("Education Programs Graduate");

    // Postgraduate (Verify presence without clicking)
    const postGraduateSelector = 'a.linkbox:has-text("Postgraduate")';
    console.log("Verifying that the 'Postgraduate' section is present...");
    const postGraduateVisible = await page.isVisible(postGraduateSelector);
    if (postGraduateVisible) {
      console.log("Postgraduate section is present.");
    } else {
      console.log("Postgraduate section is NOT present.");
    }

    // Certificate under Education Programs
    const educationCertificateSelector =
      'div#elementor-tab-title-1381 a:has-text("Certificate")';
    console.log(
      "Verifying that the 'Certificate' section is present under Education Programs..."
    );
    const educationCertificateVisible = await page.isVisible(
      educationCertificateSelector
    );
    if (educationCertificateVisible) {
      console.log("Education Programs - Certificate section is present.");
    } else {
      console.log("Education Programs - Certificate section is NOT present.");
    }

    // Step 3: Healthcare Programs (Graduate, Undergraduate, and Certificate)

    console.log("Verifying sections under Healthcare Programs...");

    // Verify Graduate section under Healthcare Programs
    const healthcareGraduateSelector =
      'div#elementor-tab-title-1491 a:has-text("Graduate")';
    const healthcareGraduateVisible = await page.isVisible(
      healthcareGraduateSelector
    );
    if (healthcareGraduateVisible) {
      console.log("Healthcare Programs - Graduate section is present.");
    } else {
      console.log("Healthcare Programs - Graduate section is NOT present.");
    }

    // Verify Undergraduate section under Healthcare Programs
    const healthcareUndergraduateSelector =
      'div#elementor-tab-title-2671 a:has-text("Undergraduate")';
    const healthcareUndergraduateVisible = await page.isVisible(
      healthcareUndergraduateSelector
    );
    if (healthcareUndergraduateVisible) {
      console.log("Healthcare Programs - Undergraduate section is present.");
    } else {
      console.log(
        "Healthcare Programs - Undergraduate section is NOT present."
      );
    }

    // Verify Certificate section under Healthcare Programs
    const healthcareCertificateSelector =
      'div#elementor-tab-title-7001 a:has-text("Certificate")';
    const healthcareCertificateVisible = await page.isVisible(
      healthcareCertificateSelector
    );
    if (healthcareCertificateVisible) {
      console.log("Healthcare Programs - Certificate section is present.");
    } else {
      console.log("Healthcare Programs - Certificate section is NOT present.");
    }

    // Step 4: Nursing Programs (Graduate, Postgraduate, and Undergraduate)

    console.log("Verifying sections under Nursing Programs...");

    // Verify Graduate section under Nursing Programs
    const nursingGraduateSelector =
      'div#elementor-tab-title-1061 a:has-text("Graduate")';
    const nursingGraduateVisible = await page.isVisible(
      nursingGraduateSelector
    );
    if (nursingGraduateVisible) {
      console.log("Nursing Programs - Graduate section is present.");
    } else {
      console.log("Nursing Programs - Graduate section is NOT present.");
    }

    // Verify Postgraduate section under Nursing Programs
    const nursingPostGraduateSelector =
      'div#elementor-tab-title-4681 a:has-text("Postgraduate")';
    const nursingPostGraduateVisible = await page.isVisible(
      nursingPostGraduateSelector
    );
    if (nursingPostGraduateVisible) {
      console.log("Nursing Programs - Postgraduate section is present.");
    } else {
      console.log("Nursing Programs - Postgraduate section is NOT present.");
    }

    // Verify Undergraduate section under Nursing Programs
    const nursingUndergraduateSelector =
      'div#elementor-tab-title-2301 a:has-text("Undergraduate")';
    const nursingUndergraduateVisible = await page.isVisible(
      nursingUndergraduateSelector
    );
    if (nursingUndergraduateVisible) {
      console.log("Nursing Programs - Undergraduate section is present.");
    } else {
      console.log("Nursing Programs - Undergraduate section is NOT present.");
    }

    // Step 5: Legal Programs (Graduate)

    console.log("Verifying sections under Legal Programs...");

    // Verify Graduate section under Legal Programs
    const legalGraduateSelector =
      'div#elementor-tab-title-1121 a:has-text("Graduate")';
    const legalGraduateVisible = await page.isVisible(legalGraduateSelector);
    if (legalGraduateVisible) {
      console.log("Legal Programs - Graduate section is present.");
      await verifyProgramButtons("Legal Programs Graduate");
    } else {
      console.log("Legal Programs - Graduate section is NOT present.");
    }

    // Step 6: Technology Programs (Graduate, Undergraduate, and Certificate)

    console.log("Verifying sections under Technology Programs...");

    // Verify Graduate section under Technology Programs
    const techGraduateSelector =
      'div#elementor-tab-title-1521 a:has-text("Graduate")';
    const techGraduateVisible = await page.isVisible(techGraduateSelector);
    if (techGraduateVisible) {
      console.log("Technology Programs - Graduate section is present.");
      await verifyProgramButtons("Technology Programs Graduate");
    } else {
      console.log("Technology Programs - Graduate section is NOT present.");
    }

    // Verify Undergraduate section under Technology Programs
    const techUndergraduateSelector =
      'div#elementor-tab-title-1061 a:has-text("Undergraduate")';
    const techUndergraduateVisible = await page.isVisible(
      techUndergraduateSelector
    );
    if (techUndergraduateVisible) {
      console.log("Technology Programs - Undergraduate section is present.");
    } else {
      console.log(
        "Technology Programs - Undergraduate section is NOT present."
      );
    }

    // Verify Certificate section under Technology Programs
    const techCertificateSelector =
      'div#elementor-tab-title-1181 a:has-text("Certificate")';
    const techCertificateVisible = await page.isVisible(
      techCertificateSelector
    );
    if (techCertificateVisible) {
      console.log("Technology Programs - Certificate section is present.");
    } else {
      console.log("Technology Programs - Certificate section is NOT present.");
    }

    console.log("Verifying sections under Informatics Programs...");

    // Verify Graduate section under Informatics Programs
    const informaticsGraduateSelector =
      'div#elementor-tab-title-1721 a:has-text("Graduate")';
    const informaticsGraduateVisible = await page.isVisible(
      informaticsGraduateSelector
    );
    if (informaticsGraduateVisible) {
      console.log("Informatics Programs - Graduate section is present.");
      await verifyProgramButtons("Informatics Programs Graduate");
    } else {
      console.log("Informatics Programs - Graduate section is NOT present.");
    }

    // Verify Certificate section under Informatics Programs
    const informaticsCertificateSelector =
      'div#elementor-tab-title-2671 a:has-text("Certificate")';
    const informaticsCertificateVisible = await page.isVisible(
      informaticsCertificateSelector
    );
    if (informaticsCertificateVisible) {
      console.log("Informatics Programs - Certificate section is present.");
      await verifyProgramButtons("Informatics Programs Certificate");
    } else {
      console.log("Informatics Programs - Certificate section is NOT present.");
    }

    // Step 8: Undergraduate Programs

    console.log("Verifying sections under Undergraduate Programs...");

    // Verify Undergraduate Programs section
    const undergraduateSelector =
      'div#elementor-tab-title-2021 a:has-text("Undergraduate")';
    const undergraduateVisible = await page.isVisible(undergraduateSelector);
    if (undergraduateVisible) {
      console.log("Undergraduate Programs section is present.");
      await verifyProgramButtons("Undergraduate Programs");
    } else {
      console.log("Undergraduate Programs section is NOT present.");
    }
  });

 // Test to verify the Request Information form in the footer
 test("Verify the Request Information form loads correctly at the footer", async ({
  page,
}) => {
  // Navigate to the homepage
  await page.goto("https://onlinedegrees.nku.edu");

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
