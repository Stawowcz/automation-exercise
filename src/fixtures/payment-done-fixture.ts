import { PaymentDonePage } from "@pages/payment-done-page"
import type { Page } from "@playwright/test";

export const paymentDoneFixtures = {
  paymentDonePage: async (
    { page }: { page: Page },
    use: (paymentDonePage: PaymentDonePage) => Promise<void>,
  ) => {
    await use(new PaymentDonePage(page));
  },
};
