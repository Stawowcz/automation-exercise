// components/added-to-cart-component.ts
import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base-component";
import { AddToCartText } from "@typings/components/add-to-cart-unauthenticated";

export class AddedToCartUnauthenticatedComponent extends BaseComponent {
  private readonly addedToCartModal: Locator;
  public readonly modalHeader: Locator;
  public readonly modalBody: Locator;
  public readonly modalBodyText: Locator;
  public readonly registerLogin: Locator;
  public readonly continueShopingButton: Locator;

  public constructor(page: Page) {
    super(page);

    this.addedToCartModal = this.page.locator(".modal-content");
    this.modalHeader = this.addedToCartModal.locator(".modal-header");
    this.modalBody = this.addedToCartModal.locator(".modal-body p");
    this.modalBodyText = this.addedToCartModal.locator(".modal-body > p", {
      hasText: AddToCartText.REGISTER_TO_CONTINUE,
    });
    this.registerLogin = this.addedToCartModal.locator(".modal-body p a");
    this.continueShopingButton =
      this.addedToCartModal.locator(".close-checkout");
  }

  public async clickRegisterLogin(): Promise<void> {
    await this.interaction.secureClick(this.registerLogin);
  }

  public async clickContinueShopping(): Promise<void> {
    await this.interaction.secureClick(this.continueShopingButton);
  }
}
