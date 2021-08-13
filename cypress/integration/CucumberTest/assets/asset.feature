Feature: Create Asset

  Scenario: create a asset with required fields
    Given I login to salesforce site as an admin user
    And I navigate to "asset" page
    When I create a new Asset with fields
      | name    | New Asset |
      | account | cuenta 14 |
    Then I validate all fields

  Scenario: create an asset with all fields
    Given I login to salesforce site as an admin user
    And I navigate to "asset" page
    When I create a new Asset with fields
      | name           | New Asset     |
      | serial number  | Serial Number |
      | install date   | 28/7/2021     |
      | purchase date  | 15/8/2021     |
      | usage end date | 30/9/2021     |
      | quantity       | 10,00         |
      | price          | 100           |
      | description    | Description   |
      | status         | Shipped       |
      | competitor     | true          |
      | account        | cuenta 14     |
      | product        | producto 12   |
      | contact        | contact123    |
    
    Then I validate all fields
