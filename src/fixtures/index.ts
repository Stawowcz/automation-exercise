// index.ts
import { test as base, expect } from "@playwright/test";
import { authFixtures } from "./auth-fixture";
import type { AuthPage } from "@pages/auth-page";
import { homeFixtures } from "./home-fixture";
import { HomePage } from "@pages/home-page";

type MyFixtures = {
  authPage: AuthPage;
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  ...authFixtures,
  ...homeFixtures,
});

export { expect };
