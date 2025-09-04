import { test as base, expect } from "@playwright/test";
import { authFixtures } from "./pages-fixture";
import type { AuthPage } from "@pages/auth-page";
import { homeFixtures } from "./pages-fixture";
import { HomePage } from "@pages/home-page";
import { contactFixtures } from "./pages-fixture";
import { ContactPage } from "@pages/contact-page";
import { TestCasesPage } from "@pages/test-cases-page";
import { testCasesFixtures } from "./pages-fixture";
import { productFixtures } from "./pages-fixture";
import { ProductPage } from "@pages/products-page";
import { productDetailsFixtures } from "./pages-fixture";
import { ProductDetailsPage } from "@pages/product-details-page";
import { CartPage } from "@pages/cart-page";
import { cartFixtures } from "./pages-fixture";
import { AddedToCartComponent } from "@components/added-to-cart-component";
import { addedToCartFixtures } from "./pages-fixture";
import { checkoutFixtures } from "./pages-fixture";
import { CheckoutPage } from "@pages/checkout-page";
import { paymentFixtures } from "./pages-fixture";
import { PaymentPage } from "@pages/payment-page";
import { paymentDoneFixtures } from "./pages-fixture";
import { PaymentDonePage } from "@pages/payment-done-page";
import { addedToCartUnauthenticatedFixtures } from "./pages-fixture";
import { AddedToCartUnauthenticatedComponent } from "@components/added-to-cart-unauthenticated-component";
import { serviceFixtures } from "./pages-fixture";
import type { CartApi } from "../services/cart/cart-api";
import { RecommendedItemsComponent } from "@components/recommended-items-component";
import { recomItemFixtures } from "./pages-fixture";
import { CategoryProductsPage } from "@pages/category-product-page";
import { categoryFixtures } from "./pages-fixture";
import { brandFixtures } from "./pages-fixture";
import { BrandProductsPage } from "@pages/brand-product-page";
import { AccountDeletedPage } from "@pages";
import {acountDeletedFixtures} from "./pages-fixture"


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
  "ads.",
];

function shouldBlock(url: string): boolean {
  if (AD_HOSTS.some((h) => url.includes(h))) return true;
  // common ad patterns (skrypty/iframes/ścieżki)
  return (
    /(^|[/.])ads?([/.-]|$)/i.test(url) || /adserver|advert|banner/i.test(url)
  );
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
  accountDeletedPage: AccountDeletedPage
};

export const test = base.extend<MyFixtures>({
  page: async ({ page }, use) => {
    const block = process.env.BLOCK_ADS !== "0";
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
  ...acountDeletedFixtures
});

export { expect };
