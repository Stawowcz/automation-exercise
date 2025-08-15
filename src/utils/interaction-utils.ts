// utils/interaction-utils.ts
import { Page, Locator, expect } from "@playwright/test";
import { GotoOptions, LocatorWaitOptions } from "@typings/pages/base";

export class InteractionUtils {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goToLink(
    url: string = "/",
    options: GotoOptions = { waitUntil: "domcontentloaded" },
  ): Promise<void> {
    await this.page.goto(url, options);
  }

  public async secureClick(
    locator: Locator,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  public async secureFill(
    locator: Locator,
    value: string,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.fill(value);
  }

  public async secureSelect(
    locator: Locator,
    value: string,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.selectOption(value);
  }

  public async secureClear(
    locator: Locator,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.clear();
  }

  public async goBack(): Promise<void> {
    await this.page.goBack();
  }

  public async goAhead(): Promise<void> {
    await this.page.goForward();
  }

  public async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  public async expectUrlContains(path: string): Promise<void> {
    await expect.soft(this.page).toHaveURL(new RegExp(`.*${path}`));
  }

  public async expectUrlNotContains(path: string): Promise<void> {
  await expect.soft(this.page).not.toHaveURL(new RegExp(`.*${path}`));
  }

  public getCartItemByProductId(productId: number): Locator {
    return this.page.locator(`#product-${productId}`);
  }
}
