import { test, expect } from "@fixtures";
import { env } from "@utils/env-utils";

test.describe("Login and logout without state storage", () => {
  test.beforeEach(
    "should navigate to main page",
    async ({ authPage, homePage }) => {
      await authPage.goToLink(env.AUTOMATION_BASEURL);
      await expect.soft(homePage.homeTitle.nth(0)).toBeVisible();
      await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
    },
  );
  test("should login successfully @smoke @regression", async ({ authPage, homePage }) => {
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await expect.soft(homePage.categoryTitle).toBeVisible();
    await expect.soft(homePage.featureItemsTitle).toBeVisible();
  });

  test("should logout successfully @regression", async ({ authPage, homePage }) => {
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
