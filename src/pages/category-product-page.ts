// pages/category-products-page.ts
import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class CategoryProductsPage extends BasePage {
  public readonly productsList: Locator =
    this.container.locator(".features_items");
  public readonly productTitles: Locator = this.productsList.locator("h2");

  public async open(categoryId: number): Promise<void> {
    await this.goToLink(`/category_products/${categoryId}`);
  }
}
