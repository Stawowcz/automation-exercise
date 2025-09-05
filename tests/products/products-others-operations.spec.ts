import { test, expect } from "@fixtures";
import { CommonText } from "@typings/common";
import { ProductDetailsText, ReviewData } from "@typings/pages/product-details";
import { ProductsText } from "@typings/pages/products";
import { DataGenerator, env } from "@utils";

test.describe("Products using state storage", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("T39: should verify products page @regression", async ({ homePage, productPage }) => {
    await homePage.clickProductsLink();
    await homePage.expectUrlContains(ProductsText.LINK);
    await expect.soft(productPage.productTitle).toBeVisible();
    await expect.soft(productPage.categoryText).toBeVisible();
    await expect.soft(productPage.brandText).toBeVisible();
    await expect.soft(productPage.productItem).toHaveCount(34);
  });

  test("T40: should verify products detail @regression", async ({
    homePage,
    productPage,
    productDetailsPage,
  }) => {
    await homePage.clickProductsLink();
    await homePage.expectUrlContains(ProductsText.LINK);
    await expect.soft(productPage.productTitle).toBeVisible();
    await productPage.clickProductDetailsById(1);
    await homePage.expectUrlContains(ProductDetailsText.LINK);
    await expect.soft(productDetailsPage.productDetailTitle).toBeVisible();
    await expect.soft(productDetailsPage.paragraph).toBeVisible();
    await expect
      .soft(productDetailsPage.description)
      .toHaveText(ProductDetailsText.RS_500);
    await expect.soft(productDetailsPage.quantityInput).toHaveValue("1");
    await expect
      .soft(productDetailsPage.addToCartButton)
      .toHaveText(ProductDetailsText.ADD_TO_CART);
    await expect(productDetailsPage.availabilityText).toContainText(
      ProductDetailsText.IN_STOCK,
    );
    await expect(productDetailsPage.conditionText).toContainText(
      ProductDetailsText.NEW,
    );
    await expect(productDetailsPage.brandText).toContainText(
      ProductDetailsText.POLO,
    );
    await expect(productDetailsPage.writeYourReviewTitle).toHaveText(
      ProductDetailsText.WRITE_YOUR_REVIEW,
    );
    await expect(productDetailsPage.reviewForm).toBeVisible();
    await expect(productDetailsPage.reviewFormNameInput).toBeVisible();

    await expect(
      productDetailsPage.getProductMetaByLabel(ProductDetailsText.BRAND),
    ).toContainText(ProductDetailsText.POLO);
    await expect(
      productDetailsPage.getProductMetaByLabel(ProductDetailsText.AVAILABILITY),
    ).toContainText(ProductDetailsText.IN_STOCK);
    await expect(
      productDetailsPage.getProductMetaByLabel(ProductDetailsText.CONDITION),
    ).toContainText(ProductDetailsText.NEW);
  });

  test("T41: should search product @smoke @regression", async ({ homePage, productPage }) => {
    await homePage.clickProductsLink();
    await homePage.expectUrlContains(ProductsText.LINK);
    await expect.soft(productPage.productTitle).toBeVisible();
    await productPage.fillSearchField(ProductDetailsText.PRODUCT_1_TITLE);
    await productPage.clickSearchButton();

    await expect.soft(productPage.searchTitle).toHaveText("Searched Products");
    await expect.soft(productPage.productItem).toHaveCount(1);
    await expect.soft(productPage.producPrice).toHaveText(CommonText.PRICE_500);
    await expect
      .soft(productPage.producName)
      .toHaveText(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(productPage.addToCartButton)
      .toHaveText(ProductsText.ADD_TO_CART);
    await expect
      .soft(productPage.viewProductLink)
      .toHaveText(ProductsText.VIEW_PRODUCTS);
  });

  test("T42: should add review on product @regression", async ({
    homePage,
    productPage,
    productDetailsPage,
  }) => {
    await homePage.clickProductsLink();
    await homePage.expectUrlContains(ProductsText.LINK);
    await expect.soft(productPage.productTitle).toBeVisible();
    await productPage.clickProductDetailsById(1);
    await expect
      .soft(productDetailsPage.productDetailTitle)
      .toHaveText(CommonText.BLUE_TOP_NAME);
    const reviewData: ReviewData = DataGenerator.generateReviewFormData();
    await productDetailsPage.fillAndSubmitReview(reviewData);
    await expect.soft(productDetailsPage.successMessage).toBeVisible();
  });
});
