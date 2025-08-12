import { Locator, Download } from "@playwright/test";
import { BasePage } from "./base-page";
import { PaymentDoneText } from "@typings/pages/payment-done/payment-done.enums";

export class PaymentDonePage extends BasePage {
  public readonly successMessage: Locator = this.container.locator("p", {
    hasText: PaymentDoneText.PAYMENT_SUCCESS,
  });
  public readonly downloadInvoiceLink: Locator = this.container.locator(
    'a[href^="/download_invoice/"]',
  );
  public readonly continueButton: Locator = this.container.locator(
    '[data-qa="continue-button"]',
  );

  public async clickContinue(): Promise<void> {
    await this.interaction.secureClick(this.continueButton);
  }

  public async downloadInvoice(): Promise<Download> {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.interaction.secureClick(this.downloadInvoiceLink),
    ]);
    return download;
  }
}
