import { test, expect } from "@fixtures";
import { BrandsText } from "@typings/pages/brands";
import { env } from "@utils";

test.describe("Brands using state storage", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should verify brand allen solly junior", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandAllenSollyJunior();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_ALLEN_SOLLY_JUNIOR);
  });

  test("should verify brand polo", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandPolo();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_POLO);
  });

  test("should verify brand H&M", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandHnM();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_HM);
  });

  test("should verify brand Madame", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandMadame();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_MADAME);
  });

  test("should verify brand Mast & Harbour", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandMastHarbour();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_MAST_AND_HARBOUR);
  });

  test("should verify brand Babyhug", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandBabyhug();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_BABYHUG);
  });

  test("should verify brand Kookie Kids", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandKookieKids();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_KOOKIE_KIDS);
  });

  test("should verify brand Biba", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandBiba();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_BIBA);
  });
});
