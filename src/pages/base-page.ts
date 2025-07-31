import { Locator, Page, expect } from "@playwright/test";
import { GotoOptions, LocatorWaitOptions } from "@typings/base";

export abstract class BasePage {
  protected readonly page: Page;
  public readonly title: Locator;

  public constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByTestId("title");
  }

  public async goToLink(
    url: string = "/",
    options: GotoOptions = { waitUntil: "load" },
  ): Promise<void> {
    console.log("🌐 [goToLink] Going to:", url);
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
}
