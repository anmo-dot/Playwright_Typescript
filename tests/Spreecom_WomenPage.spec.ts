import { test, expect } from '@playwright/test';
import {HomePage} from '../components/HomePage';
import { WomenPage } from '../components/WomenPage';

test.describe("WomenPage", () => {
    let homePage: HomePage;
    let womenPage: WomenPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToWomenPage();
        await homePage.wait(2000)
    })

    test("Go To Women page and validate content", async ({page}) => {
        womenPage = new WomenPage(page);
        womenPage.assertTitle();
        womenPage.assertUrl();
        womenPage.assertAllTexts();
    })
})