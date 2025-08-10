import { defineConfig, devices } from "@playwright/test";
import { env } from "@utils";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config();

export default defineConfig({
  testDir: "./src/tests/",
  timeout: 120 * 1_000,
  expect: {
    timeout: 30 * 1_000,
  },

  reporter: [
    ["list"],
    ["junit", { outputFile: "test-results/junit-results.xml" }],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  use: {
    headless: true,
    baseURL: env.AUTOMATION_BASEURL,
    testIdAttribute: "data-qa",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    navigationTimeout: 60_000,
  },

  projects: [
    {
      name: "unauthenticated-tests",
      testMatch: [
        /.*auth-negative\.spec\.ts$/,
        /.*auth-positive\.spec\.ts$/,
        /.*register\.spec\.ts$/,
        /.*checkout-unauthenticated\.spec\.ts$/, // + tutaj
      ],
      use: {
        storageState: undefined,
      },
    },

    {
      name: "Chromium",
      testMatch:
        /^(?!.*(auth-negative|auth-positive|register|checkout-unauthenticated)).*\.spec\.ts$/, // + dodać checkout-unauthenticated do wykluczeń
      use: {
        ...devices["Desktop Chrome"],
        storageState: "storageState.json",
      },
    },
  ],

  metadata: {
    paths: {
      assets: path.resolve(__dirname, "assets"),
    },
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? "100%" : "50%",
  globalSetup: "./global-setup",

  outputDir: "test-results/",
});
