import { ProductDetailsPage } from "@pages/product-details-page";
import type { Page } from "@playwright/test";

export const productDetailsFixtures = {
  productDetailsPage: async (
    { page }: { page: Page },
    use: (productDetailsPage: ProductDetailsPage) => Promise<void>,
  ) => {
    await use(new ProductDetailsPage(page));
  },
};
