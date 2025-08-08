import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/home";
import { LoginText } from "@typings/auth";

export class CartPage extends BasePage {
  private readonly contactLink: Locator = this.page.locator("a", {
    hasText: "Contact us",
  });

  private readonly testCasesLink: Locator = this.page.getByRole("link", {
    name: HomeText.TEST_CASES_LINK,
  });

  // public readonly subscriptionInput: Locator =
  //   this.page.locator("#susbscribe_email");

  // public readonly subscriptionButton: Locator = this.page.locator("#subscribe");

  // public readonly successSubscribeText: Locator =
  //   this.page.locator("#success-subscribe");

  // public async clickSubscriptionButton(): Promise<void> {
  //   await this.secureClick(this.subscriptionButton);
  // }

  // public async fillSubscription(value: string) {
  //   await this.secureFill(this.subscriptionInput, value);
  // }
}
