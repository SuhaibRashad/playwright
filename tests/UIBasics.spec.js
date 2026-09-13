const {test} = require("@playwright/test")

    test(
        "Browser Context playwright test",
        async ({browser}) => {
            const context = await browser.newContext();
            const page = await context.newPage();
            page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        }
    )

        test("Page (default ) playwright test", async ({ page }) => {
          page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        });