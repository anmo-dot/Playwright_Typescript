import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class LoginPage extends AbstractPage {
    emailTextBox: Locator
    passwordTextBox: Locator
    loginBtn: Locator

    constructor(page: Page){
        super(page)
        this.emailTextBox = page.locator('#spree_user_email')
        this.passwordTextBox = page.locator('#spree_user_password')
        this.loginBtn = page.locator("//input[@name='commit']")
    }

    async assertUrl(): Promise<void> {
        expect(this.page.url()).toBe('https://demo.spreecommerce.org/login');
    }

    async assertTitle(): Promise<void>{
        expect(this.page).toHaveTitle("Login - Spree Demo Site")
    }

    
    async enterUserName(username: string): Promise<void>{
        await this.emailTextBox.type(username)
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordTextBox.type(password)
    }

    async clickOnLoginBtn(): Promise<void>{
        await this.loginBtn.click();
    }

}