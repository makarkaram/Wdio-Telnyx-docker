const page = require('./page');
const seeIndustriesButton = '[href="#industries"]>span';
const seeUseCasesButton = '[href="#use-cases"]>span>span';
const healthcareButton = 'div>div>div>[href="/solutions/healthcare"]';
const accountNotificationWindow = '//*[@id="use-cases"]/div/div[2]/ul/li[1]/div';
const solutionsButton = 'header>div>div>div>nav>[href="/solutions"]'

class SolutionsPage{
    async scrollToSeeIndustriesButton() {
        await page.scrollIntoView(seeIndustriesButton)
    }
    async clickSeeUseCasesButton() {
        
        await page.jsClick(seeUseCasesButton)
    }
    async checkHealthcareButtonVisibility() {
        return await page.isElementDisplayed(healthcareButton)
    }
    async checkAccountNotificationWindowVisibility() {
        return await page.isElementDisplayed(accountNotificationWindow)
    }
    async clickSolutionsButton() {
        await page.click(solutionsButton);
    }
    async clickSeeIndustriesButton() {
      await page.click(seeIndustriesButton)
    }
    

}
module.exports = new SolutionsPage();