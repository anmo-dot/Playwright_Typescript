import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class SportswearPage extends AbstractPage {

    txtSportswear : Locator
    txtTops: Locator
	txtSweatshirts: Locator
    txtPants: Locator

    constructor(page: Page){
        super(page)
        this.txtSportswear = page.locator("//div[@class='py-md-3 text-uppercase taxon-title'][normalize-space()='Sportswear']")
        this.txtTops = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Tops']")
        this.txtSweatshirts = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Sweatshirts']")
        this.txtPants = page.locator("//a[@class='pt-4 pb-2 mb-2 pl-4 pt-4 pb-2'][normalize-space()='Pants']")
    }
	

    async assertUrl(): Promise<void> {
        await expect(this.page.url()).toBe("https://demo.spreecommerce.org/t/categories/sportswear")
    }

    async assertTitle(): Promise<void>{
        await expect(this.page).toHaveTitle("Sportswear - Spree Demo Site")
    }

    async assertAllTexts(): Promise<void> {
        expect(this.txtSportswear).toBeVisible();
        expect(this.txtTops).toBeVisible();
        expect(this.txtSweatshirts).toBeVisible();
        expect(this.txtPants).toBeVisible();
    }
}