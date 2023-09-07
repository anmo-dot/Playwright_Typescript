import { test, expect } from '@playwright/test';
import {MyAccountPage} from '../components/MyAccountPage';
import { LoginPage } from '../components/LoginPage';
import {HomePage} from '../components/HomePage';


test.describe('My Account page', () => {
    let username = "andrew@spree.com"
    let password = "password"
    let homePage :HomePage;
    let loginPage: LoginPage;
    let myAccountPage: MyAccountPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToLogin();
        await homePage.wait(2000);
        loginPage = new LoginPage(page);
        loginPage.assertUrl();
        await loginPage.enterUserName(username);
        await loginPage.enterPassword(password);
        await loginPage.clickOnLoginBtn();
        await loginPage.wait(3000)
    })

    test('Assert URL and title', async ({page}) => {
        myAccountPage = new MyAccountPage(page);
        await myAccountPage.wait(3000)
        myAccountPage.assertTitle();
        myAccountPage.assertUrl();
    });

})



