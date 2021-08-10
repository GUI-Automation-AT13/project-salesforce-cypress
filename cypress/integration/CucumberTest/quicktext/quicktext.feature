Feature: Create QuickText

  Scenario: create a quickText with required fields
    Given I login to salesforce site as an admin user
    And I navigate to "quicktext" page
    When I create a new QuickText with fields
      | name    | cucumber quick text name |
      | message | message quick  text      |
    Then I validate all fields

  Scenario: create a quickText with all params
    Given I login to salesforce site as an admin user
    And I navigate to "quicktext" page
    When I create a new QuickText with fields
      | name         | cucumber quick text name |
      | message      | message quick  text      |
      | relatedTo    | Account Fields           |
      | fieldOption  | Account Number           |
      | category     | FAQ                      |
      | channel      | Phone                    |
      | finalChannel | Email; Phone             |
    Then I validate all fields

  Scenario Outline: create a quickText with all params
    Given I login to salesforce site as an admin user
    And I navigate to "quicktext" page
    When I create a new QuickText with fields
      | name         | <name>         |
      | message      | <message>      |
      | relatedTo    | <relatedTo>    |
      | fieldOption  | <fieldOption>  |
      | category     | <category>     |
      | channel      | <channel>      |
      | finalChannel | <finalChannel> |
    Then I validate all fields
    Examples:
      | name            | message             | relatedTo      | fieldOption    | category | channel | finalChannel |
      | quick text name | message quick  text | Account Fields | Account Number | FAQ      | Phone   | Email; Phone |
      | quick text name | message quick  text | Case Fields    | Closed         | FAQ      | Event   | Email; Event |
