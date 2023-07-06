const page = require("./page")
const communicationsLink = 'div[id]>div>div>div>a'
const allPricingBtm = 'div>div>[href="/pricing"]'

class allPrising{
    async checkLinks(){
        for (let index = 1; index < 12; index++) {
            expect (page.isElementClickable(page.getElementByIndex(communicationsLink, index))).toBeTruthy()
        }
    }
    async clickAllPricingBtns () {
        await page.click(allPricingBtm)
}
}
module.exports = new allPrising()