const page = require("./page")
const CurrencyFilter = "#currency-filter"
const StorageBtn = 'div>div>[href="/pricing/storage"]'
const EURSelect = "//*[text()[contains(.,'EUR')]]"
class storagePage {
    async ClickStorageBtn() {
        await page.click(StorageBtn)
    }  
    async CheckHowItWorksSection(text) {
        for (let i = 1; i < 4; i++) {
         if (i!==2) {await expect(page.getElement(`//tbody/tr[${i}]/td/span`)).toHaveTextContaining(text)}
     }
    }
    async SelectCurrency() {
        await page.click(CurrencyFilter)
        await page.click(EURSelect)
        
    }
}
module.exports = new storagePage()