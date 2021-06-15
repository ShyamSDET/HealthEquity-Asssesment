/// <reference types="Cypress" />
import { HomePageObjects } from "../pagesObjects/loadHomePage";
describe('Validate Home Page', () => {
    it('Header and page components Testcases ', () => {
        //HomePageObjects.loadHomePage();
        // Verifies Text button text on the web page
        HomePageObjects.checkEachButtonName();
        //Verifies plus Icon before each button text
        HomePageObjects.checkEachButtonPlusIcon();
        //Verifies Initial terminal message 
        HomePageObjects.verifyTerminalMessage('ng generate component xyz');
    })
    it('Happy Path-Verify command or message in teminal for each Sequencial button click Testcases ', () => {
        //HomePageObjects.loadHomePage();
        //Click on each button squentially and verifies message in terminal 
        HomePageObjects.clickOnEachButtonAndValidateMessage()
    })
    it('Alternate flow-Verify command or message in teminal for each random button click Testcases ', () => {
        //HomePageObjects.loadHomePage();
       // Clicks on random buttons on page and verifies teminal message 
        HomePageObjects.clickOnEachButtonAndValidateMessage(true)
    })

    before(() => {

       HomePageObjects.loadHomePage();
      
      })
      
     
      
  })