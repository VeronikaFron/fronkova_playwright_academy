import type { Locator, Page } from "@playwright/test";

export class AutomationTestStoreRegistrationPage {
  readonly heading: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole("heading", { name: "Create Account" });
    this.firstNameInput = page.locator("#AccountFrm_firstname");
    this.lastNameInput = page.locator("#AccountFrm_lastname");
  }

  async goto(): Promise<void> {
    await this.page.goto(
      "https://automationteststore.com/index.php?rt=account/create",
    );
  }

  async fillName(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }
}
