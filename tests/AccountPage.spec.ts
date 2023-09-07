import { test, expect } from '@playwright/test';
import {HomePage} from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';
import {AccountPage} from '../components/AccountPage';

test.describe('HomePage', () => {

    let homePage :HomePage;
    let loginPage: LoginPage;
    let accountPage: AccountPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToLogin();
        await homePage.wait(2000);
        loginPage = new LoginPage(page);
        await loginPage.enterUserName('minh@spree.com')
        await loginPage.enterPassword('123456')
        await loginPage.clickOnLoginBtn();
        await loginPage.wait(3000)

    })

    test('T01_Verify account page', async ({page}) => {
        accountPage = new AccountPage(page);
        accountPage.assertUrl();
        accountPage.assertTitle();
        await accountPage.assertTexts();
    });

    test('T02_Logout - verify login page display after logout', async({page}) => {
        accountPage = new AccountPage(page);
        accountPage.goToLogout();
        await accountPage.wait(3000)
        loginPage = new LoginPage(page);

        loginPage.assertTitle();
        loginPage.assertUrl();
        await loginPage.wait(5000)
    })

})



