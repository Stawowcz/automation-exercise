// components/recommended-items.ts
import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class RecommendedItemsComponent extends BaseComponent {
  private readonly container = this.page.locator(".recommended_items");
  private readonly carousel = this.container.locator(
    "#recommended-item-carousel",
  );
  private readonly nextBtn = this.container.locator(
    ".right.recommended-item-control",
  );

  public async addById(id: number) {
    const target = this.container.locator(
      `a.add-to-cart[data-product-id="${id}"]`,
    );
    await this.scrollUntilVisible(target);
    await this.interaction.secureClick(target);
  }

  public async addByName(name: string) {
    const target = this.carousel
      .locator(".productinfo")
      .filter({
        has: this.page.locator("p", { hasText: name }),
      })
      .locator("a.add-to-cart");
    await this.scrollUntilVisible(target);
    await this.interaction.secureClick(target);
  }

  private async scrollUntilVisible(loc: Locator, maxSteps = 10) {
    for (let i = 0; i < maxSteps; i++) {
      if (await loc.isVisible()) return;
      await this.nextBtn.waitFor({ state: "visible" });
      await this.nextBtn.click();
    }
    await expect(loc).toBeVisible();
  }
}
