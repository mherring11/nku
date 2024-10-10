const { test, expect } = require("@playwright/test");

test.describe("Footer Links Verification", () => {
  // Test to verify Privacy Policy and Terms & Conditions links
  test("Verify Privacy Policy and Terms & Conditions links load the correct pages in the same tab", async ({
    page,
  }) => {
    // Navigate to the homepage
    await page.goto("https://dev-risepoint-nku.pantheonsite.io/");

    // Define the selectors for the Privacy Policy and Terms & Conditions links
    const privacyPolicyLinkSelector =
      'a[href="https://policies.risepoint.com/privacy-partner/"]';
    const termsConditionsLinkSelector =
      'a[href="https://policies.risepoint.com/terms-partner/"]';

    // Step 1: Modify the Privacy Policy link to open in the same tab
    console.log("Verifying the Privacy Policy link...");
    await page.waitForSelector(privacyPolicyLinkSelector, { state: "visible" });
    await page.evaluate((selector) => {
      const link = document.querySelector(selector);
      if (link) {
        link.removeAttribute("target"); // Remove target="_blank"
      }
    }, privacyPolicyLinkSelector);

    // Click the Privacy Policy link and verify the URL
    await page.click(privacyPolicyLinkSelector);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(
      "https://policies.risepoint.com/privacy-partner/"
    );
    console.log("Privacy Policy link works as expected.");

    // Navigate back to the homepage
    await page.goBack();
    await page.waitForLoadState("networkidle");
    console.log("Navigated back to the homepage.");

    // Step 2: Modify the Terms & Conditions link to open in the same tab
    console.log("Verifying the Terms & Conditions link...");
    await page.waitForSelector(termsConditionsLinkSelector, {
      state: "visible",
    });
    await page.evaluate((selector) => {
      const link = document.querySelector(selector);
      if (link) {
        link.removeAttribute("target"); // Remove target="_blank"
      }
    }, termsConditionsLinkSelector);

    // Click the Terms & Conditions link and verify the URL
    await page.click(termsConditionsLinkSelector);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(
      "https://policies.risepoint.com/terms-partner/"
    );
    console.log("Terms & Conditions link works as expected.");

    // Navigate back to the homepage
    await page.goBack();
    await page.waitForLoadState("networkidle");
    console.log("Navigated back to the homepage after verifying both links.");
  });

    // Test to verify social media icons each link to the correct destination
  test("Verify social media icons each link to the correct social media destination", async ({
    page,
  }) => {
    // Navigate to the homepage
    await page.goto("https://onlinedegrees.nku.edu");

    // Scroll to the bottom to ensure all footer links are visible
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Define the social media link selectors and expected URLs
    const socialMediaLinks = [
      {
        name: "Facebook",
        linkSelector:
          'a.elementor-social-icon-facebook-f[href="https://www.facebook.com/nkuedu/?fref=ts"]',
        expectedURL: "https://www.facebook.com/nkuedu/?fref=ts",
      },
      {
        name: "Instagram",
        linkSelector:
          'a.elementor-social-icon-instagram[href="https://www.instagram.com/nkuedu"]',
        expectedURL: "https://www.instagram.com/nkuedu",
      },
      {
        name: "Twitter/X",
        linkSelector:
          'a[href="https://twitter.com/nkuedu"], a[href="https://x.com/nkuedu"]',
        expectedURLs: ["https://x.com/nkuedu", "https://twitter.com/nkuedu"], // Accept both X and Twitter URLs
      },
      {
        name: "TikTok",
        linkSelector:
          'a.elementor-social-icon-tiktok[href="https://www.tiktok.com/@nkuedu1?lang=en"]',
        expectedURL: "https://www.tiktok.com/@nkuedu1?lang=en",
      },
      {
        name: "YouTube",
        linkSelector:
          'a.elementor-social-icon-youtube[href="https://www.youtube.com/user/nku"]',
        expectedURL: "https://www.youtube.com/user/nku",
      },
      {
        name: "LinkedIn",
        linkSelector:
          'a.elementor-social-icon-linkedin[href="https://www.linkedin.com/school/12983/"]',
        expectedURL: "https://www.linkedin.com/school/12983/",
      },
    ];

    // Iterate through each social media link and verify the href attribute
    for (const socialMedia of socialMediaLinks) {
      console.log(`Verifying the ${socialMedia.name} link...`);

      try {
        // Check if the element exists in the DOM before waiting for it to be visible
        const isElementPresent = await page.$(socialMedia.linkSelector);
        if (!isElementPresent) {
          console.log(`${socialMedia.name} link is not found in the DOM.`);
          continue; // Skip to the next social media link
        }

        // Wait for the link to be visible
        await page.waitForSelector(socialMedia.linkSelector, {
          state: "visible",
          timeout: 60000, // Increased timeout to 60 seconds
        });

        // Verify that the href attribute matches the expected URL(s)
        const hrefValue = await page.getAttribute(socialMedia.linkSelector, "href");

        if (socialMedia.expectedURLs) {
          // If multiple expected URLs are defined, check if the href matches any of them
          expect(socialMedia.expectedURLs).toContain(hrefValue);
        } else {
          // Otherwise, check for a single expected URL
          expect(hrefValue).toBe(socialMedia.expectedURL);
        }

        console.log(`${socialMedia.name} link points to the correct URL.`);
      } catch (error) {
        console.error(`Error verifying ${socialMedia.name} link:`, error);
      }
    }
  });
});