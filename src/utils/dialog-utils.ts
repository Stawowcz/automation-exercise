import { Page, expect } from "@playwright/test";

export async function expectAndAcceptPopup(page: Page, expectedMessage: string) {
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain(expectedMessage);
    await dialog.accept();
  });
}
