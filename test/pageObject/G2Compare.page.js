const page = require('../pageObject/page')
const talkToAnExpertButton = '//*[@id="u6TBzyhV2QhNrWeatH7IL"]/span[1]'
class G2ComparePage {
    async clickTalkToAnExpertButton() {
        await page.click(talkToAnExpertButton)
    }
}
module.exports = new G2ComparePage()