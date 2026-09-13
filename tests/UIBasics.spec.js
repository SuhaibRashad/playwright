const {test} = require("@playwright/test")

    test(
        "test_case", //test case name
        async () => {} // callback Fn
    )

    /*
    
Why Playwright Uses Async Test Callbacks
Playwright relies on async functions for test callbacks because browser automation fundamentally operates on asynchronous Promise-based operations.

Auto-Waiting vs. Execution Flow: Although Playwright automatically waits for elements to be ready during individual actions (such as checking visibility prior to a click), the overall test flow still depends on await to manage the execution order.
Test Runner Lifecycle: The Playwright test runner (@playwright/test) relies on the returned Promise from the callback to know when execution has finished.
Error Management: Declaring functions as async guarantees that failed assertions and asynchronous errors are properly caught and reported instead of producing unhandled promise rejections.

    */