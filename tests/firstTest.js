const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert")

async function  example() {

    // it will launch the browser
     let driver = await new Builder().forBrowser("firefox").build();

     // navigate to the website
     await driver.get("https://lambdatest.github.io/sample-todo-app/");

     // find the input element, type in it and submit
     await driver.findElement(By.id("sampletodotext"))
     .sendKeys("learn selenium", Key.RETURN);

     // find the last li element and fetch it's value
     let todoText = await driver.findElement(By.xpath("//li[last()]"))
     .getText().then((value) => {
        return value;
     })

     // check whether the input todo is equal to the last li element's text value
     try{
        assert.strictEqual(todoText, "learn selenium");
        console.log("Test Passed")
     }catch(err){
        console.log(err)
     }


}

// call the function
example()