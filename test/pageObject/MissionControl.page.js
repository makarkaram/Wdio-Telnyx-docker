const page = require('./page')
const topicText = 'div>h1';
const whyTelnyxButton = '//*[@id="radix-:Rm5jm:"]/div/span/span'
const missionControlButton = '[href="/mission-control"]>span';
const industryLeadingLincButton = '[href="https://telnyx.com/landing/g2"]';
const singUp = '[title="MASTER - Sign up"]'
class MissionControl {

    async clickWhyTelnyxButton() {
        await page.click(whyTelnyxButton)
    }
    async scrollToIndustryLeadingLincButton() {
        await page.scrollIntoView(industryLeadingLincButton)
    }
    async clickMissionControlButton() {
        await page.click(missionControlButton);
    }
    async checkIndustryLeadingLincButtonClickability() {
        return await page.isElementDisplayed(industryLeadingLincButton)
    }
    async checkTopicTextMaching() {
        return await page.isElementDisplayed(topicText)
    }
    async clickIndustryLeadingLincButton() {
       await page.click(industryLeadingLincButton)
    }
    async ClickSingUp() {
        await page.scrollIntoView(singUp)
        await page.click(singUp)
    }
}
module.exports = new MissionControl();