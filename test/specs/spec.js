const page = require("../pageObject/page")
const assert = require("assert")
const GlobalNumbersPage = require("../pageObject/GlobalNumbers.page")
const ContactUsPage = require("../pageObject/ContactUs.page")
const TextGenerator = require("../helper/TextGenerator")
const PartnershipsPage = require('../pageObject/Partnerships.Page')
const SignUpPage = require('../pageObject/singUp.page')
const mainPage = require('../pageObject/Main.page')
const NumbersPricingPage = require('../pageObject/numberPrising.page')
const PrisingPage = require('../pageObject/Prising.page')
const SolutionsPage = require('../pageObject/Solutions.page')
const SMSAPIPage = require('../pageObject/SMSAPI.page')
const MissionControlPage = require('../pageObject/MissionControl.page')
const G2ComparePage = require('../pageObject/G2Compare.page')
const IoTSimPage = require('../pageObject/IoTSim.page')
const storagePage = require("../pageObject/storage.page")
const allPrisingPage = require("../pageObject/allPricing.page")
const MsTeamsPage = require("../pageObject/MsTeams.page")


let BASE_URL = 'https://telnyx.com/'
let Name
let Email
let Number
let Website
let Text
let Password

before(async () => {
    await browser.setWindowSize(1920, 1080)
    Name = TextGenerator.randomName()
    Email = TextGenerator.randomEmail()
    Number = TextGenerator.randomNumber()
    Website = TextGenerator.randomWebsite()
    Text = TextGenerator.randomLongText()
    Password = TextGenerator.randomPassword()
    await browser.url(BASE_URL)
    await page.acceptCookie();

});

