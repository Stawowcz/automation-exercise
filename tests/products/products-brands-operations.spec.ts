import { test, expect } from "@fixtures";
import { BrandsText } from "@typings/pages/brands";
import { env } from "@utils";

test.describe("Brands using state storage", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("T24 should verify brand allen solly junior @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandAllenSollyJunior();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_ALLEN_SOLLY_JUNIOR);
  });

  test("T25: should verify brand polo @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandPolo();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_POLO);
  });

  test("T26: should verify brand H&M @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandHnM();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_HM);
  });

  test("T27: should verify brand Madame @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandMadame();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_MADAME);
  });

  test("T28: should verify brand Mast & Harbour @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandMastHarbour();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_MAST_AND_HARBOUR);
  });

  test("T29: should verify brand Babyhug @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandBabyhug();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_BABYHUG);
  });

  test("T30: should verify brand Kookie Kids @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandKookieKids();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_KOOKIE_KIDS);
  });

  test("T31: should verify brand Biba @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickBrandBiba();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(BrandsText.TITLE_BRAND_BIBA);
  });
});
