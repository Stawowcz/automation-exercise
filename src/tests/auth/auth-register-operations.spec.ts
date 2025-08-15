import { expect, test } from "@fixtures";
import { RegisterFormData } from "@typings/pages/auth";
import { RegistrationText } from "@typings/pages/auth";
import { env } from "@utils/env-utils";
import { DataGenerator } from "@utils/data-generator-utils";
import { AccountDeletedText } from "@typings/pages/account-deleted";

test.describe("Register without state storage", () => {
  test.beforeEach(
    "should navigate to main page",
    async ({ authPage, homePage }) => {
      await authPage.goToLink(env.AUTOMATION_BASEURL);
      await expect.soft(homePage.homeTitle).toBeVisible();
      await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
    },
  );
  test("should register user", async ({ authPage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.fillPreRegisterForm(formData);
    await authPage.fillRegistration(formData);
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
  });

  test("should register user with required data only", async ({ authPage }) => {
    const formData: RegisterFormData =
      DataGenerator.generateRegisterFormData(true);
    await authPage.fillPreRegisterForm(formData);
    await authPage.fillRegistration(formData);
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
  });

  test("should register user who already exists", async ({ authPage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData(
      false,
      {
        signupEmail: env.AUTOMATION_USER_CORRECT,
      },
    );
    await authPage.fillPreRegisterForm(formData);
    await expect.soft(authPage.registerEmailExistError).toBeVisible();
  });

  test("should delete account after register", async ({ authPage, accountDeletedPage, homePage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.fillPreRegisterForm(formData);
    await authPage.fillRegistration(formData);
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
    await homePage.goToLink();

    await expect.soft(homePage.automationPracticeImage).toBeVisible();
    await homePage.clickDeleteLink();
    await expect
      .soft(accountDeletedPage.accountDeletedTitle)
      .toHaveText(AccountDeletedText.ACCOUNT_DELETED_TITLE);
    await expect.soft(accountDeletedPage.accoutDeletedParagraph1).toBeVisible();
    await expect.soft(accountDeletedPage.accoutDeletedParagraph2).toBeVisible();
  });

  test.only("should continue after delete", async ({ authPage, accountDeletedPage, homePage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.fillPreRegisterForm(formData);
    await authPage.fillRegistration(formData);
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
    await homePage.goToLink();

    await expect.soft(homePage.automationPracticeImage).toBeVisible();
    await homePage.clickDeleteLink();
    await expect
      .soft(accountDeletedPage.accountDeletedTitle)
      .toHaveText(AccountDeletedText.ACCOUNT_DELETED_TITLE);
    await expect.soft(accountDeletedPage.accoutDeletedParagraph1).toBeVisible();
    await expect.soft(accountDeletedPage.accoutDeletedParagraph2).toBeVisible();
    await accountDeletedPage.clickContinueButton()
    await homePage.expectUrlNotContains("delete_account");
  });
});
