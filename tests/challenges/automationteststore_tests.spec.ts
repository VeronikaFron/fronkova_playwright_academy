import { expect, test } from "@playwright/test";
import { AutomationTestStoreRegistrationPage } from "./pages/AutomationTestStoreRegistrationPage";

test("Vyplní jméno a příjmení při registraci", async ({ page }) => {
  const registrationPage = new AutomationTestStoreRegistrationPage(page);

  await registrationPage.goto();
  await expect(registrationPage.heading).toBeVisible();

  await registrationPage.fillName("Veronika", "Fronková");

  await expect(registrationPage.firstNameInput).toHaveValue("Veronika");
  await expect(registrationPage.lastNameInput).toHaveValue("Fronková");
});
