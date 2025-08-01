import { test, expect } from "@fixtures";
import { ProductDetailsText } from "@typings/product-details/product-details.enum";
import { ProductsText } from "@typings/products/product-enum";
import { env } from "@utils";

test.describe("Products", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should verify products page", async ({ homePage, productPage }) => {
    await homePage.clickProductsLink();
    await homePage.expectUrlContains(ProductsText.LINK);
    await expect.soft(productPage.productTitle).toBeVisible();
    await expect.soft(productPage.categoryText).toBeVisible();
    await expect.soft(productPage.brandText).toBeVisible();
    await expect.soft(productPage.productItem).toHaveCount(35);
  });

  test("should verify products detail", async ({
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
});
