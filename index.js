const {Builder, By, Key, util} = require("selenium-webdriver");
async function loginTest() {

    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://wunderlist.com");

    // click signin button
    await driver.findElement(By.className("wunderlist-login-button")).click();

    // wait for page to load
    driver.wait(async function() {
        const readyState = await driver.executeScript('return document.readyState');
        return readyState === 'complete';
    });

    await driver.findElement(By.name("email")).sendKeys("sample@email.com");
    await driver.findElement(By.name("password")).sendKeys("simplepass");

    driver.findElement(By.css("input[type='submit']")).click();
}
loginTest();

// npx codeceptjs run --steps