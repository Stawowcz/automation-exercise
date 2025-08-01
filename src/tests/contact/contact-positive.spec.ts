import { expect, test } from "@fixtures";
import { ContactText } from "@typings/contact";
import { DataGenerator, env } from "@utils";
import { expectAndAcceptPopup } from "@utils/dialog-utils";

test.describe("Contact us", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should sent contact us message", async ({
    homePage,
    contactPage,
    page,
  }) => {
    const contactData = DataGenerator.generateContactFormData();
    await homePage.clickContactLink();
    await expect
      .soft(contactPage.getInTouchText)
      .toHaveText(ContactText.GET_IN_TOUCH);
    await expectAndAcceptPopup(page, ContactText.DIALOG_MSG);
    await contactPage.submitContactForm(contactData, "background.png");
    await expect
      .soft(contactPage.submitSuccessText)
      .toHaveText(ContactText.SUBMIT_SUCCESS);
    await expect.soft(contactPage.noteText).toContainText(ContactText.NOTE);
    await expect.soft(contactPage.belowContactIsText).toBeVisible();
  });
});
