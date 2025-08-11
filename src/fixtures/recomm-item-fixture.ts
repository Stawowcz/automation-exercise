import type { Page } from "@playwright/test";
import { RecommendedItemsComponent } from "src/components/recommended-items-component";

export const recomItemFixtures = {
  recommendedItemsComponent: async (
    { page }: { page: Page },
    use: (component: RecommendedItemsComponent) => Promise<void>,
  ) => {
    await use(new RecommendedItemsComponent(page));
  },
};
