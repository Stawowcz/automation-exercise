import type { Page } from "@playwright/test";
import { AddedToCartComponent } from "@components/added-to-cart-component";

export const addedToCartFixtures = {
  addedToCart: async (
    { page }: { page: Page },
    use: (component: AddedToCartComponent) => Promise<void>,
  ) => {
    await use(new AddedToCartComponent(page));
  },
};
