Feature: Validate Home Page

    Background:
        Given Launch Web Page and Verify page title

    Scenario: Header and page components
        When User on home page Verify each button text
        And Verify plus Symbol for each button
        And verify terminal message on web application      
      
    Scenario: Happy Path-Verify command or message in teminal for each Sequencial button click       
        Then Click on each button and verify terminal message for each button
              
    Scenario: Alternate flow-Verify command or message in teminal for each random button click      
        Then Click on random button and verify terminal message
