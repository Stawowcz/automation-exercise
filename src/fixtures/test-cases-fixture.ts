import { TestCasesPage } from "@pages/test-cases-page";
import type { Page } from "@playwright/test";

export const testCasesFixtures = {
  testCasesPage: async (
    { page }: { page: Page },
    use: (testCasesPage: TestCasesPage) => Promise<void>,
  ) => {
    await use(new TestCasesPage(page));
  },
};
