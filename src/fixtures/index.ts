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

type MyFixtures = {
  authPage: AuthPage;
  homePage: HomePage;
  contactPage: ContactPage;
  testCasesPage: TestCasesPage;
  productPage: ProductPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage
};

export const test = base.extend<MyFixtures>({
  ...authFixtures,
  ...homeFixtures,
  ...contactFixtures,
  ...testCasesFixtures,
  ...productFixtures,
  ...productDetailsFixtures,
  ...cartFixtures
});

export { expect };
