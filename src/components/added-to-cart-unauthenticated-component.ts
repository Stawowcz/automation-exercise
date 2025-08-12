import { Locator } from "@playwright/test";
import { BaseComponent } from "./base-component";
import { AddToCartText } from "@typings/components/add-to-cart-unauthenticated";

export class AddedToCartUnauthenticatedComponent extends BaseComponent {
  private readonly addedToCartModal: Locator =
    this.page.locator(".modal-content");
  public readonly registerLogin: Locator =
    this.addedToCartModal.locator(".modal-body p a");
  public readonly continueShoppingButton: Locator =
    this.addedToCartModal.locator(".close-checkout");

  public async clickRegisterLogin(): Promise<void> {
    await this.interaction.secureClick(this.registerLogin);
  }
}
