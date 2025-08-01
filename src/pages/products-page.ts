import { ProductsText } from "@typings/products/product-enum";
import { BasePage } from "./base-page";
import { Locator } from "@playwright/test";

export class ProductPage extends BasePage {
  public readonly productTitle: Locator = this.page.getByRole("heading", {
    name: ProductsText.TITLE,
  });
  public readonly brandText: Locator = this.page.getByRole("heading", {
    name: ProductsText.BRAND,
  });
  public readonly categoryText: Locator = this.page.getByRole("heading", {
    name: ProductsText.CATEGOTY,
  });
  public readonly productItem: Locator = this.page.locator(".col-sm-4");

  public async clickProductDetailsById(productId: number) {
    await this.page.locator(`a[href="/product_details/${productId}"]`).click();
  }
}
