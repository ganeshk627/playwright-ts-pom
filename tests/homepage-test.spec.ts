import {test, expect, type Page} from '@playwright/test';
// import HomePage from '../pages/home-page';
import {HomePage} from '../pages/home-page';

const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
let homePage:HomePage
test.beforeEach(async({page}) => {
    await page.goto(URL)
    homePage = new HomePage(page);
});

test.describe('Home Page Tests', ()=>{
    test('login admin',async ({page}) => {
        // await page.locator('//input[@placeholder="Username"]').fill('Admin')
        // await page.locator('input[placeholder="Password"]').fill('admin123')
        // await page.locator('button:has-text("Login")').click()

        await homePage.login("Admin", "admin123")
        
        await expect(page).toHaveURL(/dashboard/)
    });

    test('verify username, password attributes',async ({page}) => {
        await page.waitForTimeout(5000) //pausing the code for 5 Seconds

        await expect(page.locator('//input[@placeholder="Username"]')).toBeVisible()
        await expect(page.locator('//input[@placeholder="Username"]')).toBeEmpty()
        await expect(page.locator('//input[@placeholder="Username"]')).toBeEditable()
        await expect(page.locator('//input[@placeholder="Username"]')).toBeAttached()
        await expect(page.locator('//input[@placeholder="Username"]')).toBeEnabled()


        await page.fill('//input[@placeholder="Username"]', 'Admin')
        await page.locator('input[placeholder="Password"]').fill('admin123')
    
        await expect(page.locator('//input[@placeholder="Username"]')).not.toBeEmpty()
        await expect(page.locator('//input[@placeholder="Username"]')).toHaveValue('Admin')
    
        await expect(page.locator('//input[@placeholder="Password"]')).not.toBeEmpty()
        await expect(page.locator('//input[@placeholder="Password"]')).toHaveValue('admin123')
    
    
    })
})
