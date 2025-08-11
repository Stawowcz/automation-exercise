import { test, expect } from "@fixtures";
import { CommonText } from "@typings/common";
import { ProductDetailsText } from "@typings/pages/product-details/product-details.enum";
import { ReviewData } from "@typings/pages/product-details/product-details.type";
import { ProductsText } from "@typings/pages/products/product-enum";
import { DataGenerator, env } from "@utils";

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
    await expect.soft(productPage.productItem).toHaveCount(34);
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

  test("should search product", async ({ homePage, productPage }) => {
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

  test("should add review on product", async ({
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

test.describe.only("Category", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should verify category women dress's product", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickWomenToggle();
    await homePage.clickWomenDress();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_WOMEN_DRESS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CommonText.KEYWORD_DRESS);
    }
  });

  test("should verify category women top's product", async ({
    homePage,
    categoryProductsPage
  }) => {
    await homePage.clickWomenToggle();
    await homePage.clickWomenTops();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_WOMEN_TOPS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CommonText.KEYWORD_TOP);
    }
  });

  test("should verify category women saree's product", async ({
    homePage,
    categoryProductsPage
  }) => {
    await homePage.clickWomenToggle();
    await homePage.clickWomenSaree();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_WOMEN_SAREE);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CommonText.KEYWORD_SAREE);
    }
  });

  test("should verify category men tshirt's product", async ({
    homePage,
    categoryProductsPage
  }) => {
    await homePage.clickMenToggle();
    await homePage.clickMenTshirts();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_MEN_TSHIRTS);

    // case-insensitive + toleruje "T Shirt", "T-Shirt", "Tshirt"
    const tshirtPattern = new RegExp(`t[\\s-]*${CommonText.KEYWORD_SHIRT}`, "i");

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(tshirtPattern);
    }
  });

  test("should verify category men jeans's product", async ({
    homePage,
    categoryProductsPage
  }) => {
    await homePage.clickMenToggle();
    await homePage.clickMenJeans();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_MEN_JEANS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CommonText.KEYWORD_JEANS);
    }
  });

  test("should verify category kid dress's product", async ({
    homePage,
    categoryProductsPage
  }) => {
    await homePage.clickKidsToggle();
    await homePage.clickKidsDress();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_KIDS_DRESS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CommonText.KEYWORD_DRESS);
    }
  });

  test("should verify category kid top's product", async ({
    homePage,
    categoryProductsPage
  }) => {
    await homePage.clickKidsToggle();
    await homePage.clickKidsTopsShirts();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CommonText.CATEGORY_TITLE_KIDS_TOPS_SHIRTS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CommonText.KEYWORD_TOP);
    }
  });
});
