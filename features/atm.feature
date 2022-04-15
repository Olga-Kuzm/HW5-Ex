Feature: ATM withdraw
  As an Account Holder
  In Order to get money
  I want to withdraw cash from an ATM

   Scenario Outline: ATM sends correct message: "<message>"
    Given my account balance is "<balance>"
    And the ATM contains "<atmMoney>"
    When I withdraw "<withdrawMoney>"
    Then I get "<message>" message
   Examples:
     | atmMoney | withdrawMoney  | message                                   | balance |
     | 600      |  50            | Take your money!                          | 500     |
     | 600      |  550           | You don't have enough money!              | 500     |
     | 150      |  300           | The machine is not have enough money!     | 500     |
     