
![pen-shop-cypres](https://github.com/user-attachments/assets/a451a571-78e8-4a86-9b4d-c2f931e15715)

# Cypress Demo - Pen Shop
This project contains automated Cypress tests for a Pen Shop component/page, which allows users to select a pen color, adjust the quantity, and proceed to checkout. The tests cover various scenarios such as incrementing and decrementing the pen quantity, validating user inputs, and verifying the checkout process.

## Key Features

- **Pen Quantity Management**: Tests for incrementing, decrementing, and manually entering pen quantities with validation for limits (0-10).
- **Color Selection**: Tests the ability to choose from multiple pen colors.
- **Checkout Process**: Ensures the checkout button is enabled or disabled based on the quantity and verifies the confirmation modal functionality.
- **Validation**: Handles invalid input scenarios and ensures proper user feedback.

## Structure

- **Gherkin Test**: A brief gherkin test. It is located in `cypress/support/gherkin/`.
- **Page Object Model (POM)**: One test is organized using the POM structure for maintainability example. The page object is located in `cypress/support/pom/`.
- **Scenarios**: Test scenarios are based on Gherkin-style features, ensuring comprehensive coverage of user interactions with the Pen Card component.

## Tests

The tests focus on:

- Pen color selection.
- Incrementing/decrementing pen quantities.
- Manual input validation for pen quantities.
- Checkout button behavior and modal confirmation process.

This project ensures a fully tested and user-friendly Pen Card experience.
