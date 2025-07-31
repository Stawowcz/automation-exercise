import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/home";
import { LoginText } from "@typings/auth";
import { ContactText } from "@typings/contact/contact-enum";

export class HomePage extends BasePage {
  public readonly title: Locator = this.page.getByRole("heading", {
    name: HomeText.TITLE,
  });
  public readonly subtitle: Locator = this.page.getByRole("heading", {
    name: HomeText.SUBTITLE,
  });
  public readonly logoutButton: Locator = this.page.getByRole("link", {
    name: LoginText.LOGOUT,
  });

  private readonly contactLink: Locator = this.page.locator("a", {
    hasText: "Contact us",
  });

  public async clickLogoutButton(): Promise<void> {
    await this.secureClick(this.logoutButton);
  }

  public async clickContactLink(): Promise<void> {
    await this.secureClick(this.contactLink);
  }
}
