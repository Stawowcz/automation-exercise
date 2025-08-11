import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/pages/auth";

export class HomePage extends BasePage {
  private readonly recommendedItemContainer: Locator =
    this.page.locator(".recommended_items");

  private readonly leftSideBar: Locator = this.page.locator(".left-sidebar");

  private readonly womenToggle = this.leftSideBar.locator('a[href="#Women"]');
  private readonly menToggle = this.leftSideBar.locator('a[href="#Men"]');
  private readonly kidsToggle = this.leftSideBar.locator('a[href="#Kids"]');

  public async clickWomenToggle(): Promise<void> {
    await this.interaction.secureClick(this.womenToggle);
  }

  public async clickMenToggle(): Promise<void> {
    await this.interaction.secureClick(this.menToggle);
  }

  public async clickKidsToggle(): Promise<void> {
    await this.interaction.secureClick(this.kidsToggle);
  }

  private getCategoryProductLink(id: number): Locator {
    return this.leftSideBar.locator(`a[href="/category_products/${id}"]`);
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

  public readonly homeTitle: Locator = this.page.getByRole("heading", {
    name: HomeText.TITLE,
  });

  public readonly homeSubtitle: Locator = this.page.getByRole("heading", {
    name: HomeText.SUBTITLE,
  });

  public readonly logoutButton: Locator = this.page.getByRole("link", {
    name: LoginText.LOGOUT,
  });

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
}
