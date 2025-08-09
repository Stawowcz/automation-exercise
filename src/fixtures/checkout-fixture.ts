import type { Page } from "@playwright/test";
import { CheckoutPage } from "@pages/checkout-page";

export const checkoutFixtures = {
  checkoutPage: async (
    { page }: { page: Page },
    use: (authPage: CheckoutPage) => Promise<void>,
  ) => {
    await use(new CheckoutPage(page));
  },
};
