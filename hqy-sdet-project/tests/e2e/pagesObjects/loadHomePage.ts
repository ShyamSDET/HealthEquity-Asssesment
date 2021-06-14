import { contains } from "cypress/types/jquery"

export class HomePageObjects {

    static arrayOfButtons = ["New Component", "Angular Material", "Add PWA Support", "Add Dependency", "Run and Watch Tests", "Build for Production"];
    static arrayMessage = ["ng generate component xyz", "ng add @angular/material", "ng add @angular/pwa", "ng add _____", "ng test", "ng build --prod"];

    static loadHomePage() {
        cy.visit("http://localhost:4200")
        cy.title().should('eq', 'HqySdetProject')
    }

    //methos checks each button text.
    static checkEachButtonName() {
        // cy.get('.card-container').should('contain.text', '')
        let arrayOfActualButtonsText: string[] = [];
        cy.get('.card-container').children('.card-small')
            .should(($els) => {
                // map jquery elements to array of their innerText
                const elsText = $els.toArray().map(el => el.innerText.trim());
                assert.deepEqual(HomePageObjects.arrayOfButtons, elsText, 'actual Button Text ['+ elsText + '] Should equal to expected Text [' + HomePageObjects.arrayOfButtons + ']');
                //expect(elsText).to.deep.eq(HomePageObjects.arrayOfButtons)
            })       

    }
    static checkEachButtonPlusIcon() {
        // cy.get('.card-container').should('contain.text', '')
        let arrayOfActualButtonsText: string[] = [];
        cy.get('.card-container').find('path').should('have.length', 6).should('be.visible')           

    }

    static verifyTerminalMessage(message: string) {
        cy.get('.terminal').children('pre').should('have.text', message);
        // assert.equal(message, element[0].innerText.trim(), 'message is');
    }
//Methods clicks each button (sequential or random) and verifies terminal message on UI
    static clickOnEachButtonAndValidateMessage(random?: boolean) {
        cy.get('.card-container > .card-small')
            .each(function ($el, index, $listOfElements) {
                if (random && index === $listOfElements.length - 1) {
                    for (let i = 0; i < $listOfElements.length - 1; i++) {
                        const randomValue = Math.floor(Math.random() * 6) + 1;
                        HomePageObjects.clickOnButton($listOfElements[randomValue - 1].children, randomValue - 1, random);
                    }
                }
                if (!random) {
                    HomePageObjects.clickOnButton($el.children('span'), index);
                }

            })

    }
//clicks on random button on the UI
    static clickOnButton(ele: any, index: number, random?: boolean) {
        let componentButton: string;
        if (random)
            componentButton = ele[1].innerText.trim();
        else
            componentButton = ele[0].innerText.trim();

        switch (componentButton) {
            case this.arrayOfButtons[index].trim():
                if (random) {
                    cy.wrap(ele[1]).click();
                } else {
                    cy.wrap(ele).click();
                }
                this.verifyTerminalMessage(this.arrayMessage[index])
                break;
            default:
                throw Error('Terminal Message not found')

        }
    }
}