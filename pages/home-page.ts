import { type Locator, type Page} from "@playwright/test";

export class HomePage {

    //variables
    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;



    //constructor
    constructor (page:Page) {
        this.page = page;
        this.username = page.locator('//input[@placeholder="Username"]')
        this.password = page.locator('input[placeholder="Password"]')
        this.loginBtn = page.locator('button:has-text("Login")')
    }
    //methods
    async login(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click();
    }

}
export default HomePage;
