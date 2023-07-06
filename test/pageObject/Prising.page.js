const page = require('./page');
const payAsYouGoWindow = '//*[@id="7ym2mQyts3WNs47fPUkIkB"]/div/div[1]/strong[1]'
const volumeBasedPrising = '//*[@id="7ym2mQyts3WNs47fPUkIkB"]/div/div[2]/strong[1]'

class PricingPage {
    async checkPayAsYouGoWindowVisibility() {
        return await page.isElementDisplayed(payAsYouGoWindow)
    }
    async checkVolumeBasedPrisingVisibility() {
        return await page.isElementDisplayed(volumeBasedPrising)
    }
    
}
module.exports = new PricingPage()