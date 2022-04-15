Feature: User Creation

  Background:
    Given I go to "https://viktor-silakov.github.io/course-sut/"
    And I login as: "walker@jw.com", "password"

  Scenario: Create user
    When I go to "Create User" menu item
    When I fill the form:
      """
      email: 'test@test.com'
      password: 'U&cmpYsxK9'
      Address: 'Rustaveli 20-21'
      Address2: 'flor 4'
      City: 'Tbilisi'
      Zip: 222567
      Description: 'test user'
      """
    Then I check created user in "List of users"
