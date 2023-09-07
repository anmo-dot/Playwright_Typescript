import { Locator, Page, expect } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class EditAddressPage extends AbstractPage {
    // page: Page
    
    firstNameTF: Locator
    lastNameTF: Locator
    addressTF: Locator
    cityTF: Locator
    zipTF: Locator
    phoneTF: Locator
    saveButton: Locator

    constructor(page: Page) {
        super(page);
        // this.page = page;
       
        this.firstNameTF = page.locator('#address_firstname')
        this.lastNameTF = page.locator('#address_lastname')
        this.addressTF = page.locator('#address_address1')
        this.cityTF = page.locator('#address_city')
        this.zipTF = page.locator('#address_zipcode')
        this.phoneTF = page.locator('#address_phone')
        this.saveButton = page.locator('//*[@id="checkout_form_address"]/input[3]')
        
    }

    async assertUrl(): Promise<void> {
        expect(this.page.url()).toContain('edit');
    }

    async assertTitle(): Promise<void>{
        expect(this.page).toHaveTitle("Spree Demo Site")
  
    }
    async editAddress(firstName: string, lastName: string, address: string, city: string, zip: string, phone: string): Promise<void>{
        await this.firstNameTF.clear()
        await this.firstNameTF.type(firstName)
        await this.lastNameTF.clear()
        await this.lastNameTF.type(lastName)
        await this.addressTF.clear()
        await this.addressTF.type(address)
        await this.cityTF.clear()
        await this.cityTF.type(city)
        await this.zipTF.clear()
        await this.zipTF.type(zip)
        await this.phoneTF.clear()
        await this.phoneTF.type(phone)
        
    }
    async clickOnSaveBtn(): Promise<void>{
        await this.saveButton.click()
    }
}

