import { ProductsText } from "@typings/pages/products/product-enum";
import { BasePage } from "./base-page";
import { Locator } from "@playwright/test";

export class ProductPage extends BasePage {
  public readonly productTitle: Locator = this.page.getByRole("heading", {
    name: ProductsText.TITLE as string,
  });

  public readonly brandText: Locator = this.page.getByRole("heading", {
    name: ProductsText.BRAND as string,
  });

  public readonly categoryText: Locator = this.page.getByRole("heading", {
    name: ProductsText.CATEGOTY as string,
  });

  public readonly productItem: Locator = this.page.locator(".single-products");

  public readonly searchField: Locator = this.page.locator(
    'input[id="search_product"]',
  );

  public readonly searchButton: Locator = this.page.locator(
    'button[id="submit_search"]',
  );

  public readonly searchTitle: Locator = this.page.locator(".title");

  public readonly producPrice: Locator = this.page.locator(".productinfo > h2");

  public readonly producName: Locator = this.page.locator(".productinfo > p");

  public readonly addToCartButton: Locator =
    this.page.locator(".productinfo > a");

  public readonly viewProductLink: Locator = this.page.locator(
    'a[href="/product_details/1"]',
  );

  public async clickProductDetailsById(productId: number): Promise<void> {
    await this.interaction.secureClick(
      this.page.locator(`a[href="/product_details/${productId}"]`),
    );
  }

  public async fillSearchField(value: string): Promise<void> {
    await this.interaction.secureFill(this.searchField, value);
  }

  public async clickSearchButton(): Promise<void> {
    await this.interaction.secureClick(this.searchButton);
  }

  // public getAddToCartButtonByProductName(name: string): Locator {
  //   return this.page
  //     .locator(".productinfo")
  //     .filter({ hasText: name })
  //     .locator("text=Add to cart");
  // }

  // public async clickAddToCartByProductName(name: string): Promise<void> {
  //   await this.interaction.secureClick(
  //     this.getAddToCartButtonByProductName(name),
  //   );
  // }

  public getAddToCartButtonByProduct(name: string, price: string): Locator {
    return this.page
      .locator(".productinfo")
      .filter({ hasText: name })
      .filter({ hasText: price })
      .locator("text=Add to cart");
  }

  public async clickAddToCartByProduct(
    name: string,
    price: string,
  ): Promise<void> {
    await this.interaction.secureClick(
      this.getAddToCartButtonByProduct(name, price),
    );
  }
}
