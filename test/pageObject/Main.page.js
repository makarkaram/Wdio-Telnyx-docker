const signUpHeaderBtn = '//*[@id="header-sign-up"]/span[1]';
const CreateFreeAccount = '[id=header-sign-up]';
const singUpBottom = '//*[@id="__next"]/div/main/section[3]/div/form/button/span[1]';

class MainPage {
    async clickSignUpHeaderBtn() {
        await page.click(signUpHeaderBtn, false);
    }
    async clickCreateFreeAccount() {
        await page.click(CreateFreeAccount);
    }
    async clickSingUpBottom() {
        await page.click(singUpBottom);
    }
}
module.exports = new MainPage();