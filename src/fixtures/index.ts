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
