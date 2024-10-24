const basePage = "https://www.holycode.com/";

export class LoginPage {
  async navigateToBasePage(page) {
    await page.goto(basePage);
  }
}
export const onLoginPage = new LoginPage();
