import { BrandProductsPage } from "@pages/brand-product-page";
import type { Page } from "@playwright/test";

export const brandFixtures = {
  brandProductsPage: async (
    { page }: { page: Page },
    use: (brandProductsPage: BrandProductsPage) => Promise<void>,
  ) => {
    await use(new BrandProductsPage(page));
  },
};
