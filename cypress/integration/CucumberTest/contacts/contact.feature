Feature: Create Contact

  Scenario: create a contact with required fields
    Given I login to salesforce site as an admin user
    And I navigate to "contact" page
    When I create a new Contact with fields
      | lastName | lastname |
    Then I validate all fields
    And I delete "Contact"
    And I navigate to "contact" page

  Scenario: create a contact with all fields
    Given I login to salesforce site as an admin user
    And I navigate to "contact" page
    When I create a new Contact with fields
      | salutation        | Dr.               |
      | firstName         | Contact           |
      | lastName          | lastname          |
      | title             | Title`            |
      | department        | Tarija            |
      | birthdate         | 19/7/2021         |
      | phone             | 1789654           |
      | homePhone         | 1789654           |
      | mobile            | 1789654           |
      | otherPhone        | 1789654           |
      | fax               | 1789654           |
      | email             | example@gmail.com |
      | assistantName     | AssistantName     |
      | assistantPhone    | 1789654           |
      | mailingStreet     | Ballivian         |
      | mailingPostalCode | Ballivian         |
      | mailingCity       | Tarija            |
      | mailingState      | Cercado           |
      | mailingCountry    | Bolivia           |
      | otherStreet       | Ballivian         |
      | otherPostalCode   | Ballivian         |
      | otherCity         | Tarija            |
      | otherState        | Cercado           |
      | otherCountry      | Bolivia           |
      | language          | Spanish           |
      | level             | Primary           |
      | description       | good test         |
    Then I validate all fields
    And I delete "Contact"
    And I navigate to "contact" page