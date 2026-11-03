
import { Locator, Page } from "@playwright/test";

export class RegisterPage {
  private readonly page: Page;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly telephoneInput: Locator;
  private readonly passwordInput: Locator;
  private readonly passwordConfirmInput: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillTelephone(telephone: string) {
    await this.telephoneInput.fill(telephone);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillPasswordConfirm(password: string) {
    await this.passwordConfirmInput.fill(password);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
