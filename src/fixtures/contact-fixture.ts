import { ContactPage } from "@pages/contact-page";
import type { Page } from "@playwright/test";

export const contactFixtures = {
  contactPage: async (
    { page }: { page: Page },
    use: (contactPage: ContactPage) => Promise<void>,
  ) => {
    await use(new ContactPage(page));
  },
};
