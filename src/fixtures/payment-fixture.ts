import { PaymentPage } from "@pages/payment-page";
import type { Page } from "@playwright/test";

export const paymentFixtures = {
  paymentPage: async (
    { page }: { page: Page },
    use: (paymentPage: PaymentPage) => Promise<void>,
  ) => {
    await use(new PaymentPage(page));
  },
};
