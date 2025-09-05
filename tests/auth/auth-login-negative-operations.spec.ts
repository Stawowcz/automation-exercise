import { test, expect } from "@fixtures";
import { env } from "@utils/env-utils";

test.describe("Login negative without state storage", () => {
  test.beforeEach(
    "should navigate to main page",
    async ({ authPage, homePage }) => {
      await authPage.goToLink(env.AUTOMATION_BASEURL);
      await expect.soft(homePage.homeTitle).toBeVisible();
      await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
    },
  );
  test("T3: should not login with incorrect password @smoke @regression", async ({ authPage }) => {
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_INCORRECT,
    );
    await expect.soft(authPage.loginError).toBeVisible();
  });

  test("T4: should not loging with incorrect email @smoke @regression", async ({ authPage }) => {
    await authPage.login(
      env.AUTOMATION_USER_INCORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await expect.soft(authPage.loginError).toBeVisible();
  });
});
