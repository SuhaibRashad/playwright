const {test, expect} = require("@playwright/test")

    test(
        "Browser Context playwright test",
        async ({browser}) => {
          // storing locators into variable
          const userNameLocator = page.locator("#username");
          const signInLocator = page.locator("#signInBtn");
          const cardTitles = page.locator(".card-body a");

          const context = await browser.newContext();
          const page = await context.newPage();
          await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

          // css selector
          await userNameLocator.fill("rahulshetty"); // id selector
          await page.locator("[type='password']").fill("learning"); // attribute selector
          await signInLocator.click();

          // auto wait feature by playwirght for dynamic element appearence
          console.log(await page.locator("[style*='block']").textContent());
          // assertions to validate the extracted text
          await expect(page.locator("[style*='block']")).toContainText(
            "InCorrect",
          );

          // to erase exsiting input values
          await userNameLocator.fill("");
          await userNameLocator.fill("rahulshettyacademy");

          //below both methods provide auto wait feature playwirght will wait for the dom to load in page
          await cardTitles.first().textContent();
          await cardTitles.nth(2).textContent();

          // this allContent doesn't offer autowait
          // if any .first() , .nth not present before this code it wont offer auto wait system
          // so it would return [] , or some coz it wont wait for elements to be present in DOM

          await cardTitles.allTextContents(); // returns list of results

          
        }
    )

        // test.only("Page (default ) playwright test", async ({ page }) => {

        //   page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        // });