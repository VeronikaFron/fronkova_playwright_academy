
import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";
import { EshopPage } from "../../src/pages/tredgate-eshop/eshop_page";
import { RegisterPage } from "../../src/pages/tredgate-eshop/register_page";

test("Page Objects: Eshop Registration", async ({ page }) => {
  const eshopPage = new EshopPage(page);
  const registerPage = new RegisterPage(page);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.exampleEmail();
  const telephone = "7" + faker.string.numeric(8);
  const password = faker.internet.password({ length: 20 });

  await eshopPage.open();
  await eshopPage.clickMyAccount();
  await eshopPage.clickRegister();

  await registerPage.fillFirstName(firstName);
  await registerPage.fillLastName(lastName);
  await registerPage.fillEmail(email);
  await registerPage.fillTelephone(telephone);
  await registerPage.fillPassword(password);
  await registerPage.fillPasswordConfirm(password);

  await registerPage.clickContinue();
  await expect(page.getByText("Warning: You must agree to the Privacy Policy!")).toBeVisible();
});
