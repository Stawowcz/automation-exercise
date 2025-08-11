import { expect, test } from "@fixtures";
import { CommonText } from "@typings/common";
import { DataGenerator, env } from "@utils";

test.describe("Home", () => {
  test.beforeEach("should verify subscription", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should verify subscription in cart page", async ({
    homePage,
    cartPage,
  }) => {
    await homePage.clickCartLink();
    await cartPage.subscriptionText.scrollIntoViewIfNeeded();
    await expect.soft(cartPage.subscriptionText).toHaveText("Subscription");
    const email = DataGenerator.generateEmail();
    await cartPage.fillSubscription(email);
    await cartPage.clickSubscriptionButton();
    await expect
      .soft(cartPage.successSubscribeText)
      .toHaveText(CommonText.SUCCESS_SUBSCRIBE);
  });
});
