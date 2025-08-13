import { Locator } from "@playwright/test";
import { BaseComponent } from "./base-component";
import { AddToCartText } from "@typings/components/add-to-cart";

export class AddedToCartComponent extends BaseComponent {
  private readonly addedToCartModal: Locator =
    this.page.locator(".modal-content");
  public readonly modalHeader: Locator =
    this.addedToCartModal.locator(".modal-header");
  public readonly modalBodyText: Locator = this.addedToCartModal.locator(
    ".modal-body > p",
    {
      hasText: AddToCartText.PRODUCT_ADDED_TO_CART,
    },
  );
  public readonly viewCartText: Locator = this.addedToCartModal.locator(
    ".modal-body p",
    {
      hasText: AddToCartText.VIEW_CART,
    },
  );
  public readonly continueShoppingButton: Locator =
    this.addedToCartModal.locator(".close-modal");

  public async clickViewCart(): Promise<void> {
    await this.viewCartText.hover();
    await this.interaction.secureClick(this.viewCartText);
  }

  public async clickContinueShopping(): Promise<void> {
    await this.interaction.secureClick(this.continueShoppingButton);
  }
}
