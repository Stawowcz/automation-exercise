import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { HomeText } from "@typings/pages/home";
import { LoginText } from "@typings/pages/auth";
import { PaymentFormData } from "@typings/pages/payment/payment-types";

export class PaymentPage extends BasePage {
  // Lokatory
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

  // Metody safeFill
  public async fillCartNameField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartNameField, value);
  }

  public async fillCartNumberField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartNumberField, value);
  }

  public async fillCartCvcField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartCvcField, value);
  }

  public async fillCartExpiryMonthField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartExpiryMonthField, value);
  }

  public async fillCartExpiryYearField(value: string): Promise<void> {
    await this.interaction.secureFill(this.cartExpiryYearField, value);
  }

  public async clickSubmitButton(): Promise<void> {
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
