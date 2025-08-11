import type { Page } from "@playwright/test";

export class BaseApi {
  protected readonly page: Page;
  protected readonly baseURL: string;

  constructor(page: Page, baseURL?: string) {
    this.page = page;
    this.baseURL =
      baseURL ??
      process.env.AUTOMATION_BASEURL ??
      "https://www.automationexercise.com";
  }
}
