import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class AccountPage extends AbstractPage {

    accountButton: Locator
    logoutButton: Locator
    myAccountTxt: Locator
    myOrdersTxt: Locator
    constructor(page:Page){
        super(page);
        this.accountButton = page.locator('#account-button')
        this.logoutButton = page.getByText('LOGOUT');
        this.myAccountTxt = page.locator("//h3[normalize-space()='My Account']")
        this.myOrdersTxt = page.locator("//h3[normalize-space()='My Orders']")
    }

    async assertTitle(): Promise<void> {
         expect(this.page).toHaveTitle("My Account - Spree Demo Site")
    }

    async assertUrl(): Promise<void> {
        expect(this.page.url()).toBe("https://demo.spreecommerce.org/account")
    }
    
    async assertTexts(): Promise<void> {
        await expect(this.myAccountTxt).toBeVisible();
        await expect(this.myOrdersTxt).toBeVisible();
        await expect(this.page.getByText("Account info")).toBeVisible();
    }

    async goToLogout(): Promise<void> {
        await this.accountButton.click();
        await this.logoutButton.click();
    }
}