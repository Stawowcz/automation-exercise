import { chromium, FullConfig } from "@playwright/test";
import { env } from "./src/utils/env-utils";
import { AuthPage } from "./src/pages/auth-page";
import { HomePage } from "./src/pages/home-page";

export default async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({
    headless: (config.projects[0].use?.headless as boolean) ?? true,
  });
  const page = await browser.newPage();

  page.setDefaultTimeout(60_000);
  page.setDefaultNavigationTimeout(60_000);

  const authPage = new AuthPage(page);
  const homePage = new HomePage(page);

  await authPage.goToLink(env.AUTOMATION_BASEURL);

  await authPage.login(
    env.AUTOMATION_USER_CORRECT,
    env.AUTOMATION_PASSWORD_CORRECT,
  );

  await homePage.homeTitle.waitFor({ state: "visible" });
  await homePage.homeSubtitle.waitFor({ state: "visible" });

  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}
