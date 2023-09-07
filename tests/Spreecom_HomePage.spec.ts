import { test, expect } from '@playwright/test';
import {HomePage} from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';


test.describe('HomePage', () => {

    let homePage :HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
    })

    test('T01_Click Account/Login - Verify Login Page Url', async ({page}) => {
        await homePage.clickOnAccountBtn();
        await homePage.clickOnLogginBtn();
        await homePage.wait(2000);
        loginPage = new LoginPage(page);
        loginPage.assertUrl();
    });

})



