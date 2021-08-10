Feature: Create Contact

  Scenario: create a contact with required fields
    Given I login to salesforce site as an admin user
    And I navigate to "contact" page
    When I create a new Contact with fields
      | salutation        | Dr.               |
      | firstName         | Contact           |
      | lastName          | lastname          |
      | title             | Title`            |
      | department        | Tarija            |
    Then I validate all fields
    And I delete "Contact"
    And I navigate to "contact" page