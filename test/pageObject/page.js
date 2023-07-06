const cookie_Button = '[aria-describedby="close"]';
class Page {
  
    jsClick(element) {
        browser.execute('arguments[0].click();', this.getElement(element));
    }

    async click(locator){
        await this.waitUntilElementDisplated(locator);
        await $(locator).click();
    }

    async setvalue(locator,text){
        await ((await $(locator)).setValue(text));
    }

    async setValue(element, value, flag = true) {
        if (flag) {
            await this.waitUntilElementDisplated(element);
        }
        await (await this.getElement(element)).setValue(value);
    }

    async isElementDisplayed(element, flag = true) {
        if (flag) {
            await this.waitUntilElementDisplated(element);
        }
        return await (await this.getElement(element)).isDisplayed();
    }

    async urlChecking(text){
        await (await (browser).toHaveUrlContaining(text));
    }

    async scrollIntoView(locator){
        await ((await $(locator)).scrollIntoView());
    }

    async getElementByIndex(element, index) {
        return (await $$(element))[index];
    }

    async isElementClickable(element) {
        return await (await this.getElement(element)).isClickable();
    }

    async hover(locator){
        await ((await $(locator)).moveTo());
    }

    async openByHref(element) {
        await this.openPage(await this.getAttr(element, 'href'));
    }

    async isdisplayedinViewPost(locator){
        await ((await $(locator)).isDisplayedInViewport());
    }

    async acceptCookie(){
        this.waitUntilElementDisplated(cookie_Button)
        if (await ($(cookie_Button).isDisplayedInViewport()) == true){
            await $(cookie_Button).click();
          }
    }
    async getElement(element) {
        return await $(element);
    }
    async type (element, text){
        await (await this.getElement(element)).setValue(text);
      }
      async openPage(url) {
        await browser.url(url);
    }
    async getAttr(element, attribute) {
        return await (await this.getElement(element)).getAttribute(attribute);
    }
    async waitUntilElementDisplated(element) {
        await browser.waitUntil(
            async () => await (await this.getElement(element)).isDisplayed(),
            {
                timeout: 30000,
                timeoutMsg: 'expected element should be displayed after 30s'
            }
        )
    }
}
module.exports = new Page()