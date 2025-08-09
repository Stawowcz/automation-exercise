import { test, expect } from "@fixtures";
import { PreLoginFormData } from "@typings/pages/auth";
import { env } from "@utils/env-utils";
import { DataGenerator } from "@utils/data-generator-utils";

test.describe("Login and logout", () => {
  test.beforeEach(
    "should navigate to main page",
    async ({ authPage, homePage }) => {
      await authPage.goToLink(env.AUTOMATION_BASEURL);
      await expect.soft(homePage.homeTitle).toBeVisible();
      await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
    },
  );
  test("should login successfully", async ({ authPage, homePage }) => {
    const data: PreLoginFormData = DataGenerator.generateRegisterFormData();
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await expect.soft(homePage.homeTitle).toBeVisible();
    await expect.soft(homePage.homeSubtitle).toBeVisible();
  });

  test("should logout successfully", async ({ authPage, homePage }) => {
    const data: PreLoginFormData = DataGenerator.generateRegisterFormData();
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await expect.soft(homePage.logoutButton).toBeVisible();
    await homePage.clickLogoutButton();
    await expect.soft(authPage.loginToYourAccountText).toBeVisible();
    await expect.soft(authPage.newUserSignupText).toBeVisible();
  });
});
