import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class MyAccountPage extends AbstractPage {
    // page: Page
    addAddress: Locator;
    addressMsg: Locator
    updateMsg: Locator
    editAddressButton: Locator

    constructor(page: Page) {
        super(page);
        // this.page = page;
        this.addAddress = page.getByRole('link', { name: 'Add new address' })
        this.addressMsg = page.locator("//span[text()='New address has been successfully created']")
        this.updateMsg = page.locator("//*[@id='default']/div[4]/div/span")
        this.editAddressButton = page.locator('//*[@id="content"]/div/div[1]/div[2]/div/div/div/div[2]/a[1]')
    }

    async assertUrl(): Promise<void> {
        expect(this.page.url()).toBe('https://demo.spreecommerce.org/account');
    }

    async assertTitle(): Promise<void>{
        expect(this.page).toHaveTitle("My Account - Spree Demo Site")
  
    }
    async assertMsg(): Promise<void>{
        expect(this.addressMsg).toBeVisible();
  
    }
    async assertUpdateMsg(): Promise<void>{
        expect(this.updateMsg).toBeVisible();
  
    }
    async clickOnAddAddress(): Promise<void> {
        await this.addAddress.click();
    }
    async clickOnEditAddress(): Promise<void> {
        await this.editAddressButton.click();
    }
}

