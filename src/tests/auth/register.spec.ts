import { expect, test } from "@fixtures";
import { AuthPage } from "@pages/auth-page";
import { RegisterFormData } from "@typings/auth";
import { RegistrationText } from "@typings/auth/auth-enums";
import { env } from "@utils";
import { DataGenerator } from "@utils/data-generator-utils";

test.describe("Register", () => {
  test.beforeEach("Go to auth page", async ({ authPage }) => {
    await authPage.goToLink(env.AUTOMATION_BASEURL);
  });
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
});
