import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class WomenPage extends AbstractPage {

    txtWomen : Locator
    txtSkirts: Locator
	txtDresses: Locator
    txtShirtsAndBlouses: Locator
    txtSweaters: Locator
    txtTopAndTshirts : Locator
    txtJacketAndCoats: Locator

    constructor(page: Page){
        super(page)
        this.txtWomen = page.locator("//div[@class='py-md-3 text-uppercase taxon-title'][normalize-space()='Women']")
        this.txtSkirts = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Skirts']")
        this.txtDresses = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Dresses']")
        this.txtShirtsAndBlouses = page.locator("//a[normalize-space()='Shirts and Blouses']")
        this.txtSweaters = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Sweaters']")
        this.txtTopAndTshirts = page.locator("//a[normalize-space()='Tops and T-shirts']")
        this.txtJacketAndCoats = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Jackets and Coats']")
    }


    async assertUrl(): Promise<void> {
        expect(this.page.url()).toBe("https://demo.spreecommerce.org/t/categories/women")
    }

    async assertTitle(): Promise<void>{
        expect(this.page).toHaveTitle("Women - Spree Demo Site")
    }

    async assertAllTexts(): Promise<void> {
        expect(this.txtWomen).toBeVisible();
        expect(this.txtSkirts).toBeVisible();
        expect(this.txtDresses).toBeVisible();
        expect(this.txtSweaters).toBeVisible();
        expect(this.txtJacketAndCoats).toBeVisible();
        expect(this.txtShirtsAndBlouses).toBeVisible();
        expect(this.txtTopAndTshirts).toBeVisible();
    }


}