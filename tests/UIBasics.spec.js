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
    
        test("Page (default ) playwright test", async ({ page }) => {

        await  page.goto("https://rahulshettyacademy.com/client/");
        await page.locator("#userEmail").fill("anshika@gmail.com");
        await page.locator("#userPassword").fill("Iamking@000");
        await page.locator("[value='Login']").click();

        // wait for all network results appeared
        await page.waitForLoadState("networkidle")

        //alternative to above method
        await page.locator(".card-body b").first().waitFor(); 

        const titles = await page.locator(".card-body b").allTextContents();

        console.log(titles)


        });

        test("UI controls", async ({ page }) => {
          // storing locators into variable
          const userNameLocator = page.locator("#username");
          const signInLocator = page.locator("#signInBtn");
          const cardTitles = page.locator(".card-body a");
          const documentLink = page.locator("[href*='documents-request']");
          const dropDown = page.locator("select.form-control");

          await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

          // css selector
          await userNameLocator.fill("rahulshettyacademy"); // id selector
          await page.locator("[type='password']").fill("Learning@830$3mK2"); // attribute selector
          await signInLocator.click();

          dropDown.selectOption("consult");
          await page.locator(".radiotextsty").last().click();
          await page.locator("#okayBtn").click();

          await expect(page.locator(".radiotextsty").last()).toBeChecked();
          await page.locator("#terms").click();
          await expect(page.locator("#terms")).toBeChecked();

          await page.locator("#terms").uncheck();

          // as action present inside expect .isChecked() so we enclosed with await
          expect(await page.locator("#terms").isChecked()).toBeFalsy();

          await expect(documentLink).toHaveAttribute("class", "blinkingText");

          //below both methods provide auto wait feature playwirght will wait for the dom to load in page
          await cardTitles.first().textContent();
          await cardTitles.nth(2).textContent();

          // this allContent doesn't offer autowait
          // if any .first() , .nth not present before this code it wont offer auto wait system
          // so it would return [] , or some coz it wont wait for elements to be present in DOM

          await cardTitles.allTextContents(); // returns list of results
        });


         test("Child Window handle", async ({ page }) => {
          await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
          const documentLink = page.locator("[href*='documents-request']");
         })
        