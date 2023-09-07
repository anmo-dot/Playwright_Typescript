import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class HomePage extends AbstractPage {
    accountButton: Locator
    loginButton: Locator
    womenLink: Locator
    menLink: Locator
    sportSwearLink: Locator

    constructor(page: Page) {
        super(page);
        this.accountButton = page.locator('#account-button')
        this.loginButton = page.getByText('LOGIN');
        this.womenLink = page.locator("//a[@class='nav-link main-nav-bar-item main-nav-bar-category-button dropdown-toggle'][normalize-space()='Women']")
        this.menLink = page.locator("//a[@class='nav-link main-nav-bar-item main-nav-bar-category-button dropdown-toggle'][normalize-space()='Men']")
        this.sportSwearLink = page.locator("//a[@class='nav-link main-nav-bar-item main-nav-bar-category-button dropdown-toggle'][normalize-space()='Sportswear']")
    }

    async visit(): Promise<void> {
        await this.page.goto("https://demo.spreecommerce.org/")
    }

    async assertTitle(): Promise<void> {
        await expect(this.page).toHaveTitle("Homepage (English) - Spree Demo Site")
    }

    async assertUrl(): Promise<void> {
        await expect(this.page.url()).toBe("https://demo.spreecommerce.org/")
    }

    async clickOnAccountBtn(): Promise<void> {
        await this.accountButton.click();
    }

    async clickOnLogginBtn(): Promise<void> {
        await this.loginButton.click();
    }

    async goToLogin(): Promise<void> {
        await this.clickOnAccountBtn();
        await this.clickOnLogginBtn();
    }

    async goToMenPage(): Promise<void> {
        await this.menLink.click();
    }

    async goToWomenPage(): Promise<void> {
        await this.womenLink.click();
    }

    async goToSportswearPage(): Promise<void> {
        await this.sportSwearLink.click();
    }
}

