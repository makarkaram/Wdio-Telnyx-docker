const page = require("./page")
const ProductionDropdown = "//header/div/div/div/nav/button/div/span/span[text()[contains(.,'Products')]]"
const IotSimBtn = 'div[class]>[href="/products/iot-sim-card"]'
class IoTSim {
    async ClickProductionDropdown() {
        await page.click(ProductionDropdown)
    }
    async ClickIotSimBtn() {
        await page.click(IotSimBtn)
    }
    async clickHowItWorksBtn(index) {
        await page.click(`//*[@aria-label="How It Works"]/button[${index}]`)
    }
    async CheckHowItWorksSection() {
        for (let i = 1; i < 4; i++) {
            this.clickHowItWorksBtn(i)
            await page.isElementDisplayed(`//*[@aria-label="How It Works"]/button[${i}]/p`)
        }
    }













}
module.exports = new IoTSim()
//*[@aria-label="How It Works"]/button/p
////*[@aria-label="How It Works"]/button
//aria-selected="true"