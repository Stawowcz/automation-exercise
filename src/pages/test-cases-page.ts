import { TestCasesText } from "@typings/pages/test-cases/test-cases-enum";
import { BasePage } from "./base-page";
import { Locator } from "@playwright/test";

export class TestCasesPage extends BasePage {
  public readonly testCasesTitle: Locator = this.page.getByRole("heading", {
    name: TestCasesText.TITLE as string,
    exact: true,
  });
    public readonly testCaseItem: Locator = this.page.locator(".panel-title")
}
