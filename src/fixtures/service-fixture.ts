import type { Page } from "@playwright/test";
import { CartApi } from "../services/cart/cart-api";

export const serviceFixtures = {
  cartApi: async ({ page }: { page: Page }, use: (api: CartApi) => Promise<void>) => {
    await use(new CartApi(page));
  },
};
