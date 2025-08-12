import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { ProductDetailsText } from "@typings/pages/product-details/product-details.enum";
import { ReviewData } from "@typings/pages/product-details/product-details.type";

export class ProductDetailsPage extends BasePage {
  private readonly productInfo: Locator = this.page.locator(
    ".product-information",
  );
  private readonly reviewContainer: Locator =
    this.page.locator(".category-tab");
  private readonly reviewName: Locator = this.reviewContainer.locator("#name");
  private readonly reviewEmail: Locator =
    this.reviewContainer.locator("#email");
  private readonly reviewComment: Locator =
    this.reviewContainer.locator("#review");
  private readonly submitReviewButton: Locator =
    this.reviewContainer.locator("#button-review");

  private async fillReviewName(value: string): Promise<void> {
    await this.interaction.secureFill(this.reviewName, value);
  }

  private async fillReviewEmail(value: string): Promise<void> {
    await this.interaction.secureFill(this.reviewEmail, value);
  }

  private async fillReviewComment(value: string): Promise<void> {
    await this.interaction.secureFill(this.reviewComment, value);
  }

  private async clickSubmitReviewButton(): Promise<void> {
    await this.interaction.secureClick(this.submitReviewButton);
  }

  private readonly reviewFormEmailInput = this.page.getByRole("textbox", {
    name: ProductDetailsText.EMAIL_ADDRESS,
    exact: true,
  });
  private readonly reviewFormTextArea = this.page.getByPlaceholder(
    ProductDetailsText.ADD_REVIEW,
  );

  public readonly successMessage: Locator = this.reviewContainer.locator(
    ".alert-success",
    { hasText: ProductDetailsText.SUCCESS_MESSAGE },
  );

  public readonly productDetailTitle: Locator = this.productInfo.getByRole(
    "heading",
    { name: ProductDetailsText.PRODUCT_1_TITLE as string },
  );
  public readonly paragraph: Locator = this.productInfo.locator("p", {
    hasText: ProductDetailsText.PRODUCT1_PARAGRAPH as string,
  });
  public readonly description: Locator = this.productInfo.locator("span span");
  // private readonly quantityLabel: Locator = this.productInfo.locator("label");
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

  public getProductMetaByLabel(label: string): Locator {
    return this.productInfo.locator(`p:has(b:text("${label}:"))`);
  }

  public async fillAndSubmitReview(data: ReviewData): Promise<void> {
    await this.fillReviewName(data.name);
    await this.fillReviewEmail(data.email);
    await this.fillReviewComment(data.comment);
    await this.clickSubmitReviewButton();
  }
}
