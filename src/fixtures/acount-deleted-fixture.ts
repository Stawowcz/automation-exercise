import { AccountDeletedPage } from "@pages/account-deleted-page";
import type { Page } from "@playwright/test";

export const acountDeletedFixtures = {
  accountDeletedPage: async (
    { page }: { page: Page },
    use: (homePage: AccountDeletedPage) => Promise<void>,
  ) => {
    await use(new AccountDeletedPage(page));
  },
};
