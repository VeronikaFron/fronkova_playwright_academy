import { test } from "@playwright/test";

test("Vyplnění jména a příjmení", async ({ page }) => {
  await page.goto(
    "https://automationteststore.com/index.php?rt=account/create",
  );
  await page.getByLabel("First Name").fill("Veronika");
  await page.getByLabel("Last Name").fill("Fronková");
  await page.getByRole("button", { name: "Continue" }).click();
});
