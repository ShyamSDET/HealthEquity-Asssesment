/// <reference types="Cypress" />
import {And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import { HomePageObjects } from "../pagesObjects/loadHomePage";



Given("Launch Web Page and Verify page title", () => {

    HomePageObjects.loadHomePage()

});
When("User on home page Verify each button text", () => {
    HomePageObjects.checkEachButtonName();
});

And("Verify plus Symbol for each button", ()=>{
    HomePageObjects.checkEachButtonPlusIcon();
});

And("verify terminal message on web application", ()=>{
    HomePageObjects.verifyTerminalMessage('ng generate component xyz');
});

Then("Click on each button and verify terminal message for each button", () =>{
    HomePageObjects.clickOnEachButtonAndValidateMessage()
});
Then("Click on random button and verify terminal message", ()=>{
    HomePageObjects.clickOnEachButtonAndValidateMessage(true)
})