import { BasePage } from "./base-page";
import { Locator } from "@playwright/test";
import { ContactFormData } from "@typings/pages/contact";
import { TestPaths } from "@utils/test-config";
import fs from "fs";
import path from "path";
import { ContactText } from "@typings/pages/contact";

export class ContactPage extends BasePage {
  private readonly nameField: Locator = this.page.getByTestId("name");
  private readonly emailField: Locator = this.page.getByTestId("email");
  private readonly subjectField: Locator = this.page.getByTestId("subject");
  private readonly messageField: Locator = this.page.getByTestId("message");
  private readonly fileInput: Locator = this.page.locator('input[type="file"]');
  private readonly submitButton: Locator =
    this.page.getByTestId("submit-button");

  private async fillName(value: string): Promise<void> {
    await this.interaction.secureFill(this.nameField, value);
  }

  private async fillEmail(value: string): Promise<void> {
    await this.interaction.secureFill(this.emailField, value);
  }

  private async fillMessage(value: string): Promise<void> {
    await this.interaction.secureFill(this.messageField, value);
  }

  private async fillSubject(value: string): Promise<void> {
    await this.interaction.secureFill(this.subjectField, value);
  }

  private async setFile(fileName: string): Promise<void> {
    const filePath = path.resolve(TestPaths.assets, fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Plik do uploadu nie istnieje: ${filePath}`);
    }
    await this.fileInput.setInputFiles(filePath);
  }

  private async clickSubmitButton(): Promise<void> {
    await this.interaction.secureClick(this.submitButton);
  }

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

  public async submitContactForm(
    data: ContactFormData,
    fileName?: string,
  ): Promise<void> {
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
