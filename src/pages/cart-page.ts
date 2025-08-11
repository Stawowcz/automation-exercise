import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/pages/auth";

export class CartPage extends BasePage {
  private readonly proceedCheckoutLink: Locator = this.page.locator(
    ".check_out",
    { hasText: "Proceed To Checkout" },
  );

  public readonly cartIsEmptyText: Locator =
    this.page.locator("#empty_cart p b");

  public async clickProceedCheckout(): Promise<void> {
    await this.interaction.secureClick(this.proceedCheckoutLink);
  }

  public getDeleteButtonById(productId: number): Locator {
    return this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_delete");
  }

  public async clickDeleteButtonById(productId: number): Promise<void> {
    const deleteButton = this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_delete .cart_quantity_delete");

    await this.interaction.secureClick(deleteButton);
  }
}
