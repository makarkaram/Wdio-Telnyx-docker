
const page = require('./page');

    const searchNumbersButton = '[title="[Talk to sales] Global Numbers - Button"]'
    const askOurExpertsButton = 'p>[href="/contact-us"]>span'
    const seePricingButton = '[href="https://telnyx.com/pricing/"]';
    const globalNumbersButton = 'div>div>[href="/products/phone-numbers"]'
    const productsDropdown = 'header>div>div>div>nav>button:nth-child(1)>div>span'
   

class GlobalNumbersPage{

    async clickSearchNumbersButton() {
        await page.click(searchNumbersButton)
    }
    async clickAskOurExpertsButton() {
        await page.click(askOurExpertsButton)
    }
    async scrollToSeePricingButton() {
        await page.scrollIntoView(seePricingButton)
    }
    async clickSeePricingButton() {
        await page.click(seePricingButton)
    }
    async clickProductsDropdown() {
        await page.click(productsDropdown);
    }
    async clickGlobalNumbersButton() {
        await page.click(globalNumbersButton);
    }
   
}
module.exports = new GlobalNumbersPage()
