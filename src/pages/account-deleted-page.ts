import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { AccountDeletedText } from "@typings/pages/account-deleted";

export class AccountDeletedPage extends BasePage {

    public readonly accountDeletedTitle: Locator =
    this.accountDeletedContainer.locator("h2");

  public readonly accoutDeletedParagraph1: Locator =
    this.accountDeletedContainer.getByText(
      AccountDeletedText.ACCOUNT_DELETED_PARAGRAPH_1,
    );

  public readonly accoutDeletedParagraph2: Locator =
    this.accountDeletedContainer.getByText(
      AccountDeletedText.ACCOUNT_DELETED_PARAGRAPH_2,
    );

}
