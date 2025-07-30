import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/home";

export class HomePage extends BasePage {
  public readonly title: Locator = this.page.getByRole("heading", {
    name: HomeText.TITLE,
  });
  public readonly subtitle: Locator = this.page.getByRole("heading", {
    name: HomeText.SUBTITLE,
  });
}
