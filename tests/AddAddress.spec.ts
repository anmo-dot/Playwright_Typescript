import { test, expect } from '@playwright/test';
import {MyAccountPage} from '../components/MyAccountPage';
import { LoginPage } from '../components/LoginPage';
import {HomePage} from '../components/HomePage';
import { AddAddressPage } from '../components/AddAddressPage';


test.describe('Add address page', () => {
    let username = "andrew@spree.com"
    let password = "password"
    let homePage :HomePage;
    let loginPage: LoginPage;
    let myAccountPage: MyAccountPage;
    let addAddressPage: AddAddressPage;
    let firstName =  "andrew"
    let lastName =  "velasuez"
    let address =  "123 main st"
    let city = "Washington"
    let zip =  "12345"
    let phone =  "123456789"

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
        //await loginPage.wait(3000)
        myAccountPage = new MyAccountPage(page)
        myAccountPage.clickOnAddAddress()
    })

    test('Assert URL and title and  add address', async ({page}) => {
        addAddressPage = new AddAddressPage(page)
        await addAddressPage.wait(3000)
        await addAddressPage.assertTitle();
        await addAddressPage.assertUrl();
        await addAddressPage.enterAddress(firstName, lastName, address, city, zip, phone);
        await addAddressPage.clickOnSaveBtn();
        await addAddressPage.wait(2000)
        myAccountPage = new MyAccountPage(page)
        myAccountPage.assertUrl()
        myAccountPage.assertTitle()
        myAccountPage.assertMsg();
    });
    
})



