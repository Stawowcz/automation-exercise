# Playwright Test Automation

Automated end‑to‑end tests for the automation exercise site using Playwright + TypeScript, with Page Object Model, custom fixtures, and soft assertions.

## Installation

```bash
  git clone https://github.com/Stawowcz/automation-exercise.git
  cd automation-exercise
  npm install
```

## Configuration

Create a `.env` file with:

```env
AUTOMATION_PASSWORD=automation-pass
AUTOMATION_BASEURL=https://www.automationexercise.com

AUTOMATION_USER_CORRECT = login-correct@gmail.com
AUTOMATION_PASSWORD_CORRECT = zaq1@WSX

AUTOMATION_USER_INCORRECT = login-incorrect@gmail.com
AUTOMATION_PASSWORD_INCORRECT = pass-incorrect
```

# Run all tests

```bash
  npm run test:all
```

# Run authenticated tests with storage state

```bash
  npm run test:chromium
  npm run test:webkit
```

# Run unauthenticated tests without storage state

```bash
  npm run test:unauth:chromium
  npm run test:unauth:webkit
```

# Run in debug mode

```bash
  npm run test:chromium:debug
  npm run test:webkit:debug
  npm run test:unauth:chromium:debug
  npm run test:unauth:webkit:debug
```

## Reporting

To view the HTML report:

```bash
  npm run report
```

## CI/CD

Configured in `.github/workflows/playwright.yml` to:

- Run tests in parallel across Chromium, and WebKit
- Cache `node_modules` and Playwright browsers for faster builds
- Publish test reports and artifacts on each run
