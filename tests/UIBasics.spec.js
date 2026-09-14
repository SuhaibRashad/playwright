const {test} = require("@playwright/test")

    test.only(
        "Browser Context playwright test",
        async ({browser}) => {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            await page.locator("#username").fill("rahulshetty"); // id selector
            await page.locator("[type='password']").fill("learning"); // attribute selector
            await page.locator("#signInBtn").click()


        }
    )

        // test.only("Page (default ) playwright test", async ({ page }) => {

        //   page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        // });