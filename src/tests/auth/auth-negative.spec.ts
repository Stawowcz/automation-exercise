import { test, expect } from "@fixtures";
import { env } from "@utils/index";

test.describe("Negative scenarion", () => {
  test.beforeEach("should go to the link", async ({ authPage }) => {
    await authPage.goToLink(env.AUTOMATION_BASEURL);
  });
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
