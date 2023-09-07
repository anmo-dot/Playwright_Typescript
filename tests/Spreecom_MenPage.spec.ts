import { test, expect } from '@playwright/test';
import {HomePage} from '../components/HomePage';
import { MenPage } from '../components/MenPage';

test.describe("MenPage", () => {
    let homePage: HomePage;
    let menPage: MenPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToMenPage();
        await homePage.wait(2000)
    })

    test("Go To Men page and validate content", async ({page}) => {
        menPage = new MenPage(page);
        menPage.assertTitle();
        menPage.assertUrl();
        menPage.assertAllTexts();
    })
})