describe('telnyx test.', () => {
    it('Verify that "Thank you." message appears after submitting Contact Us valid in GN page ', async () => {
        await GlobalNumbersPage.clickProductsDropdown()
        await GlobalNumbersPage.clickGlobalNumbersButton()
        await GlobalNumbersPage.clickAskOurExpertsButton()
        await ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        await ContactUsPage.enterFirstNameFieldValue(Name)
        await ContactUsPage.enterLastNameFieldValue(Name)
        await ContactUsPage.enterEmailFieldValue(Email)
        await ContactUsPage.selectCanadaOptionInCountryDropdown()
        await ContactUsPage.enterPhoneNumberFieldValue(Number)
        await ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        await ContactUsPage.enterDescribeYourRequestFieldValue(Text)
        await ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        await ContactUsPage.clickSubmitButton()
        assert.ok(await ContactUsPage.getSumbitMassage)
    })
    it('Contact Us invalid ', async () => {
        await GlobalNumbersPage.clickProductsDropdown()
        await GlobalNumbersPage.clickGlobalNumbersButton()
        await GlobalNumbersPage.clickAskOurExpertsButton()
        await ContactUsPage.clickSubmitButton()
        assert.ok(await ContactUsPage.GetErrormassage)
    })
    it('Verify that "Thank you." message appears after submitting "Become a Telnyx Partner"', async () => {
        await PartnershipsPage.clickWhyTelnyxButton()
        await PartnershipsPage.clickPartnersButton()
        await PartnershipsPage.clickBecomeAPartnerButton()
        await PartnershipsPage.enterFirstNameFieldValue(Name)
        await PartnershipsPage.enterLastNameFieldValue(Name)
        await PartnershipsPage.enterCompanyFieldValue(Name)
        await PartnershipsPage.enterEmailFieldValue(Email)
        await PartnershipsPage.selectCanadaOptionInCountryDropdown()
        await PartnershipsPage.enterPhoneNumberFieldValue(Number)
        await PartnershipsPage.selectResellerOptionInPartnerTypeDropdown()
        await PartnershipsPage.enterTellUsFieldValue(Text)
        await PartnershipsPage.clickApplyNowButton()
        assert.ok(await PartnershipsPage.getSubmitMessageText)
    })
    it('Verify that "This field is required." message appears after clicking "Submit" button with empty fields', async () => {
        await PartnershipsPage.clickWhyTelnyxButton()
        await PartnershipsPage.clickPartnersButton()
        await PartnershipsPage.clickBecomeAPartnerButton()
        await PartnershipsPage.clickApplyNowButton()
        assert.ok(await PartnershipsPage.isErrorMessageDisplayed)
    })
    it('Should sign up with invalid data from header', async () => {
        await mainPage.clickSignUpHeaderBtn();
        await SignUpPage.enterEmail(Email);
        await SignUpPage.enterPassword(Password);
        await SignUpPage.clickCreateAccountBnt();
        assert.ok(await SignUpPage.isFirstNameErrorDisolayed());
        assert.ok(await SignUpPage.isLastNameErrorDisolayed());
    })
    it('Should sign up with valid data from header', async () => {
        await mainPage.clickSignUpHeaderBtn();
        await SignUpPage.enterEmail(Email);
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPassword(Password);
        await SignUpPage.clickAgreeCheckBox();
        await SignUpPage.clickCreateAccountBnt();
        assert.ok(await SignUpPage.isMessageDisplayed());
    })
    it('Should sign up with valid data from banner', async () => {
        await mainPage.clickCreateFreeAccount();
        await SignUpPage.enterEmail(Email);
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPassword(Password);
        await SignUpPage.clickAgreeCheckBox();
        await SignUpPage.clickCreateAccountBnt();
        assert.ok(await SignUpPage.isMessageDisplayed());
    })
    it('Should sign up with valid data from footer banner', async () => {
        await mainPage.clickSingUpBottom();
        await SignUpPage.enterEmail(Email);
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPassword(Password);
        await SignUpPage.clickAgreeCheckBox();
        await SignUpPage.clickCreateAccountBnt();
        assert.ok(await SignUpPage.isMessageDisplayed());
    })
    it('Verify that "The last one step" message appears after submitting Sign up ', async () => {
        await GlobalNumbersPage.clickProductsDropdown()
        await GlobalNumbersPage.clickGlobalNumbersButton()
        await GlobalNumbersPage.clickSearchNumbersButton()
        await SignUpPage.enterEmail(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPassword(Password)
        await SignUpPage.clickAgreeCheckBox();
        await SignUpPage.clickCreateAccountBnt()
        assert.ok(await SignUpPage.isMessageDisplayed());
    })
    it('Verify "Number pricing" text changes when switching "Pay as you go" dropdown on "Numbers pricing" page', async () => {
        await NumbersPricingPage.clickPricingDropdown()
        await NumbersPricingPage.clickGlobalNumbersButton()
        await NumbersPricingPage.scrollDownPayAsYouGoDropdown()
        await NumbersPricingPage.selectCanadaOptionInPayAsYouGoDropdown()
        assert.ok(await NumbersPricingPage.checkUsingAnExistingNumberTextVisibility())
    })
    it('Verify that after clicking on the "See pricing" button from the Global Numbers page the "Pay as you go" and "Volume-based pricing" windows appears', async () => {
        await GlobalNumbersPage.clickProductsDropdown()
        await GlobalNumbersPage.clickGlobalNumbersButton()
        await GlobalNumbersPage.scrollToSeePricingButton()
        await GlobalNumbersPage.clickSeePricingButton()
        await PrisingPage.checkPayAsYouGoWindowVisibility()
        assert.ok(await PrisingPage.checkVolumeBasedPrisingVisibility())
    })
    it('Verify "See industries" button scroll to "Healthcare" button and "See use cases"', async () => {
        await SolutionsPage.clickSolutionsButton()
        await SolutionsPage.clickSeeIndustriesButton()
        assert.ok(await SolutionsPage.checkHealthcareButtonVisibility())
        await SolutionsPage.clickSeeUseCasesButton()
        assert.ok(await SolutionsPage.checkAccountNotificationWindowVisibility())
    })
    it('Verify that "The last one step" message appears in sms api page"', async () => {
        await SMSAPIPage.clickProductsDropdown()
        await SMSAPIPage.clickSmsApiButton()
        await SMSAPIPage.clickPortalButton()
        await SignUpPage.enterEmail(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPassword(Password)
        await SignUpPage.clickAgreeCheckBox();
        await SignUpPage.clickCreateAccountBnt();
        assert.ok(await SignUpPage.isMessageDisplayed())
    })
    it('Verify that "Mission Control Portal" topic text visibility and "industry-leading platform" link-button visibility on "Mission Control" page"', async () => {
        await MissionControlPage.clickWhyTelnyxButton()
        await MissionControlPage.clickMissionControlButton()
        assert.ok(await MissionControlPage.checkTopicTextMaching())
        await MissionControlPage.scrollToIndustryLeadingLincButton()
        assert.ok(await MissionControlPage.checkIndustryLeadingLincButtonClickability())
    })
    it('Should sing up on Mission Control Page', async () => {
        await MissionControlPage.clickWhyTelnyxButton()
        await MissionControlPage.clickMissionControlButton()
        await MissionControlPage.ClickSingUp()
        await SignUpPage.enterEmail(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPassword(Password)
        await SignUpPage.clickAgreeCheckBox();
        await SignUpPage.clickCreateAccountBnt();
        assert.ok(await SignUpPage.isMessageDisplayed())
    })
    it('Verify that "Thank you." message appears after submitting Contact Us form with valid credentials', async () => {
        await MissionControlPage.clickWhyTelnyxButton()
        await MissionControlPage.clickMissionControlButton()
        await MissionControlPage.scrollToIndustryLeadingLincButton()
        await MissionControlPage.clickIndustryLeadingLincButton()
        await G2ComparePage.clickTalkToAnExpertButton()
        await ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        await ContactUsPage.enterFirstNameFieldValue(Name)
        await ContactUsPage.enterLastNameFieldValue(Name)
        await ContactUsPage.enterEmailFieldValue(Email)
        await ContactUsPage.selectCanadaOptionInCountryDropdown()
        await ContactUsPage.enterPhoneNumberFieldValue(Number)
        await ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        await ContactUsPage.enterDescribeYourRequestFieldValue(Text)
        await ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        await ContactUsPage.clickSubmitButton()
        assert.ok(await ContactUsPage.getSumbitMassage)
    })
    it('Should check how it works section', async () => {
        await IoTSimPage.ClickProductionDropdown()
        await IoTSimPage.ClickIotSimBtn()
        await IoTSimPage.CheckHowItWorksSection()
    })
    it('Should check how it works section', async () => {
        await NumbersPricingPage.clickPricingDropdown()
        await storagePage.ClickStorageBtn()
        await storagePage.CheckHowItWorksSection('$')
        await storagePage.SelectCurrency()
        await storagePage.CheckHowItWorksSection('€')
    })
    it('should check that See all pricing commynity links', async () => {
        await NumbersPricingPage.clickPricingDropdown()
        await allPrisingPage.clickAllPricingBtns()
        await allPrisingPage.checkLinks()
    })
    it('should sumbit form on MsTeams page', async () => {
        await GlobalNumbersPage.clickProductsDropdown()
        await MsTeamsPage.clickMsTeamsBtn()
        await ContactUsPage.enterFirstNameFieldValue(Name)
        await ContactUsPage.enterLastNameFieldValue(Name)
        await ContactUsPage.enterEmailFieldValue(Email)
        await ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        await MsTeamsPage.selectOperators()
        await MsTeamsPage.ClicksubmitButton()
        assert.ok(await ContactUsPage.getSumbitMassage)
    })


})

