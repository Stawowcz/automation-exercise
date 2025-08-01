import { BasePage } from "./base-page";
import { Locator } from "@playwright/test";
import { ContactFormData } from "@typings/contact";
import { TestPaths } from "@utils/test-config";
import fs from "fs";
import path from "path";
import { ContactText } from "@typings/contact";

export class ContactPage extends BasePage {
  private readonly nameField: Locator = this.page.getByTestId("name");
  private readonly emailField: Locator = this.page.getByTestId("email");
  private readonly subjectField: Locator = this.page.getByTestId("subject");
  private readonly messageField: Locator = this.page.getByTestId("message");
  private readonly fileInput: Locator = this.page.locator('input[type="file"]');
  private readonly submitButton: Locator =
    this.page.getByTestId("submit-button");
  public readonly submitSuccessText: Locator = this.page.locator(
    ".status.alert.alert-success",
  );
  public readonly getInTouchText: Locator = this.page.locator(
    ".contact-form .title.text-center",
  );
  public readonly noteText: Locator = this.page.locator(".contact-form div b");
  public readonly belowContactIsText = this.page.locator(".contact-form div", {
    hasText: ContactText.BELOW_CONTACT_IS,
  });

  public async fillName(value: string) {
    await this.secureFill(this.nameField, value);
  }

  public async fillEmail(value: string) {
    await this.secureFill(this.emailField, value);
  }

  public async fillMessage(value: string) {
    await this.secureFill(this.messageField, value);
  }

  public async fillSubject(value: string) {
    await this.secureFill(this.subjectField, value);
  }

  public async setFile(fileName: string) {
    const filePath = path.resolve(TestPaths.assets, fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Plik do uploadu nie istnieje: ${filePath}`);
    }

    await this.fileInput.setInputFiles(filePath);
  }

  public async clickSubmitButton() {
    await this.secureClick(this.submitButton);
  }

  public async submitContactForm(data: ContactFormData, fileName?: string) {
    await this.fillName(data.name);
    await this.fillEmail(data.email);
    await this.fillSubject(data.subject);
    await this.fillMessage(data.message);
    if (fileName) {
      await this.setFile(fileName);
    }
    await this.clickSubmitButton();
    await this.page.keyboard.press("Enter");
  }
}
