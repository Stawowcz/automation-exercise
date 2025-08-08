// pages/base-page.ts
import { Locator, Page } from "@playwright/test";
import { InteractionUtils } from "@utils/interaction-utils";

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly interaction: InteractionUtils;

  // Lokatory – tylko deklaracja
  public readonly title: Locator;
  public readonly subscriptionText: Locator;
  public readonly subscriptionInput: Locator;
  public readonly subscriptionButton: Locator;
  public readonly successSubscribeText: Locator;

  public constructor(page: Page) {
    this.page = page;
    this.interaction = new InteractionUtils(page);

    // Inicjalizacja locatorów
    this.title = page.getByTestId("title");
    this.subscriptionText = page.locator(".single-widget > h2");
    this.subscriptionInput = page.locator("#susbscribe_email");
    this.subscriptionButton = page.locator("#subscribe");
    this.successSubscribeText = page.locator("#success-subscribe");
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
}
