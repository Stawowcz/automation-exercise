import { test, expect } from "@fixtures";
import { CategoriesText } from "@typings/pages/categories";
import { env } from "@utils";

test.describe("Categories using state storage", () => {
  test.beforeEach("should navigate to main page", async ({ homePage }) => {
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test("should verify category women dress's product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickWomenToggle();
    await homePage.clickWomenDress();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_WOMEN_DRESS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CategoriesText.KEYWORD_DRESS);
    }
  });

  test("should verify category women top's product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickWomenToggle();
    await homePage.clickWomenTops();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_WOMEN_TOPS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CategoriesText.KEYWORD_TOP);
    }
  });

  test("should verify category women saree's product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickWomenToggle();
    await homePage.clickWomenSaree();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_WOMEN_SAREE);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CategoriesText.KEYWORD_SAREE);
    }
  });

  test("should verify category men tshirt's product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickMenToggle();
    await homePage.clickMenTshirts();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_MEN_TSHIRTS);

    // case-insensitive + toleruje "T Shirt", "T-Shirt", "Tshirt"
    const tshirtPattern = new RegExp(
      `t[\\s-]*${CategoriesText.KEYWORD_SHIRT}`,
      "i",
    );

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(tshirtPattern);
    }
  });

  test("should verify category men jeans's product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickMenToggle();
    await homePage.clickMenJeans();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_MEN_JEANS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CategoriesText.KEYWORD_JEANS);
    }
  });

  test("should verify category kid dress's product --> bug in here no dress word in every product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickKidsToggle();
    await homePage.clickKidsDress();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_KIDS_DRESS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CategoriesText.KEYWORD_DRESS);
    }
  });

  test("should verify category kid top's product --> bug in here no yop word in every product @regression", async ({
    homePage,
    categoryProductsPage,
  }) => {
    await homePage.clickKidsToggle();
    await homePage.clickKidsTopsShirts();
    await expect
      .soft(categoryProductsPage.title)
      .toHaveText(CategoriesText.TITLE_KIDS_TOPS_SHIRTS);

    const count = await categoryProductsPage.producName.count();
    for (let i = 0; i < count; i++) {
      await expect
        .soft(categoryProductsPage.producName.nth(i))
        .toContainText(CategoriesText.KEYWORD_TOP);
    }
  });
});
