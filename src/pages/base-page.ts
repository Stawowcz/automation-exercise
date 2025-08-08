import { Locator, Page, expect } from "@playwright/test";
import { GotoOptions, LocatorWaitOptions } from "@typings/base";

export abstract class BasePage {
  protected readonly page: Page;

  // Lokatory – tylko deklaracja
  public readonly title: Locator;
  public readonly subscriptionText: Locator;
  public readonly subscriptionInput: Locator;
  public readonly subscriptionButton: Locator;
  public readonly successSubscribeText: Locator;

  public constructor(page: Page) {
    this.page = page;

    // Inicjalizacja locatorów
    this.title = page.getByTestId("title");

    this.subscriptionText = page.locator(".single-widget > h2");
    this.subscriptionInput = page.locator("#susbscribe_email");
    this.subscriptionButton = page.locator("#subscribe");
    this.successSubscribeText = page.locator("#success-subscribe");
  }

  public async goToLink(
    url: string = "/",
    options: GotoOptions = { waitUntil: "load" },
  ): Promise<void> {
    await this.page.goto(url, options);
  }

  protected async secureClick(
    locator: Locator,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  protected async secureFill(
    locator: Locator,
    value: string,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.fill(value);
  }

  protected async secureSelect(
    locator: Locator,
    value: string,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.selectOption(value);
  }

  protected async secureClear(
    locator: Locator,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.clear();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goAhead() {
    await this.page.goForward();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async expectUrlContains(path: string) {
    await expect.soft(this.page).toHaveURL(new RegExp(`.*${path}`));
  }

  public async clickSubscriptionButton(): Promise<void> {
    await this.secureClick(this.subscriptionButton);
  }

  public async fillSubscription(value: string) {
    await this.secureFill(this.subscriptionInput, value);
  }
}
