import type { Page } from "@playwright/test";
import { env } from "@utils";

export class BaseApi {
  protected readonly page: Page;
  protected readonly baseURL: string;

  constructor(page: Page, baseURL?: string) {
    this.page = page;
    this.baseURL =
      baseURL ??
      env.AUTOMATION_BASEURL
  }
}
