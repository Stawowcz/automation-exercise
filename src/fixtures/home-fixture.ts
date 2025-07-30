import { HomePage } from "@pages/home-page";
import type { Page } from "@playwright/test";

export const homeFixtures = {
  homePage: async (
    { page }: { page: Page },
    use: (homePage: HomePage) => Promise<void>,
  ) => {
    await use(new HomePage(page));
  },
};
