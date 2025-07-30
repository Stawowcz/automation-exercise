import type { Page } from "@playwright/test";
import { AuthPage } from "@pages/auth-page";

export const authFixtures = {
  authPage: async (
    { page }: { page: Page },
    use: (authPage: AuthPage) => Promise<void>,
  ) => {
    await use(new AuthPage(page));
  },
};
