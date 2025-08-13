import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class CartPage extends BasePage {
  private readonly proceedCheckoutLink: Locator = this.page.locator(
    ".check_out",
    { hasText: "Proceed To Checkout" },
  );

  public readonly cartIsEmptyText: Locator =
    this.page.locator("#empty_cart p b");

  private readonly hereLinkToProduct: Locator =
    this.page.locator("#empty_cart p > a");

  public async clickHereLinkToProducts(): Promise<void> {
    await this.interaction.secureClick(this.hereLinkToProduct);
  }
  public async clickProceedCheckout(): Promise<void> {
    await this.interaction.secureClick(this.proceedCheckoutLink);
  }

  public async clickDeleteButtonById(productId: number): Promise<void> {
    const deleteButton = this.interaction
      .getCartItemByProductId(productId)
      .locator(".cart_delete .cart_quantity_delete");

    await this.interaction.secureClick(deleteButton);
  }

  public async goToLink(): Promise<void> {
    await this.interaction.goToLink("/view_cart");
  }
}
