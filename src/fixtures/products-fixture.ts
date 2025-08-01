import { ProductPage } from "@pages/products-page";
import type { Page } from "@playwright/test";

export const productFixtures = {
  productPage: async (
    { page }: { page: Page },
    use: (productPage: ProductPage) => Promise<void>,
  ) => {
    await use(new ProductPage(page));
  },
};
