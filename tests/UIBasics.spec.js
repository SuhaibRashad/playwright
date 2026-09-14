const {test, expect} = require("@playwright/test")

    test(
        "Browser Context playwright test",
        async ({browser}) => {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

            // css selector
            await page.locator("#username").fill("rahulshetty"); // id selector
            await page.locator("[type='password']").fill("learning"); // attribute selector
            await page.locator("#signInBtn").click()

            // auto wait feature by playwirght for dynamic element appearence
            console.log(await page.locator("[style*='block']").textContent());
            // assertions to validate the extracted text
            await expect(page.locator("[style*='block']")).toContainText('InCorrect');

        }
    )

        // test.only("Page (default ) playwright test", async ({ page }) => {

        //   page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        // });