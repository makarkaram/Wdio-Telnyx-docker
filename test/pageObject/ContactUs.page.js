const page = require('./page');

const firstNameField = "#FirstName"
const lastNameField = "#LastName"
const emailField = '#Email';
const countryDropdown = '[name="Phone_Number_Extension__c"]';
const reasonForContactDropdown = '#Reason_for_Contact__c';
const phoneNumberField = '#Phone_Number_Base__c';
const companyWebsiteField = '#Website';
const describeYourRequestField = '#Form_Additional_Information__c';
const submitButton = '[type="Submit"]';
const submitMessageText = 'h1>span';
const howDidYouHearAboutTelnyxField = '#How_did_you_hear_about_Telnyx_Open__c';
const errorMesageText = '#ValidMsgReason_for_Contact__c';
const reportAbuseLinkButton = '[href="https://telnyx.com/report-abuse"]>span:first';
    
    
class ContactUsPage{

    async enterEmailFieldValue(Email) {
        await page.setValue(emailField,Email)
    }
    async GetErrormassage() {
        return await page.isElementDisplayed(errorMesageText)
    }
    async enterFirstNameFieldValue(Name) {
        await page.setValue(firstNameField,Name)
    }
    async enterLastNameFieldValue(Name) {
        await page.setValue(lastNameField,Name)
    }
    async selectSupportOptionInReasonForContactDropdown() {
        await (await page.getElement(reasonForContactDropdown)).selectByAttribute("value", 'Support');
    }
    async selectCanadaOptionInCountryDropdown() {
        await (await page.getElement(countryDropdown)).selectByIndex(2)
    }
    async enterPhoneNumberFieldValue(Number) {
        await page.setValue(phoneNumberField,Number)
    }
    async enterCompanyWebsiteFieldValue(Website) {
        await page.setValue(companyWebsiteField,Website)
    }
    async clickSubmitButton() {
        await page.click(submitButton)
    }
    async enterHowDidYouHearAboutTelnyxFieldValue(Text) {
        await page.setValue(howDidYouHearAboutTelnyxField,Text)
    }
    async enterDescribeYourRequestFieldValue(Text) {
        await page.setValue(describeYourRequestField,Text)
    }
    async getSumbitMassage() {
        return await page.isElementDisplayed(submitMessageText)
    }
    
}


module.exports = new ContactUsPage()