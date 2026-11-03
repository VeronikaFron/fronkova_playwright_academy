
import { Locator, Page } from "@playwright/test";

export class EshopPage {
  private readonly page: Page;
  private readonly url = "https://tredgate.com/eshop/";
  private readonly myAccountButton: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountButton = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]',
    );
  }

  async open() {
    await this.page.goto(this.url);
  }

  async clickMyAccount() {
    await this.myAccountButton.click();
  }

  async clickRegister() {
    await this.registerButton.click();
  }
}
