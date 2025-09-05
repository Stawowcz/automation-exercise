import { expect, test } from "@fixtures";
import { CommonText } from "@typings/common";
import { DataGenerator, env } from "@utils";

test.describe("Subscriptions using state storage", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("T43: should verify subscription in home page @regression", async ({ homePage }) => {
    await homePage.subscriptionText.scrollIntoViewIfNeeded();
    await expect.soft(homePage.subscriptionText).toHaveText("Subscription");
    const email = DataGenerator.generateEmail();
    await homePage.submitSubscription(email);
    await expect
      .soft(homePage.successSubscribeText)
      .toHaveText(CommonText.SUCCESS_SUBSCRIBE);
  });

  test("T44: should verify subscription in cart page @regression", async ({
    homePage,
    cartPage,
  }) => {
    await homePage.clickCartLink();
    await cartPage.subscriptionText.scrollIntoViewIfNeeded();
    await expect.soft(cartPage.subscriptionText).toHaveText("Subscription");
    const email = DataGenerator.generateEmail();
    await cartPage.submitSubscription(email);
    await expect
      .soft(cartPage.successSubscribeText)
      .toHaveText(CommonText.SUCCESS_SUBSCRIBE);
  });
});
