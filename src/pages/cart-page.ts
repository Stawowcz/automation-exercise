import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/auth";

export class CartPage extends BasePage {
  private readonly contactLink: Locator = this.page.locator("a", {
    hasText: "Contact us",
  });

  private readonly testCasesLink: Locator = this.page.getByRole("link", {
    name: HomeText.TEST_CASES_LINK,
  });
}
