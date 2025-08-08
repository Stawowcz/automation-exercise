import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base-component";
import { AddToCartText } from "@typings/components/add-to-cart";

export class AddedToCartComponent extends BaseComponent {
  private readonly addedToCartModal: Locator;
  public readonly modalHeader: Locator;
  public readonly modalBody: Locator;
  public readonly modalBodyText: Locator;
  public readonly viewCartText: Locator;

  public constructor(page: Page) {
    super(page);

    this.addedToCartModal = this.page.locator(".modal-content");
    this.modalHeader = this.addedToCartModal.locator(".modal-header");
    this.modalBody = this.addedToCartModal.locator(".modal-body p");
    this.modalBodyText = this.addedToCartModal.locator(".modal-body > p", {
      hasText: AddToCartText.PRODUCT_ADDED_TO_CART,
    });
    this.viewCartText = this.addedToCartModal.locator(".modal-body p", {
      hasText: AddToCartText.VIEW_CART,
    });
  }
}
