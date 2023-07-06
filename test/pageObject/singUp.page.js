const page = require('./page');
const emailInput = '#email';
const passwordInput = '#password';
const agreeCheckBox = '#terms_and_conditions';
const createAccountBtn = '[type="submit"]';
const OneLastStepMassage = '//*[@id="__next"]/div/main/section/div/div[1]/h1/span'
const lastNameError = '#last_name_message';
const firstNameError = '#first_name_message';
const passwordErrors = '#password_requirements';
const firstNameField = "#first_name"
const lastNameField = "#last_name"
const TermsAndConditions = '//*[@id="__next"]/div/main/section/div[2]/div/div[1]/div/form/div[5]/div/label/span/a[1]/span/span'
const TermsAndConditionsText = 'h1>span'
const SingUpBtn = '//*[@id="header-sign-up"]'

class SignUpPage {
     
    async ClickSingUpBtn() {
        await page.click(SingUpBtn)
    }

    async checkTermsAndConditions() {
        await page.isElementDisplayed(TermsAndConditionsText)
    }

    async clickTermsAndConditions() {
        await page.click(TermsAndConditions)
    }
    async enterEmail(Email) {
        await page.setValue(emailInput, Email)
    }

    async enterName(Name) {
        await page.setValue(nameInput, Name);
    }

    async enterPassword(Password) {
        await page.setValue(passwordInput, Password);
    }

    async clickAgreeCheckBox() {
        await page.click(agreeCheckBox);
    }

    async clickCreateAccountBnt() {
        await page.click(createAccountBtn);
    }

    async isPasswordErrorDisplayed() {
        return await page.isElementDisplayed(passwordErrors);
    }

    async isLastNameErrorDisolayed() {
        return await page.isElementDisplayed(lastNameError);
    }

    async isFirstNameErrorDisolayed() {
        return await page.isElementDisplayed(firstNameError);
    }

    async isMessageDisplayed() {
        return await page.isElementDisplayed(OneLastStepMassage);
    }
    async enterLastNameFieldValue(Name) {
        await page.setValue(lastNameField,Name)
    }
    async enterFirstNameFieldValue(Name) {
        await page.setValue(firstNameField,Name)
    }
    

}
module.exports = new SignUpPage();