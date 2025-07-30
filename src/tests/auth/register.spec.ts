import { expect, test } from "@fixtures";
import { AuthPage } from "@pages/auth-page";
import { RegisterFormData } from "@typings/auth";
import { RegistrationText } from "@typings/auth/auth-enums";
import { DataGenerator } from "@utils/data-generator-utils";

test.describe("Register", () => {
  test("should register user", async ({ authPage, page }) => {
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.fillPreRegisterForm(formData);
    await authPage.fillRegistration(formData);
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);
  });
});
