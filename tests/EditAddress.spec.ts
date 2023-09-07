import { test, expect } from '@playwright/test';
import {MyAccountPage} from '../components/MyAccountPage';
import { LoginPage } from '../components/LoginPage';
import {HomePage} from '../components/HomePage';
import { AddAddressPage } from '../components/AddAddressPage';
import { EditAddressPage } from '../components/EditAddressPage';


test.describe('Edit address page', () => {
    let username = "andrew@spree.com"
    let password = "password"
    let homePage :HomePage;
    let loginPage: LoginPage;
    let myAccountPage: MyAccountPage;
    let addAddressPage: AddAddressPage;
    let editAddressPage: EditAddressPage
    let firstName =  "andrewwwwwww"
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
        await myAccountPage.clickOnEditAddress();
    })

    test('Assert URL and title and  edit address', async ({page}) => {
        editAddressPage = new EditAddressPage(page)
        await editAddressPage.wait(3000)
        await editAddressPage.assertTitle();
        await editAddressPage.assertUrl();
        await editAddressPage.editAddress(firstName, lastName, address, city, zip, phone);
        await editAddressPage.clickOnSaveBtn();
        await editAddressPage.wait(2000)
        myAccountPage = new MyAccountPage(page)
        myAccountPage.assertUrl()
        myAccountPage.assertTitle()
        myAccountPage.assertUpdateMsg()
    });
    
})



