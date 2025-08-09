import { expect, test } from "@fixtures";
import { CommonText } from "@typings/common";
import { AddToCartText } from "@typings/components/add-to-cart";
import { HomeText } from "@typings/pages/home";
import { ProductsText } from "@typings/pages/products/product-enum";
import { DataGenerator, env } from "@utils";
import { AddedToCartComponent } from "src/components/added-to-cart-component";

test.describe("Cart", () => {
  test.beforeEach("should verify subscription", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test.afterEach("clear cart", async ({ cartPage }) => {
    await cartPage.goToLink("/view_cart");
    await cartPage.clearCartViaApi();
  });
  test("should add product to cart then validate cart", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
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
      .toHaveText(CommonText.CATEGORY_WOMEN_TOPS);
    await expect
      .soft(cartPage.getProductPriceById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect
      .soft(cartPage.getProductTotalById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");
  });

  test("should add 3 different products to cart then validate cart", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
    await expect
      .soft(addedToCart.modalHeader)
      .toContainText(ProductsText.ADDED);
    await expect.soft(addedToCart.modalBodyText).toBeVisible();
    await expect.soft(addedToCart.viewCartText).toBeVisible();
    await expect
      .soft(addedToCart.continueShopingButton)
      .toHaveText(AddToCartText.CONTINUE_SHOPPING);
    await addedToCart.clickContinueShopping();
    await productPage.clickAddToCartByProduct(
      CommonText.MEN_TSHIRT_NAME,
      CommonText.PRICE_400,
    );
    await addedToCart.clickContinueShopping();
    await productPage.clickAddToCartByProduct(
      CommonText.SLEEVE_LESS_DRESS_NAME,
      CommonText.PRICE_1000,
    );
    await addedToCart.clickViewCart();
    await expect
      .soft(cartPage.getProductNameById(1))
      .toHaveText(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(1))
      .toHaveText(CommonText.CATEGORY_WOMEN_TOPS);
    await expect
      .soft(cartPage.getProductPriceById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect
      .soft(cartPage.getProductTotalById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");

    await expect
      .soft(cartPage.getProductNameById(2))
      .toHaveText(CommonText.MEN_TSHIRT_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(2))
      .toHaveText(CommonText.CATEGORY_MEN);
    await expect
      .soft(cartPage.getProductPriceById(2))
      .toHaveText(CommonText.PRICE_400);
    await expect
      .soft(cartPage.getProductTotalById(2))
      .toHaveText(CommonText.PRICE_400);
    await expect.soft(cartPage.getProductQuantityById(2)).toHaveText("1");

    await expect
      .soft(cartPage.getProductNameById(3))
      .toHaveText(CommonText.SLEEVE_LESS_DRESS_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(3))
      .toHaveText(CommonText.CATEGORY_WOMEN_DRESS);
    await expect
      .soft(cartPage.getProductPriceById(3))
      .toHaveText(CommonText.PRICE_1000);
    await expect
      .soft(cartPage.getProductTotalById(3))
      .toHaveText(CommonText.PRICE_1000);
    await expect.soft(cartPage.getProductQuantityById(3)).toHaveText("1");
  });

  test("should add 2 the same products to cart then validate cart", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
    await expect
      .soft(addedToCart.modalHeader)
      .toContainText(ProductsText.ADDED);
    await expect.soft(addedToCart.modalBodyText).toBeVisible();
    await expect.soft(addedToCart.viewCartText).toBeVisible();
    await expect
      .soft(addedToCart.continueShopingButton)
      .toHaveText(AddToCartText.CONTINUE_SHOPPING);
    await addedToCart.clickContinueShopping();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
    await addedToCart.clickViewCart();
    await expect
      .soft(cartPage.getProductNameById(1))
      .toHaveText(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(1))
      .toHaveText(CommonText.CATEGORY_WOMEN_TOPS);
    await expect
      .soft(cartPage.getProductPriceById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect
      .soft(cartPage.getProductTotalById(1))
      .toHaveText(CommonText.PRICE_1000);
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("2");
  });

  test("should verify product quantity in cart", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
    await expect
      .soft(addedToCart.continueShopingButton)
      .toHaveText(AddToCartText.CONTINUE_SHOPPING);
    await addedToCart.clickContinueShopping();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
    await addedToCart.clickContinueShopping();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );
    await addedToCart.clickViewCart();
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("3");
  });
});
