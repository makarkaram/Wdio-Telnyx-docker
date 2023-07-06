const page = require('./page');
const seePlan = '//*[@id="4Aleqhv3ifOe5enB5M89yI"]/span/span';
const payAsYouGoDropdown = '#country-filter';
const canadaOption = 'a[href="/pricing/numbers/ca"]';
const ukraineOption = 'a[href="/pricing/numbers/ua"]';
const globalNumbersButton = '//*[@id="7HFCBVJEYRuZjYq4mxeWXh"]/span/span'
const pricingDropdown = "//header/div/div/div/nav/button/div/span/span[text()[contains(.,'Pricing')]]";
const usingAnExistingNumberText = '//*[@id="Number-pricing"]/tbody/tr[5]/th'


class NumbersPricing {
   
    async scrollDownPayAsYouGoDropdown() {
        await page.scrollIntoView(seePlan)
        await page.click(seePlan)
    }
    async clickGlobalNumbersButton() {
        await page.click(globalNumbersButton)
    }
    async clickPricingDropdown() {
       await page.click(pricingDropdown)
    }
    async selectCanadaOptionInPayAsYouGoDropdown() {
        await page.click(payAsYouGoDropdown)
        await page.click(canadaOption)
    }
    async checkUsingAnExistingNumberTextVisibility() {
        await page.scrollIntoView(usingAnExistingNumberText)
        return await page.isElementDisplayed(usingAnExistingNumberText)
    }
    async selectUkraineOptionInPayAsYouGoDropdown() {
        await page.scrollIntoView(payAsYouGoDropdown)
        await page.click(payAsYouGoDropdown)
        await page.click(ukraineOption)
    }
   
}
module.exports = new NumbersPricing();