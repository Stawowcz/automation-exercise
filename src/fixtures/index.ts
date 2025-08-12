import { test as base, expect } from "@playwright/test";
import { authFixtures } from "./auth-fixture";
import type { AuthPage } from "@pages/auth-page";
import { homeFixtures } from "./home-fixture";
import { HomePage } from "@pages/home-page";
import { contactFixtures } from "./contact-fixture";
import { ContactPage } from "@pages/contact-page";
import { TestCasesPage } from "@pages/test-cases-page";
import { testCasesFixtures } from "./test-cases-fixture";
import { productFixtures } from "./products-fixture";
import { ProductPage } from "@pages/products-page";
import { productDetailsFixtures } from "./product-details-fixture";
import { ProductDetailsPage } from "@pages/product-details-page";
import { CartPage } from "@pages/cart-page";
import { cartFixtures } from "./cart-fixture";
import { AddedToCartComponent } from "@components/added-to-cart-component";
import { addedToCartFixtures } from "./added-to-cart-fixture";
import { checkoutFixtures } from "./checkout-fixture";
import { CheckoutPage } from "@pages/checkout-page";
import { paymentFixtures } from "./payment-fixture";
import { PaymentPage } from "@pages/payment-page";
import { paymentDoneFixtures } from "./payment-done-fixture";
import { PaymentDonePage } from "@pages/payment-done-page";
import { addedToCartUnauthenticatedFixtures } from "./added-to-cart-unauthenticated-fixture";
import { AddedToCartUnauthenticatedComponent } from "@components/added-to-cart-unauthenticated-component";
import { serviceFixtures } from "./service-fixture";
import type { CartApi } from "../services/cart/cart-api";
import { RecommendedItemsComponent } from "@components/recommended-items-component";
import { recomItemFixtures } from "./recomm-item-fixture";
import { CategoryProductsPage } from "@pages/category-product-page";
import { categoryFixtures } from "./category-fixture";
import { brandFixtures } from "./brand-fixture";
import { BrandProductsPage } from "@pages/brand-product-page";

// --- Blokada reklam (lista + helper) ---
const AD_HOSTS = [
  "doubleclick.net",
  "googlesyndication",
  "googletagservices",
  "adservice.google",
  "googletagmanager.com",
  "adnxs.com",
  "rubiconproject.com",
  "taboola.com",
  "outbrain.com",
  "ads."
];

function shouldBlock(url: string): boolean {
  if (AD_HOSTS.some(h => url.includes(h))) return true;
  // common ad patterns (skrypty/iframes/ścieżki)
  return /(^|[/.])ads?([/.-]|$)/i.test(url) || /adserver|advert|banner/i.test(url);
}

type MyFixtures = {
  authPage: AuthPage;
  homePage: HomePage;
  contactPage: ContactPage;
  testCasesPage: TestCasesPage;
  productPage: ProductPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  addedToCart: AddedToCartComponent;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
  paymentDonePage: PaymentDonePage;
  addedToCartUnAuth: AddedToCartUnauthenticatedComponent;
  cartApi: CartApi;
  recommendedItemsComponent: RecommendedItemsComponent;
  categoryProductsPage: CategoryProductsPage;
  brandProductsPage: BrandProductsPage;
};

export const test = base.extend<MyFixtures>({
  // === Override page: globalna blokada reklam ===
  page: async ({ page }, use) => {
    const block = process.env.BLOCK_ADS !== "0"; // ustaw BLOCK_ADS=0, by wyłączyć
    if (block) {
      await page.route("**/*", (route) => {
        const url = route.request().url();
        if (shouldBlock(url)) return route.abort();
        return route.continue();
      });
    }
    await use(page);
  },

  ...authFixtures,
  ...homeFixtures,
  ...contactFixtures,
  ...testCasesFixtures,
  ...productFixtures,
  ...productDetailsFixtures,
  ...cartFixtures,
  ...addedToCartFixtures,
  ...addedToCartUnauthenticatedFixtures,
  ...checkoutFixtures,
  ...paymentFixtures,
  ...paymentDoneFixtures,
  ...serviceFixtures,
  ...recomItemFixtures,
  ...categoryFixtures,
  ...brandFixtures,
});

export { expect };
