import { CategoryProductsPage } from "@pages/category-product-page";
import type { Page } from "@playwright/test";

export const categoryFixtures = {
  categoryProductsPage: async (
    { page }: { page: Page },
    use: (categoryProductsPage: CategoryProductsPage) => Promise<void>,
  ) => {
    await use(new CategoryProductsPage(page));
  },
};
