import { test, expect } from "@fixtures";
import { env } from "@utils/env-utils";

test.describe("Negative scenarion login, logout", () => {
  test.beforeEach(
    "should navigate to main page",
    async ({ authPage, homePage }) => {
      await authPage.goToLink(env.AUTOMATION_BASEURL);
      await expect.soft(homePage.homeTitle).toBeVisible();
      await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
    },
  );
  test("should not login with incorrect password", async ({ authPage }) => {
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_INCORRECT,
    );
    await expect.soft(authPage.loginError).toBeVisible();
  });

  test("should not loging with incorrect email", async ({ authPage }) => {
    await authPage.login(
      env.AUTOMATION_USER_INCORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await expect.soft(authPage.loginError).toBeVisible();
  });
});
