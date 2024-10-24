import { test, expect } from "@playwright/test";
import { onLoginPage } from "../../pageObjects/loginPage";
const fs = require("fs");

test.beforeEach(async ({ page }) => {
  onLoginPage.navigateToBasePage(page);
  await page.getByRole("button", { name: "Allow all" }).click();
});

test("assertPageTitle", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Tech Solutions to scale" })
  ).toBeVisible();
});

test("assertSeniorQATeam", async ({ page }) => {
  await page.getByRole("link", { name: "Career", exact: true }).click();
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Open positions" })
    .click();
  await page.getByRole("button", { name: "QA" }).click();
  await expect(
    page.getByRole("heading", { name: "Senior QA Developer/QA Team" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "Senior QA Developer/QA Team LeadTeam: EtonDigitalSerbiaApply"
    )
  ).toHaveText(/LeadTeam: EtonDigitalSerbia/);
});

test("getAllJobsInSerbia", async ({ page }) => {
  await page.getByRole("link", { name: "Career", exact: true }).click();
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Open positions" })
    .click();
  await page.getByRole("button", { name: "Serbia" }).click();
  await page.getByText("Show More").click();
  await page.getByText("Show More").waitFor("hidden");

  await page.waitForTimeout(3000);
  const headings = await page.$$eval(
    "h3.c-txt--h3.c-careercard__†itle",
    (elements) => elements.map((el) => el.innerText.trim())
  );
  fs.writeFileSync("headings.txt", headings.join("\n"), "utf-8");
  console.log(
    `Extracted ${headings.length} headings and saved to headings.txt`
  );
});

