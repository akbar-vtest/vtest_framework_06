Feature: vtest framework 05

  Scenario Outline: Verify vtest framework 05 has successfully passed
    Given user navigates to url
    When user sign up
    Then log out
    Then user sign in
    And update profile
    Then log out
    And Read excel
    And Write excel
    And compare screenshot
    And send report
