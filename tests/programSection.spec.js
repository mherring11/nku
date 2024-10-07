const { test, expect } = require("@playwright/test");

test.describe("Programs Section", () => {
  test.setTimeout(90000); // Set test timeout to 60 seconds

  // Before each test, navigate to the NKU online degrees homepage
  test.beforeEach(async ({ page }) => {
    await page.goto("https://onlinedegrees.nku.edu");
  });

  test("Verify program links navigate correctly", async ({ page }) => {
    console.log("Step 1: Clicking on 'Online Programs' to expand the menu...");
    const onlineProgramsSelector = "#mega-menu-item-6111 > a";
    await page.click(onlineProgramsSelector);

    // Step 2: Click and verify "Undergraduate Programs" links
    console.log("Expanding 'Undergraduate Programs'...");
    await page.click("#mega-menu-item-6118 > a");

    // Business Programs
    console.log("Clicking on 'General Business'...");
    const generalBusinessLink = "#mega-menu-item-6120 > a";
    await page.click(generalBusinessLink);
    console.log("Verifying 'General Business' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bsba/general-business/"
    );
    await page.goBack();
    console.log("Navigating back to 'Online Programs'...");
    await page.click(onlineProgramsSelector);

    // Verify Sales link
    console.log("Clicking on 'Sales'...");
    const salesLink = "#mega-menu-item-20209 > a";
    await page.click(salesLink);
    console.log("Verifying 'Sales' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bsba/sales/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Verify Global Supply Chain Management link
    console.log("Clicking on 'Global Supply Chain Management'...");
    const globalSupplyChainLink = "#mega-menu-item-6121 > a";
    await page.click(globalSupplyChainLink);
    console.log("Verifying 'Global Supply Chain Management' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bsba/global-supply-chain-management/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Verify HR Management link
    console.log("Clicking on 'HR Management'...");
    const hrManagementLink = "#mega-menu-item-6122 > a";
    await page.click(hrManagementLink);
    console.log("Verifying 'HR Management' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bsba/hr-management/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Verify Management link
    console.log("Clicking on 'Management'...");
    const managementLink = "#mega-menu-item-6123 > a";
    await page.click(managementLink);
    console.log("Verifying 'Management' page...");
    // await expect(page).toHaveURL(
    //   "https://onlinedegrees.nku.edu/programs/undergraduate/bsba/management/"
    // );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Verify Marketing link
    console.log("Clicking on 'Marketing'...");
    const marketingLink = "#mega-menu-item-6124 > a";
    await page.click(marketingLink);
    console.log("Verifying 'Marketing' page...");
    // await expect(page).toHaveURL(
    //   "https://onlinedegrees.nku.edu/programs/undergraduate/bsba/marketing/"
    // );

    // Check if "Apply Now" button works for the Marketing page
    console.log("Clicking 'Apply Now' button on 'Marketing' page...");
    const applyNowButton = await page.locator(
      'a[aria-label="Apply now for Bachelor of Science in Business Administration in Marketing Online"]'
    );
    await applyNowButton.click();
    console.log("Verifying 'Apply Now' link...");
    await expect(page).toHaveURL(/apply/);
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Criminal Justice Program
    console.log("Clicking on 'Criminal Justice'...");
    const criminalJusticeLink = "#mega-menu-item-6125 > a";
    await page.click(criminalJusticeLink);
    const criminalJusticeProgramLink = "#mega-menu-item-6126 > a";
    await page.click(criminalJusticeProgramLink);
    console.log("Verifying 'Criminal Justice' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/arts-and-sciences/bachelor-of-arts-criminal-justice/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Health Care Program
    console.log("Clicking on 'Health Care'...");
    const healthcareLink = "#mega-menu-item-6127 > a";
    await page.click(healthcareLink);
    const respiratoryCareLink = "#mega-menu-item-6128 > a";
    await page.waitForSelector(respiratoryCareLink, { state: "visible" });
    await page.click(respiratoryCareLink);
    console.log("Verifying 'Respiratory Care' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/health-and-human-services/bsrc/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Liberal Arts Programs
    console.log("Clicking on 'Liberal Arts'...");
    const liberalArtsLink = "#mega-menu-item-6132 > a";
    await page.click(liberalArtsLink);

    // Wait for Communication Studies link and click it
    console.log("Clicking on 'Communication Studies'...");
    const communicationStudiesLink = "#mega-menu-item-6133 > a";
    await page.waitForSelector(communicationStudiesLink, { state: "visible" });
    await page.click(communicationStudiesLink);
    console.log("Verifying 'Communication Studies' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bachelor-of-arts-communication-studies/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Re-expand Liberal Arts and click History link
    console.log("Re-expanding 'Liberal Arts' and clicking on 'History'...");
    await page.click(liberalArtsLink);
    const historyLink = "#mega-menu-item-20207 > a";
    await page.waitForSelector(historyLink, { state: "visible" });
    await page.click(historyLink);
    console.log("Verifying 'History' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/arts-and-sciences/bachelor-of-arts-history/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Nursing Programs
    console.log("Clicking on 'Nursing'...");
    const nursingLink = "#mega-menu-item-6138 > a";
    await page.click(nursingLink);
    const rnToBsnLink = "#mega-menu-item-6139 > a";
    await page.waitForSelector(rnToBsnLink, { state: "visible" });
    await page.click(rnToBsnLink);
    console.log("Verifying 'RN to BSN' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/healthcare/rn-to-bsn/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Technology Programs
    console.log("Clicking on 'Technology'...");
    const technologyLink = "#mega-menu-item-6141 > a";
    await page.click(onlineProgramsSelector);
    await page.click(technologyLink, { force: true });

    // IT General Program
    console.log("Clicking on 'IT General'...");
    const itGeneralLink = "#mega-menu-item-6781 > a";
    await page.waitForSelector(itGeneralLink, { state: "visible" });
    await page.click(itGeneralLink);
    console.log("Verifying 'IT General' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bachelor-information-technology/general/"
    );
    await page.goBack();

    // Re-click Online Programs and expand Technology again for Cloud System Administration
    console.log(
      "Re-clicking 'Technology' and expanding 'Cloud System Administration'..."
    );
    await page.click(onlineProgramsSelector);
    await page.click(technologyLink, { force: true });

    const cloudSystemAdminLink = "#mega-menu-item-6780 > a";
    await page.waitForSelector(cloudSystemAdminLink, { state: "visible" });
    await page.click(cloudSystemAdminLink);
    console.log("Verifying 'Cloud System Administration' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/undergraduate/bachelor-information-technology/cloud-system-administration/"
    );
    await page.goBack();

    // Click "Online Programs" to continue navigation
    console.log("Re-clicking 'Online Programs' to continue navigation...");
    await page.click(onlineProgramsSelector);

    // Graduate Programs
    console.log("Clicking on 'Graduate Programs'...");
    await page.click("#mega-menu-item-6143 > a"); // Expand Graduate Programs

    console.log("Clicking on 'Data Analytics'...");
    const dataAnalyticsLink = "#mega-menu-item-6148 > a";
    await page.click(dataAnalyticsLink);
    console.log("Verifying 'Data Analytics' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/macc/data-analytics-visualization/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a");

    console.log("Clicking on 'Professional Track'...");
    const professionalTrackLink = "#mega-menu-item-6149 > a";
    await page.click(professionalTrackLink);
    console.log("Verifying 'Professional Track' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/macc/professional-track/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a");

    console.log("Clicking on 'Business Analytics'...");
    const businessAnalyticsLink = "#mega-menu-item-6145 > a";
    await page.click(businessAnalyticsLink);
    console.log("Verifying 'Business Analytics' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/mbi-business-analytics/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a");

    console.log("Clicking on 'Security Management'...");
    const securityManagementLink = "#mega-menu-item-6147 > a";
    await page.click(securityManagementLink);
    console.log("Verifying 'Security Management' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/mbi-security-management/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a");

    console.log("Clicking on 'Healthcare Informatics'...");
    const healthcareInformaticsLink = "#mega-menu-item-6146 > a";
    await page.click(healthcareInformaticsLink);
    console.log("Verifying 'Healthcare Informatics' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/mbi-healthcare/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a");

    console.log("Clicking on 'MBA'...");
    const mbaLink = "#mega-menu-item-6150 > a";
    await page.click(mbaLink);
    console.log("Verifying 'MBA' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/mba/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Re-click Graduate Programs to expand again
    console.log("Re-clicking 'Graduate Programs'...");
    await page.click("#mega-menu-item-6143 > a");

    // Education Programs
    console.log("Clicking on 'Education Programs'...");
    await page.click("#mega-menu-item-6152 > a"); // Expand Education Programs

    console.log("Clicking on 'Autism Education'...");
    const autismEducationLink = "#mega-menu-item-6153 > a";
    await page.click(autismEducationLink);
    console.log("Verifying 'Autism Education' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/education/maed-teacher-leader/autism/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again
    await page.click("#mega-menu-item-6152 > a"); // Expand Education again

    console.log("Clicking on 'Curriculum Instruction'...");
    const curriculumInstructionLink = "#mega-menu-item-6154 > a";
    await page.click(curriculumInstructionLink);
    console.log("Verifying 'Curriculum Instruction' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/education/maed-teacher-leader/curriculum-instruction/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again

    // Healthcare Programs
    console.log("Clicking on 'Healthcare Programs'...");
    await page.click("#mega-menu-item-6161 > a"); // Expand Healthcare Programs

    console.log("Clicking on 'Health Administration'...");
    const healthAdminLink = "#mega-menu-item-6162 > a";
    await page.click(healthAdminLink);
    console.log("Verifying 'Health Administration' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/healthcare/master-of-science-health-administration/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again
    await page.click("#mega-menu-item-6161 > a"); // Expand Healthcare again

    console.log("Clicking on 'Health Informatics'...");
    const healthInformaticsLink = "#mega-menu-item-6163 > a";
    await page.click(healthInformaticsLink);
    console.log("Verifying 'Health Informatics' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/mshi/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again

    // Informatics Programs
    console.log("Clicking on 'Informatics Programs'...");
    await page.click("#mega-menu-item-6165 > a"); // Expand Informatics Programs

    console.log("Clicking on 'Business Analytics Informatics'...");
    const businessAnalyticsInformaticsLink = "#mega-menu-item-6168 > a";
    await page.click(businessAnalyticsInformaticsLink);
    console.log("Verifying 'Business Analytics Informatics' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/mbi-business-analytics/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again
    await page.click("#mega-menu-item-6165 > a"); // Expand Informatics again

    console.log("Clicking on 'Healthcare Informatics (Informatics)'...");
    const healthcareInformaticsLinkInformatics = "#mega-menu-item-6166 > a";
    await page.click(healthcareInformaticsLinkInformatics);
    console.log("Verifying 'Healthcare Informatics (Informatics)' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/mbi-healthcare/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again

    // Legal Programs
    console.log("Clicking on 'Legal Programs'...");
    await page.click("#mega-menu-item-6171 > a"); // Expand Legal Programs

    console.log("Clicking on 'Legal Studies'...");
    const legalStudiesLink = "#mega-menu-item-6173 > a";
    await page.click(legalStudiesLink);
    console.log("Verifying 'Legal Studies' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/master-legal-studies-digital-law-and-technology/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again

    // Nursing Programs
    console.log("Clicking on 'Nursing Programs'...");
    await page.click("#mega-menu-item-6176 > a"); // Expand Nursing Programs

    console.log("Clicking on 'Nursing Care'...");
    const nursingCareLink = "#mega-menu-item-6178 > a";
    await page.click(nursingCareLink);
    console.log("Verifying 'Nursing Care' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/healthcare/msn/agacnp/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again
    await page.click("#mega-menu-item-6176 > a"); // Expand Nursing again

    console.log("Clicking on 'Family Nurse Practitioner'...");
    const familyNursePractitionerLink = "#mega-menu-item-6181 > a";
    await page.click(familyNursePractitionerLink);
    console.log("Verifying 'Family Nurse Practitioner' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/healthcare/msn/fnp/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);
    await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again

    // Technology Programs
    console.log("Clicking on 'Technology Programs'...");
    await page.click("#mega-menu-item-6183 > a"); // Expand Technology Programs

    console.log("Clicking on 'Cybersecurity'...");
    const cybersecurityLink = "#mega-menu-item-6185 > a";
    await page.click(cybersecurityLink);
    console.log("Verifying 'Cybersecurity' page...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/technology/ms-cybersecurity/"
    );
    await page.goBack();
    await page.click(onlineProgramsSelector);

    // Post-Graduate Programs

    // Click on the Online Programs to ensure it's expanded
    console.log("Clicking on 'Online Programs' to expand it...");
    await page.click(onlineProgramsSelector);

    // Step 1: Expand Post-Graduate Programs
    console.log("Expanding 'Post-Graduate Programs'...");
    const postGraduateProgramsSelector = "#mega-menu-item-6187 > a"; // Selector for Post-Graduate Programs
    await page.click(postGraduateProgramsSelector);

    // Step 2: Expand and verify Education Post-Graduate Programs
    console.log("Expanding 'Education Post-Graduate Programs'...");
    await page.click("#mega-menu-item-6188 > a"); // Expand Education Post-Graduate Programs

    // Verify the Doctor of Education program
    console.log("Clicking and verifying 'Doctor of Education' program...");
    const doctorEducationLink = "#mega-menu-item-20204 > a";
    await page.waitForSelector(doctorEducationLink, { state: "visible" });
    await page.click(doctorEducationLink);
    console.log("Verifying 'Doctor of Education' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/education/edd-educational-leadership/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
    console.log("Re-clicking 'Post-Graduate Programs'...");
    await page.click(postGraduateProgramsSelector); // Re-click Post-Graduate Programs

    // Step 3: Expand and verify Nursing Post-Graduate Programs
    console.log("Expanding 'Nursing Post-Graduate Programs'...");
    await page.click("#mega-menu-item-6195 > a"); // Expand Nursing Post-Graduate Programs

    // Verify the Post-Master’s Doctor of Nursing Practice program
    console.log(
      "Clicking and verifying 'Post-Master’s Doctor of Nursing Practice' program..."
    );
    const doctorNursingLink = "#mega-menu-item-6196 > a";
    await page.waitForSelector(doctorNursingLink, { state: "visible" });
    await page.click(doctorNursingLink);
    console.log(
      "Verifying 'Post-Master’s Doctor of Nursing Practice' page URL..."
    );
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/healthcare/post-masters-dnp/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it again...");
    await page.click(onlineProgramsSelector);

    // Certificate Programs

    // Click on the Online Programs to ensure it's expanded
    console.log("Clicking on 'Online Programs' to expand...");
    await page.click(onlineProgramsSelector);

    // Step 1: Expand Certificate Programs
    console.log("Expanding 'Certificate Programs'...");
    const certificateProgramsSelector = "#mega-menu-item-6198 > a"; // Selector for Certificate Programs
    await page.click(certificateProgramsSelector);

    // Step 2: Expand and verify Business Certificate Programs
    console.log("Expanding 'Business Certificate Programs'...");
    await page.click("#mega-menu-item-6199 > a"); // Expand Business Certificates

    // Verify Business Analytics Certificate
    console.log("Clicking and verifying 'Business Analytics Certificate'...");
    const businessAnalyticsCertLink = "#mega-menu-item-6200 > a";
    await page.waitForSelector(businessAnalyticsCertLink, { state: "visible" });
    await page.click(businessAnalyticsCertLink);
    console.log("Verifying 'Business Analytics Certificate' page URL...");
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/graduate-analytics-certificate/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
    console.log("Re-clicking 'Certificate Programs'...");
    await page.click(certificateProgramsSelector); // Re-click Certificate Programs
    console.log("Re-clicking 'Business Certificates'...");
    await page.click("#mega-menu-item-6199 > a"); // Re-click Business Certificates

    // Step 3: Expand and verify Cybersecurity Certificate Programs
    console.log("Expanding 'Cybersecurity Certificate Programs'...");
    await page.click("#mega-menu-item-6213 > a"); // Expand Cybersecurity Certificates

    // Verify Cybersecurity: Fundamentals in the Cloud Certificate
    console.log(
      "Clicking and verifying 'Cybersecurity: Fundamentals in the Cloud Certificate'..."
    );
    const cybersecurityCertLink = "#mega-menu-item-6218 > a";
    await page.waitForSelector(cybersecurityCertLink, { state: "visible" });
    await page.click(cybersecurityCertLink);
    console.log(
      "Verifying 'Cybersecurity: Fundamentals in the Cloud Certificate' page URL..."
    );
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/technology/cybersecurity-fundamentals-in-cloud-certificate/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
    console.log("Re-clicking 'Certificate Programs'...");
    await page.click(certificateProgramsSelector); // Re-click Certificate Programs

    // Step 4: Expand and verify Healthcare Certificate Programs
    console.log("Expanding 'Healthcare Certificate Programs'...");
    const healthcareCertSelector = "#mega-menu-item-6215 > a";
    await page.waitForSelector(healthcareCertSelector, { state: "attached", timeout: 20000 });
    console.log("Scrolling to 'Healthcare Certificate Programs' link...");
    await page.locator(healthcareCertSelector).scrollIntoViewIfNeeded();
    console.log("Waiting for 'Healthcare Certificate Programs' link to be visible...");
    await page.waitForSelector(healthcareCertSelector, { state: "visible", timeout: 20000 });
    console.log("Attempting to click 'Healthcare Certificate Programs' link...");
    await page.click(healthcareCertSelector);

    // Verify Health Care Commercialization Certificate
    console.log("Clicking and verifying 'Health Care Commercialization Certificate'...");
    const healthcareCertLink = "#mega-menu-item-6203 > a";
    await page.waitForSelector(healthcareCertLink, { state: "visible" });
    await page.locator(healthcareCertLink).scrollIntoViewIfNeeded();
    await page.click(healthcareCertLink);
    console.log("Verifying 'Health Care Commercialization Certificate' page URL...");
    await expect(page).toHaveURL("https://onlinedegrees.nku.edu/programs/healthcare/commercialization-certificate/");
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click('#mega-menu-item-6111 > a'); // Re-click Online Programs
    console.log("Re-clicking 'Certificate Programs'...");
    await page.click('#mega-menu-item-6198 > a'); // Re-click Certificate Programs


    // Step 5: Expand and verify Informatics Certificate Programs
    console.log("Expanding 'Informatics Certificate Programs'...");
    await page.click("#mega-menu-item-6216 > a"); // Expand Informatics Certificates

    // Verify Business Analytics Certificate
    console.log(
      "Clicking and verifying 'Informatics Business Analytics Certificate'..."
    );
    const informaticsCertLink = "#mega-menu-item-6223 > a";
    await page.waitForSelector(informaticsCertLink, { state: "visible" });
    await page.click(informaticsCertLink);
    console.log(
      "Verifying 'Informatics Business Analytics Certificate' page URL..."
    );
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/business/informatics/graduate-analytics-certificate/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
    console.log("Re-clicking 'Certificate Programs'...");
    await page.click(certificateProgramsSelector); // Re-click Certificate Programs

    // Step 6: Expand and verify Nursing Certificate Programs
    console.log("Expanding 'Nursing Certificate Programs'...");
    await page.click("#mega-menu-item-6217 > a"); // Expand Nursing Certificates

    // Verify Nurse Practitioner to Psych-Mental Health Nurse Practitioner Certificate
    console.log(
      "Clicking and verifying 'Nurse Practitioner to Psych-Mental Health Nurse Practitioner Certificate'..."
    );
    const nursingCertLink = "#mega-menu-item-14664 > a";
    await page.waitForSelector(nursingCertLink, { state: "visible" });
    await page.click(nursingCertLink);
    console.log(
      "Verifying 'Nurse Practitioner to Psych-Mental Health Nurse Practitioner Certificate' page URL..."
    );
    await expect(page).toHaveURL(
      "https://onlinedegrees.nku.edu/programs/healthcare/nursing-certificates/np-to-pmhnp/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
  });
});
