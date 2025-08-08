import { expect, test } from "@fixtures";
import { CommonText } from "@typings/common";
import { AddToCartText } from "@typings/components/add-to-cart";
import { HomeText } from "@typings/pages/home";
import { ProductsText } from "@typings/pages/products/product-enum";
import { DataGenerator, env } from "@utils";
import { AddedToCartComponent } from "src/components/added-to-cart-component";

test.describe("Home", () => {
  test.beforeEach("should verify subscription", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test.afterEach("clear cart", async ({ cartPage }) => {
    await cartPage.goToLink("/view_cart");
    await cartPage.clearCartViaApi();
  });
  test("should add product to cart and view cart", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProductName(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(addedToCart.modalHeader)
      .toContainText(ProductsText.ADDED);
    await expect.soft(addedToCart.modalBodyText).toBeVisible();
    await expect.soft(addedToCart.viewCartText).toBeVisible();
    await expect
      .soft(addedToCart.continueShopingButton)
      .toHaveText(AddToCartText.CONTINUE_SHOPPING);
    await addedToCart.clickViewCart();
    await expect
      .soft(cartPage.getProductNameById(1))
      .toHaveText(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(1))
      .toHaveText(CommonText.CATEGORY_WOMEN);
    await expect
      .soft(cartPage.getProductPriceById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect
      .soft(cartPage.getProductTotalById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");
  });
});
