// components/base-component.ts
import { Page } from "@playwright/test";
import { InteractionUtils } from "@utils/interaction-utils";

export abstract class BaseComponent {
  protected readonly page: Page;
  protected readonly interaction: InteractionUtils;

  public constructor(page: Page) {
    this.page = page;
    this.interaction = new InteractionUtils(page);
  }

  public url(): string {
    return this.page.url();
  }

  public async close(): Promise<void> {
    await this.page.close();
  }
}
