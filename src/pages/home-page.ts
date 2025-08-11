import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/pages/auth";

export class HomePage extends BasePage {
  private readonly recommendedItemContainer: Locator =
    this.page.locator(".recommended_items");

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
