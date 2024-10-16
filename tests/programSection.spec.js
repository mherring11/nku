const { test, expect } = require("@playwright/test");

test.describe("Programs Section", () => {
  test.setTimeout(60000); // Set test timeout to 60 seconds

  // Before each test, navigate to the NKU online degrees homepage
  test.beforeEach(async ({ page }) => {
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/");
  });

  test("Verify program links are visible", async ({ page }) => {
    console.log("Step 1: Clicking on 'Online Programs' to expand the menu...");
    const onlineProgramsSelector = "#mega-menu-item-6111 > a";
    await page.click(onlineProgramsSelector);

    // Verify "Undergraduate Programs" link after expanding the menu
    console.log("Verifying 'Undergraduate Programs' link is visible...");
    const undergraduateProgramsSelector = "#mega-menu-item-6118 > a";
    await expect(page.locator(undergraduateProgramsSelector)).toBeVisible();

    // Business Programs
    console.log("Verifying 'General Business' link is visible...");
    const generalBusinessLink = "#mega-menu-item-6120 > a";
    await expect(page.locator(generalBusinessLink)).toBeVisible();

    // Verify Sales link
    console.log("Verifying 'Sales' link is visible...");
    const salesLink = "#mega-menu-item-20209 > a";
    await expect(page.locator(salesLink)).toBeVisible();

    // Verify Global Supply Chain Management link
    console.log("Verifying 'Global Supply Chain Management' link is visible...");
    const globalSupplyChainLink = "#mega-menu-item-6121 > a";
    await expect(page.locator(globalSupplyChainLink)).toBeVisible();

    // Verify HR Management link
    console.log("Verifying 'HR Management' link is visible...");
    const hrManagementLink = "#mega-menu-item-6122 > a";
    await expect(page.locator(hrManagementLink)).toBeVisible();

    // Verify Management link
    console.log("Verifying 'Management' link is visible...");
    const managementLink = "#mega-menu-item-6123 > a";
    await expect(page.locator(managementLink)).toBeVisible();

    // Verify Marketing link
    console.log("Verifying 'Marketing' link is visible...");
    const marketingLink = "#mega-menu-item-6124 > a";
    await expect(page.locator(marketingLink)).toBeVisible();

    // Verify Apply Now button for Marketing
    console.log("Verifying 'Apply Now' button on 'Marketing' page is visible...");
    const applyNowButton = 'a[aria-label="Apply Now to our online programs"]';
    await expect(page.locator(applyNowButton)).toBeVisible();

    // Criminal Justice Program
    console.log("Clicking on 'Criminal Justice' to expand...");
    const criminalJusticeLink = "#mega-menu-item-6125 > a";
    await page.click(criminalJusticeLink);

    console.log("Verifying 'Criminal Justice Program' link is visible...");
    const criminalJusticeProgramLink = "#mega-menu-item-6126 > a";
    await expect(page.locator(criminalJusticeProgramLink)).toBeVisible();

    // Health Care Program
    console.log("Clicking on 'Health Care' to expand...");
    const healthcareLink = "#mega-menu-item-6127 > a";
    await page.click(healthcareLink);

    console.log("Verifying 'Respiratory Care' link is visible...");
    const respiratoryCareLink = "#mega-menu-item-6128 > a";
    await expect(page.locator(respiratoryCareLink)).toBeVisible();

    // Liberal Arts Programs
    console.log("Clicking on 'Liberal Arts' to expand...");
    const liberalArtsLink = "#mega-menu-item-6132 > a";
    await page.click(liberalArtsLink);

    console.log("Verifying 'Communication Studies' link is visible...");
    const communicationStudiesLink = "#mega-menu-item-6133 > a";
    await expect(page.locator(communicationStudiesLink)).toBeVisible();

    // Nursing Programs
    console.log("Clicking on 'Nursing' to expand...");
    const nursingLink = "#mega-menu-item-6138 > a";
    await page.click(nursingLink);

    console.log("Verifying 'RN to BSN' link is visible...");
    const rnToBsnLink = "#mega-menu-item-6139 > a";
    await expect(page.locator(rnToBsnLink)).toBeVisible();

    // Technology Programs
    console.log("Clicking on 'Technology' to expand...");
    const technologyLink = "#mega-menu-item-6141 > a";
    await page.click(technologyLink);

    console.log("Verifying 'IT General' link is visible...");
    const itGeneralLink = "#mega-menu-item-6781 > a";
    await expect(page.locator(itGeneralLink)).toBeVisible();

    console.log("Verifying 'Cloud System Administration' link is visible...");
    const cloudSystemAdminLink = "#mega-menu-item-6780 > a";
    await expect(page.locator(cloudSystemAdminLink)).toBeVisible();

    // Graduate Programs
    console.log("Clicking on 'Graduate Programs' to expand...");
    const graduateProgramsLink = "#mega-menu-item-6143 > a";
    await page.click(graduateProgramsLink);

    console.log("Verifying presence of 'Data Analytics' link...");
    const dataAnalyticsLink = "#mega-menu-item-6148 > a";
    await expect(page.locator(dataAnalyticsLink)).toBeVisible();

    console.log("Verifying presence of 'Professional Track' link...");
    const professionalTrackLink = "#mega-menu-item-6149 > a";
    await expect(page.locator(professionalTrackLink)).toBeVisible();

    console.log("Verifying presence of 'Business Analytics' link...");
    const businessAnalyticsLink = "#mega-menu-item-6145 > a";
    await expect(page.locator(businessAnalyticsLink)).toBeVisible();

    console.log("Verifying presence of 'Security Management' link...");
    const securityManagementLink = "#mega-menu-item-6147 > a";
    await expect(page.locator(securityManagementLink)).toBeVisible();

    console.log("Verifying presence of 'Healthcare Informatics' link...");
    const healthcareInformaticsLink = "#mega-menu-item-6146 > a";
    await expect(page.locator(healthcareInformaticsLink)).toBeVisible();

    console.log("Verifying presence of 'MBA' link...");
    const mbaLink = "#mega-menu-item-6150 > a";
    await expect(page.locator(mbaLink)).toBeVisible();

   // Education Programs
   console.log("Clicking on 'Education Programs' to expand...");
   const educationProgramsLink = "#mega-menu-item-6152 > a";
   await page.click(educationProgramsLink);  // Expand Education Programs

   // Now we verify 'Autism Education' after expanding the parent menu
   console.log("Verifying presence of 'Autism Education' link...");
   const autismEducationLink = "#mega-menu-item-6153 > a";
   await expect(page.locator(autismEducationLink)).toBeVisible();

   console.log("Verifying presence of 'Curriculum Instruction' link...");
   const curriculumInstructionLink = "#mega-menu-item-6154 > a";
   await expect(page.locator(curriculumInstructionLink)).toBeVisible();

    // Healthcare Programs
    console.log("Clicking on 'Healthcare Programs'...");
    await page.click("#mega-menu-item-6161 > a"); // Expand Healthcare Programs

    console.log("Clicking on 'Health Administration'...");
    const healthAdminLink = "#mega-menu-item-6162 > a";
    await page.click(healthAdminLink);
    console.log("Verifying 'Health Administration' page...");
    await expect(page).toHaveURL(
      "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/master-of-science-health-administration/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/business/informatics/mshi/"
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
     "https://dev-risepoint-nku.pantheonsite.io/programs/business/informatics/mbi-business-analytics/"
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
     "https://dev-risepoint-nku.pantheonsite.io/programs/business/informatics/mbi-healthcare/"
   );
   await page.goBack();
   await page.click(onlineProgramsSelector);
   await page.click("#mega-menu-item-6143 > a"); // Re-click Graduate Programs to expand again

// Legal Programs
console.log("Clicking on 'Legal Programs'...");
await page.click("#mega-menu-item-6171 > a"); // Expand Legal Programs

console.log("Clicking on 'Legal program verified'...");
const legalStudiesLink = "#mega-menu-item-6173 > a";
await page.click(legalStudiesLink);
console.log("Verifying 'Legal Studies' page...");
await expect(page).toHaveURL(
  "https://dev-risepoint-nku.pantheonsite.io/programs/business/master-legal-studies-digital-law-and-technology/"
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
    "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/msn/agacnp/"
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
    "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/msn/fnp/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/technology/ms-cybersecurity/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/education/edd-educational-leadership/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/post-masters-dnp/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/business/informatics/graduate-analytics-certificate/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/technology/cybersecurity-fundamentals-in-cloud-certificate/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
    console.log("Re-clicking 'Certificate Programs'...");
    await page.click(certificateProgramsSelector); // Re-click Certificate Programs

    // Step 4: Expand and verify Healthcare Certificate Programs
    console.log("Expanding 'Healthcare Certificate Programs'...");
    const healthcareCertSelector = "#mega-menu-item-6215 > a";
    await page.waitForSelector(healthcareCertSelector, {
      state: "attached",
      timeout: 20000,
    });
    console.log("Scrolling to 'Healthcare Certificate Programs' link...");
    await page.locator(healthcareCertSelector).scrollIntoViewIfNeeded();
    console.log(
      "Waiting for 'Healthcare Certificate Programs' link to be visible..."
    );
    await page.waitForSelector(healthcareCertSelector, {
      state: "visible",
      timeout: 20000,
    });
    console.log(
      "Attempting to click 'Healthcare Certificate Programs' link..."
    );
    await page.click(healthcareCertSelector);

    // Verify Health Care Commercialization Certificate
    console.log(
      "Clicking and verifying 'Health Care Commercialization Certificate'..."
    );
    const healthcareCertLink = "#mega-menu-item-6203 > a";
    await page.waitForSelector(healthcareCertLink, { state: "visible" });
    await page.locator(healthcareCertLink).scrollIntoViewIfNeeded();
    await page.click(healthcareCertLink);
    console.log(
      "Verifying 'Health Care Commercialization Certificate' page URL..."
    );
    await expect(page).toHaveURL(
      "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/commercialization-certificate/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click("#mega-menu-item-6111 > a"); // Re-click Online Programs
    console.log("Re-clicking 'Certificate Programs'...");
    await page.click("#mega-menu-item-6198 > a"); // Re-click Certificate Programs

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
      "https://dev-risepoint-nku.pantheonsite.io/programs/business/informatics/graduate-analytics-certificate/"
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
      "https://dev-risepoint-nku.pantheonsite.io/programs/healthcare/nursing-certificates/np-to-pmhnp/"
    );
    await page.goBack();

    console.log("Re-clicking 'Online Programs' to re-expand it...");
    await page.click(onlineProgramsSelector);
  });
});
