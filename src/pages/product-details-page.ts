import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { ProductDetailsText } from "@typings/product-details/product-details.enum";

export class ProductDetailsPage extends BasePage {
  private readonly productInfo: Locator = this.page.locator(
    ".product-information",
  );
  public readonly productDetailTitle: Locator = this.productInfo.getByRole(
    "heading",
    { name: ProductDetailsText.PRODUCT_1_TITLE as string },
  );
  public readonly paragraph: Locator = this.productInfo.locator("p", {
    hasText: ProductDetailsText.PRODUCT1_PARAGRAPH as string,
  });
  public readonly description: Locator = this.productInfo.locator("span span");
  public readonly quantityLabel: Locator = this.productInfo.locator("label");
  public readonly quantityInput: Locator =
    this.productInfo.locator("#quantity");
  public readonly addToCartButton: Locator = this.productInfo.locator("button");
  public readonly availabilityText = this.productInfo.locator(
    'p:has(b:text("Availability:"))',
  );
  public readonly conditionText = this.productInfo.locator(
    'p:has(b:text("Condition:"))',
  );
  public readonly brandText = this.productInfo.locator(
    'p:has(b:text("Brand:"))',
  );
  public readonly writeYourReviewTitle = this.page.locator(
    ".col-sm-12 >ul >li >a",
  );
  public readonly reviewForm = this.page.locator(".col-sm-12 > form");
  public readonly reviewFormNameInput = this.page.getByPlaceholder(
    ProductDetailsText.YOUR_NAME,
  );
  public readonly reviewFormEmailInput = this.page.getByRole("textbox", {
    name: ProductDetailsText.EMAIL_ADDRESS,
    exact: true,
  });
  public readonly reviewFormTextArea = this.page.getByPlaceholder(
    ProductDetailsText.ADD_REVIEW,
  );

  public getProductMetaByLabel(label: string): Locator {
    return this.productInfo.locator(`p:has(b:text("${label}:"))`);
  }
}
