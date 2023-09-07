import { test, expect } from '@playwright/test';
import {HomePage} from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';


test.describe('HomePage', () => {

    let homePage :HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToLogin();
    })

    test('T01_Click Account/Login - Verify Login Page Url - Enter username/password - Verify account page url', async ({page}) => {
        await homePage.goToLogin();
        loginPage = new LoginPage(page);
        loginPage.assertUrl();
        loginPage.assertTitle();
        await loginPage.enterUserName('andrew@spree.com')
        await loginPage.enterPassword('password')
        await loginPage.clickOnLoginBtn();
        await loginPage.wait(3000)
    });

})



