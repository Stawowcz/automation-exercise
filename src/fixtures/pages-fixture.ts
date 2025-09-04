import { AccountDeletedPage } from "@pages/account-deleted-page";
import type { Page } from "@playwright/test";
import { AddedToCartComponent } from "@components/added-to-cart-component";
import { AddedToCartUnauthenticatedComponent } from "@components/added-to-cart-unauthenticated-component";
import { BrandProductsPage } from "@pages/brand-product-page";
import { AuthPage } from "@pages";
import { CartPage } from "@pages/cart-page";
import { CategoryProductsPage } from "@pages/category-product-page";
import { CheckoutPage } from "@pages/checkout-page";
import { ContactPage } from "@pages/contact-page";
import { HomePage } from "@pages/home-page";
import { PaymentDonePage } from "@pages/payment-done-page";
import { PaymentPage } from "@pages/payment-page";
import { ProductDetailsPage } from "@pages/product-details-page";
import { ProductPage } from "@pages/products-page";
import { RecommendedItemsComponent } from "@components/recommended-items-component";
import { CartApi } from "../services/cart/cart-api";
import { TestCasesPage } from "@pages/test-cases-page";

export const testCasesFixtures = {
  testCasesPage: async (
    { page }: { page: Page },
    use: (testCasesPage: TestCasesPage) => Promise<void>,
  ) => {
    await use(new TestCasesPage(page));
  },
};

export const serviceFixtures = {
  cartApi: async (
    { page }: { page: Page },
    use: (api: CartApi) => Promise<void>,
  ) => {
    await use(new CartApi(page));
  },
};

export const recomItemFixtures = {
  recommendedItemsComponent: async (
    { page }: { page: Page },
    use: (component: RecommendedItemsComponent) => Promise<void>,
  ) => {
    await use(new RecommendedItemsComponent(page));
  },
};

export const productFixtures = {
  productPage: async (
    { page }: { page: Page },
    use: (productPage: ProductPage) => Promise<void>,
  ) => {
    await use(new ProductPage(page));
  },
};

export const productDetailsFixtures = {
  productDetailsPage: async (
    { page }: { page: Page },
    use: (productDetailsPage: ProductDetailsPage) => Promise<void>,
  ) => {
    await use(new ProductDetailsPage(page));
  },
};

export const paymentFixtures = {
  paymentPage: async (
    { page }: { page: Page },
    use: (paymentPage: PaymentPage) => Promise<void>,
  ) => {
    await use(new PaymentPage(page));
  },
};

export const paymentDoneFixtures = {
  paymentDonePage: async (
    { page }: { page: Page },
    use: (paymentDonePage: PaymentDonePage) => Promise<void>,
  ) => {
    await use(new PaymentDonePage(page));
  },
};

export const homeFixtures = {
  homePage: async (
    { page }: { page: Page },
    use: (homePage: HomePage) => Promise<void>,
  ) => {
    await use(new HomePage(page));
  },
};


export const contactFixtures = {
  contactPage: async (
    { page }: { page: Page },
    use: (contactPage: ContactPage) => Promise<void>,
  ) => {
    await use(new ContactPage(page));
  },
};

export const checkoutFixtures = {
  checkoutPage: async (
    { page }: { page: Page },
    use: (authPage: CheckoutPage) => Promise<void>,
  ) => {
    await use(new CheckoutPage(page));
  },
};

export const categoryFixtures = {
  categoryProductsPage: async (
    { page }: { page: Page },
    use: (categoryProductsPage: CategoryProductsPage) => Promise<void>,
  ) => {
    await use(new CategoryProductsPage(page));
  },
};

export const cartFixtures = {
  cartPage: async (
    { page }: { page: Page },
    use: (cartPage: CartPage) => Promise<void>,
  ) => {
    await use(new CartPage(page));
  },
};

export const brandFixtures = {
  brandProductsPage: async (
    { page }: { page: Page },
    use: (brandProductsPage: BrandProductsPage) => Promise<void>,
  ) => {
    await use(new BrandProductsPage(page));
  },
};

export const authFixtures = {
  authPage: async (
    { page }: { page: Page },
    use: (authPage: AuthPage) => Promise<void>,
  ) => {
    await use(new AuthPage(page));
  },
};

export const addedToCartUnauthenticatedFixtures = {
  addedToCartUnAuth: async (
    { page }: { page: Page },
    use: (component: AddedToCartUnauthenticatedComponent) => Promise<void>,
  ) => {
    await use(new AddedToCartUnauthenticatedComponent(page));
  },
};

export const addedToCartFixtures = {
  addedToCart: async (
    { page }: { page: Page },
    use: (component: AddedToCartComponent) => Promise<void>,
  ) => {
    await use(new AddedToCartComponent(page));
  },
};

export const acountDeletedFixtures = {
  accountDeletedPage: async (
    { page }: { page: Page },
    use: (homePage: AccountDeletedPage) => Promise<void>,
  ) => {
    await use(new AccountDeletedPage(page));
  },
};