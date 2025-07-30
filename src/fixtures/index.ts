// index.ts
import { test as base, expect } from "@playwright/test";
import { authFixtures } from "./auth-fixture";
import type { AuthPage } from "@pages/auth-page";

type MyFixtures = {
  authPage: AuthPage;
};

export const test = base.extend<MyFixtures>({
  ...authFixtures,
});

export { expect };
