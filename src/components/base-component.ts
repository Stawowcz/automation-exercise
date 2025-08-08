import { Page } from "@playwright/test";

export abstract class BaseComponent {
  protected readonly page: Page;

  public constructor(page: Page) {
    this.page = page;
  }

  public url(): string {
    return this.page.url();
  }

  public async close(): Promise<void> {
    await this.page.close();
  }
}
