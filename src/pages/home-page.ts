import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/pages/auth";
import { BrandsText } from "@typings/pages/brands";
import { CommonText } from "@typings/common";

export class HomePage extends BasePage {
  private readonly leftSideBar: Locator = this.page.locator(".left-sidebar");
  private readonly womenToggle = this.leftSideBar.locator('a[href="#Women"]');
  private readonly menToggle = this.leftSideBar.locator('a[href="#Men"]');
  private readonly kidsToggle = this.leftSideBar.locator('a[href="#Kids"]');
  private readonly brandsSection: Locator = this.page.locator(".brands-name");
  private getCategoryProductLink(id: number): Locator {
    return this.leftSideBar.locator(`a[href="/category_products/${id}"]`);
  }
  private readonly contactLink: Locator = this.page.locator("a", {
    hasText: "Contact us",
  });

  private readonly testCasesLink: Locator = this.page.getByRole("link", {
    name: HomeText.TEST_CASES_LINK,
  });

  private readonly productsLink: Locator = this.page.getByRole("link", {
    name: HomeText.PRODUCT_LINK,
  });

  private readonly cartLink: Locator = this.page.getByRole("link", {
    name: HomeText.CART_LINK,
  });

  private getBrandLink(brandName: string): Locator {
    return this.brandsSection.locator(`a[href="/brand_products/${brandName}"]`);
  }

  private readonly deleteLink: Locator = this.page.locator(
    'a[href="/delete_account"]',
  );

  public readonly categoryTitle: Locator = this.page.locator("h2", {
    hasText: "Category",
  });

  public readonly featureItemsTitle: Locator = this.page.locator("h2", {
    hasText: "Features Items",
  });

  public readonly homeSubtitle: Locator = this.page.getByRole("heading", {
    name: HomeText.SUBTITLE,
  });

  public readonly automationPracticeImage: Locator = this.page.getByAltText(
    CommonText.LOGO_ALT_TEXT,
  );

  public readonly logoutButton: Locator = this.page.getByRole("link", {
    name: LoginText.LOGOUT,
  });

  public async clickDeleteLink(): Promise<void> {
    await this.interaction.secureClick(this.deleteLink);
  }

  public async clickBrandPolo(): Promise<void> {
    await this.interaction.secureClick(this.getBrandLink(BrandsText.POLO));
  }

  public async clickBrandHnM(): Promise<void> {
    await this.interaction.secureClick(this.getBrandLink(BrandsText.HM));
  }

  public async clickBrandMadame(): Promise<void> {
    await this.interaction.secureClick(this.getBrandLink(BrandsText.MADAME));
  }

  public async clickBrandMastHarbour(): Promise<void> {
    await this.interaction.secureClick(
      this.getBrandLink(BrandsText.MAST_AND_HARBOUR),
    );
  }

  public async clickBrandBabyhug(): Promise<void> {
    await this.interaction.secureClick(this.getBrandLink(BrandsText.BABYHUG));
  }

  public async clickBrandAllenSollyJunior(): Promise<void> {
    await this.interaction.secureClick(
      this.getBrandLink(BrandsText.ALLEN_SOLLY_JUNIOR),
    );
  }

  public async clickBrandKookieKids(): Promise<void> {
    await this.interaction.secureClick(
      this.getBrandLink(BrandsText.KOOKIE_KIDS),
    );
  }

  public async clickBrandBiba(): Promise<void> {
    await this.interaction.secureClick(this.getBrandLink(BrandsText.BIBA));
  }

  public async clickWomenToggle(): Promise<void> {
    await this.interaction.secureClick(this.womenToggle);
  }

  public async clickMenToggle(): Promise<void> {
    await this.interaction.secureClick(this.menToggle);
  }

  public async clickKidsToggle(): Promise<void> {
    await this.interaction.secureClick(this.kidsToggle);
  }

  public async clickWomenDress(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(1));
  }

  public async clickWomenTops(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(2));
  }

  public async clickWomenSaree(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(7));
  }

  public async clickMenTshirts(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(3));
  }

  public async clickMenJeans(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(6));
  }

  public async clickKidsDress(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(4));
  }

  public async clickKidsTopsShirts(): Promise<void> {
    await this.interaction.secureClick(this.getCategoryProductLink(5));
  }

  public async clickCartLink(): Promise<void> {
    await this.interaction.secureClick(this.cartLink);
  }

  public async clickProductsLink(): Promise<void> {
    await this.interaction.secureClick(this.productsLink);
  }

  public async clickTestCasesLink(): Promise<void> {
    await this.interaction.secureClick(this.testCasesLink);
  }

  public async clickLogoutButton(): Promise<void> {
    await this.interaction.secureClick(this.logoutButton);
  }

  public async clickContactLink(): Promise<void> {
    await this.interaction.secureClick(this.contactLink);
  }

  public async goToLink(url: string = "/"): Promise<void> {
    await this.interaction.goToLink(url);
  }
}
