import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { PaymentFormData } from "@typings/pages/payment/payment-types";

export class PaymentPage extends BasePage {
  private readonly cartNameField: Locator = this.container.locator(
    'input[data-qa="name-on-card"]',
  );
  private readonly cartNumberField: Locator = this.container.locator(
    'input[data-qa="card-number"]',
  );
  private readonly cartCvcField: Locator = this.container.locator(
    'input[data-qa="cvc"]',
  );
  private readonly cartExpiryMonthField: Locator = this.container.locator(
    'input[data-qa="expiry-month"]',
  );
  private readonly cartExpiryYearField: Locator = this.container.locator(
    'input[data-qa="expiry-year"]',
  );

  private readonly submitButton: Locator = this.container.locator("#submit");

  private async fillCartNameField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartNameField, value);
  }

  private async fillCartNumberField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartNumberField, value);
  }

  private async fillCartCvcField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartCvcField, value);
  }

  private async fillCartExpiryMonthField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartExpiryMonthField, value);
  }

  private async fillCartExpiryYearField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartExpiryYearField, value);
  }

  private async clickSubmitButton(): Promise<void> {
    await this.interaction.secureClick(this.submitButton);
  }

  public async completePaymentForm(
    paymentData: PaymentFormData,
  ): Promise<void> {
    await this.fillCartNameField(paymentData.name_on_card);
    await this.fillCartNumberField(paymentData.card_number);
    await this.fillCartCvcField(paymentData.cvc);
    await this.fillCartExpiryMonthField(paymentData.expiry_month);
    await this.fillCartExpiryYearField(paymentData.expiry_year);
    await this.clickSubmitButton();
  }
}
