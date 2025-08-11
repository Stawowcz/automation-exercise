import { expect } from "@fixtures";
import { BaseApi } from "../base-api";
import { CartEndpoints } from "./endpoints-enum";


export class CartApi extends BaseApi {
  /** GET /add_to_cart/:productId – backend zwraca tekst/HTML, nie JSON */
  public async addProduct(productId: number): Promise<void> {
    const res = await this.page.context().request.get(
      `${this.baseURL}${CartEndpoints.ADD_TO_CART}/${productId}`,
      {
        headers: {
          "x-requested-with": "XMLHttpRequest",
          "accept": "*/*",
          "referer": `${this.baseURL}/products`,
        },
      }
    );

    if (!res.ok()) {
      throw new Error(`add_to_cart failed: ${res.status()} ${res.statusText()}`);
    }
    await res.text(); // „zjedz” body; nie ma JSON-a
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

