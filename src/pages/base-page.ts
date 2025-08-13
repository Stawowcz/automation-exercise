import { Locator, Page } from "@playwright/test";
import { HomeText } from "@typings/pages/home";
import { InteractionUtils } from "@utils/interaction-utils";

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly interaction: InteractionUtils;

  public readonly title: Locator;
  public readonly subscriptionText: Locator;
  public readonly subscriptionInput: Locator;
  public readonly subscriptionButton: Locator;
  public readonly successSubscribeText: Locator;
  protected readonly container: Locator;
  public readonly header: Locator;
  public readonly producName: Locator;
  public readonly homeTitle: Locator

  public constructor(page: Page) {
    this.page = page;
    this.interaction = new InteractionUtils(page);

    this.title = page.locator(".title");
    this.subscriptionText = page.locator(".single-widget > h2");
    this.subscriptionInput = page.locator("#susbscribe_email");
    this.subscriptionButton = page.locator("#subscribe");
    this.successSubscribeText = page.locator("#success-subscribe");
    this.container = this.page.locator(".container");
    this.header = this.container.locator(".breadcrumbs");
    this.producName = this.page.locator(".productinfo > p");
    this.homeTitle = this.page.getByRole("heading", {
      name: HomeText.TITLE,
    });
  }

  public async goToLink(url: string = "/"): Promise<void> {
    await this.interaction.goToLink(url);
  }

  public async goBack(): Promise<void> {
    await this.interaction.goBack();
  }

  public async goAhead(): Promise<void> {
    await this.interaction.goAhead();
  }

  public async reloadPage(): Promise<void> {
    await this.interaction.reloadPage();
  }

  public async expectUrlContains(path: string): Promise<void> {
    await this.interaction.expectUrlContains(path);
  }

  public async clickSubscriptionButton(): Promise<void> {
    await this.interaction.secureClick(this.subscriptionButton);
  }

  public async fillSubscription(value: string): Promise<void> {
    await this.interaction.secureFill(this.subscriptionInput, value);
  }

  public getProductNameById(productId: number): Locator {
    return this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_description h4 a");
  }

  public getProductCategoryById(productId: number): Locator {
    return this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_description p");
  }

  public getProductPriceById(productId: number): Locator {
    return this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_price p");
  }

  public getProductQuantityById(productId: number): Locator {
    return this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_quantity button");
  }

  public getProductTotalById(productId: number): Locator {
    return this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_total p");
  }
}
