import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/auth";

export class CartPage extends BasePage {
  private readonly proceedCheckoutLink: Locator = this.page.locator(".check_out", {hasText: "Proceed To Checkout"});
  
   public async clickProceedCheckout(): Promise<void> {
    await this.interaction.secureClick(this.proceedCheckoutLink);
  }


  private getCartItemByProductId(productId: number): Locator {
    return this.page.locator(`#product-${productId}`);
  }

  public getProductNameById(productId: number): Locator {
    return this.getCartItemByProductId(productId).locator(
      ".cart_description h4 a",
    );
  }

  public getProductCategoryById(productId: number): Locator {
    return this.getCartItemByProductId(productId).locator(
      ".cart_description p",
    );
  }

  public getProductPriceById(productId: number): Locator {
    return this.getCartItemByProductId(productId).locator(".cart_price p"); // Rs. 500
  }

  public getProductQuantityById(productId: number): Locator {
    return this.getCartItemByProductId(productId).locator(
      ".cart_quantity button",
    );
  }

  public getProductTotalById(productId: number): Locator {
    return this.getCartItemByProductId(productId).locator(".cart_total p"); // Rs. 1000
  }

  public getDeleteButtonById(productId: number): Locator {
    return this.getCartItemByProductId(productId).locator(".cart_delete");
  }

  public async clickDeleteButtonById(productId: number): Promise<void> {
    const deleteButton = this.getCartItemByProductId(productId).locator(
      ".cart_delete .cart_quantity_delete",
    );

    await this.interaction.secureClick(deleteButton);
  }

  public async deleteCartItemViaApi(productId: number): Promise<void> {
    const response = await this.page.request.get(`/delete_cart/${productId}`, {
      headers: {
        "x-requested-with": "XMLHttpRequest",
      },
    });

    if (response.status() !== 200) {
      throw new Error(`❌ Failed to delete product ${productId} via API`);
    }
  }

  public async clearCartViaApi(): Promise<void> {
    const deleteButtons = await this.page
      .locator(".cart_quantity_delete")
      .all();

    for (const btn of deleteButtons) {
      const productId = await btn.getAttribute("data-product-id");
      if (productId) {
        await this.deleteCartItemViaApi(Number(productId));
      }
    }

    await this.page.reload();
    await expect(this.page.locator("#empty_cart")).toBeVisible();
  }
}
