import { expect, test } from "@fixtures";
import { RegisterFormData } from "@typings/pages/auth";
import { RegistrationText } from "@typings/pages/auth";
import { env } from "@utils/env-utils";
import { DataGenerator } from "@utils/data-generator-utils";
import { AccountDeletedText } from "@typings/pages/account-deleted";

test.describe.only("Register without state storage", () => {
  test.beforeEach(
    "should navigate to main page",
    async ({ authPage, homePage }) => {
      await authPage.goToLink(env.AUTOMATION_BASEURL);
      await expect.soft(homePage.homeTitle).toBeVisible();
      await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
    },
  );
  test("T5: should register user @smoke @regression", async ({ authPage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.submitRegistrationForm(formData)
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
  });

  test("T6: should register user with required data only @regression", async ({ authPage }) => {
    const formData: RegisterFormData =
      DataGenerator.generateRegisterFormData(true);
    await authPage.submitRegistrationForm(formData)
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
  });

  test("T7: should register user who already exists @regression", async ({ authPage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData(
      false,
      {
        signupEmail: env.AUTOMATION_USER_CORRECT,
      },
    );
    await authPage.fillPreRegisterForm(formData);
    await expect.soft(authPage.registerEmailExistError).toBeVisible();
  });

  test("T8: should delete account after register @regression", async ({ authPage, accountDeletedPage, homePage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.submitRegistrationForm(formData)
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

  test("T9: should continue after delete @regression", async ({ authPage, accountDeletedPage, homePage }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.submitRegistrationForm(formData)
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
