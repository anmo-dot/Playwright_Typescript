import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class MenPage extends AbstractPage {

    txtMen : Locator
    txtShirts: Locator
	txtTshirts: Locator
    txtSweaters: Locator
    txtJacketAndCoats: Locator

    constructor(page: Page){
        super(page)
        this.txtMen = page.locator("//div[@class='py-md-3 text-uppercase taxon-title'][normalize-space()='Men']")
        this.txtShirts = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Shirts']")
        this.txtTshirts = page.locator("//a[normalize-space()='T-shirts']")
        this.txtSweaters = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Sweaters']")
        this.txtJacketAndCoats = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Jackets and Coats']")
    }

    async assertUrl(): Promise<void> {
        await expect(this.page.url()).toBe("https://demo.spreecommerce.org/t/categories/men")
    }

    async assertTitle(): Promise<void>{
        await expect(this.page).toHaveTitle("Men - Spree Demo Site")
    }

    async assertAllTexts(): Promise<void> {
        expect(this.txtMen).toBeVisible();
        expect(this.txtShirts).toBeVisible();
        expect(this.txtTshirts).toBeVisible();
        expect(this.txtSweaters).toBeVisible();
        expect(this.txtJacketAndCoats).toBeVisible();
    }


}