import type { Page } from "@playwright/test";
import { AddedToCartUnauthenticatedComponent } from "@components/added-to-cart-unauthenticated-component";

export const addedToCartUnauthenticatedFixtures = {
  addedToCartUnAuth: async (
    { page }: { page: Page },
    use: (component: AddedToCartUnauthenticatedComponent) => Promise<void>,
  ) => {
    await use(new AddedToCartUnauthenticatedComponent(page));
  },
};
