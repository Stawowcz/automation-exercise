import { test, expect } from "@fixtures";
import { TestCasesText } from "@typings/pages/test-cases";
import { env } from "@utils";

test.describe("Test cases using state storage", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should verify test cases page", async ({ homePage, testCasesPage }) => {
    await homePage.clickTestCasesLink();
    await homePage.expectUrlContains(TestCasesText.URL);
    await expect.soft(testCasesPage.testCasesTitle).toBeVisible();
    await expect.soft(testCasesPage.testCaseItem).toHaveCount(27);
  });
});
