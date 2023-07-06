const page = require('./page');

const whyTelnyxButton = 'header>div>div>div>nav>button:nth-child(10)>DIV>SPAN';
const becomeAPartnerButton = '[href*="/partnerships"]>span:nth-child(1)';
const firstNameField = '#FirstName';
const lastNameField = '#LastName';
const companyField = '#Company';
const emailField = '#Email';
const countryDropdown = '#Phone_Number_Extension__c';
const phoneNumberField = '#Phone_Number_Base__c';
const partnerTypeDropdown = '#Partner_Type__c';
const tellUsField = '#Form_Additional_Information__c';
const applyNowButton = '[type="submit"]';
const submitMessageText = 'h1>span';
const errorMessageText = '#ValidMsgFirstName';
const partnersButton = '[href="/partnerships"]>span';

class ContactUsPage{
    async clickBecomeAPartnerButton() {
        await page.click(becomeAPartnerButton)
    }
    async enterFirstNameFieldValue(Name) {
        await page.type(firstNameField,Name)
    }
    async enterLastNameFieldValue(Name) {
        await page.type(lastNameField,Name)
    }
    async enterEmailFieldValue(Email) {
       await page.type(emailField,Email)
    }
    async selectCanadaOptionInCountryDropdown() {
        await (await page.getElement(countryDropdown)).selectByIndex(2)
    }
    async enterPhoneNumberFieldValue(Number) {
        await page.type(phoneNumberField,Number)
    }
    async enterCompanyFieldValue(Name) {
        await page.type(companyField,Name)
    }
    async selectResellerOptionInPartnerTypeDropdown() {
        await (await page.getElement(partnerTypeDropdown)).selectByIndex(2)
    }
    async enterTellUsFieldValue(Text) {
        await page.type(tellUsField,Text)
    }
    async clickApplyNowButton() {
        await page.click(applyNowButton)
    }
    async getSubmitMessageText() {
        return await page.isElementDisplayed(submitMessageText)
    }
    async isErrorMessageDisplayed() {
        return await page.isElementDisplayed(errorMessageText)
    }
    async clickWhyTelnyxButton() {
       await page.click(whyTelnyxButton);
    }
    async clickPartnersButton() {
        await page.click(partnersButton);
    }
}
module.exports = new ContactUsPage()