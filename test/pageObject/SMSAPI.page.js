const portalButton = '//*[@id="1Km13UufIOZIojgMFAN6R9"]/div/div[1]/div[2]/p/a/span/span'
const page = require('../pageObject/page')
const productsDropdown = 'header>div>div>div>nav>button:nth-child(1)>div>span'  
const smsApiButton = '[href="/products/sms-api"]>span'
class SMSAPIPage {
   
    async clickPortalButton() {
        await page.click(portalButton)
    }
    async clickProductsDropdown() {
        await page.click(productsDropdown);
    }
    async clickSmsApiButton() {
        await page.click(smsApiButton);
    }
}
module.exports = new SMSAPIPage();