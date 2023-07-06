const page = require("./page")
const MsTeamsBtn = 'div>div>[href="/products/enterprise-integrations-ms-teams"]'
const OperatorsSelector = '#Form_Operator_Connect_Seats__c' 
const submitButton = '[type="submit"]'
class MsTeams {
    async clickMsTeamsBtn() {
        await page.click(MsTeamsBtn)
    }
    async selectOperators() {
        await (await page.getElement(OperatorsSelector)).selectByAttribute("value", '50-250');
    }
    async ClicksubmitButton() {
        await page.click(submitButton)
    }

}
module.exports = new MsTeams