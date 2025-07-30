import { test, expect } from "@fixtures";
import { AuthPage } from "@pages/auth-page";
import { PreLoginFormData } from "@typings/auth";
import { env } from "@utils";
import { DataGenerator } from "@utils/data-generator-utils";

test.describe("Login successfully", () => {
  test.beforeEach("Got to auth page", async ({ authPage, page }) => {
    await authPage.goToLink(env.AUTOMATION_BASEURL);
  });
  test.only("should login successfully", async ({ authPage, page, homePage }) => {
    const data: PreLoginFormData = DataGenerator.generateRegisterFormData();
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await expect(authPage.logoutButton).toBeVisible()
    await authPage.clickLogoutButton()
    await expect(authPage.loginToYourAccountText).toBeVisible()
    await expect(authPage.newUserSignupText).toBeVisible()


  });
});
