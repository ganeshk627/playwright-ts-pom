# playwright-ts-pom

# 00. Installation
## 1. Install nodejs
https://nodejs.org/en/download

## 2. Install Vscode
https://code.visualstudio.com/download

## 3. Install "Playwright Test for VS Code" extension in VS Code
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

## 4. Creating Playwright project

    npm init playwright@latest

## 5. Installing browsers

    npx playwright install

# 01. Creating Tests
naming convention: mytest.spec.ts

# 02. Runing the Tests
## Running all the tests in headless mode with all configured  browsers
    npx playwright test

## Running all the tests in headed mode with configured all browsers
    npx playwright test --headed

## Running all the tests only in mytest.spec.ts with configured all browsers in headed mode
    npx playwright test mytest.spec.ts --headed

## Running all the tests only in mytest.spec.ts with specified browser in headed mode
    npx playwright test mytest.spec.ts --project=chromium --headed

## Running all the tests only in mytest.spec.ts with specified browser in headed mode and debug mode
    npx playwright test mytest.spec.ts --project=chromium --headed --debug

# 03. Viewing Playwright Report
    npx playwright show-report