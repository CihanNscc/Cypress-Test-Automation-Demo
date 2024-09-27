class PenShopPage {
  visit() {
    cy.visit("http://localhost:3000/");
  }

  getPenCard() {
    return cy.get("#pen-card");
  }

  getColorButton(color) {
    return cy.get(`.color-button.${color}`);
  }

  getColorChoice() {
    return cy.get(".color-choice");
  }

  getCounter() {
    return cy.get(".counter");
  }

  incrementCounter() {
    cy.get('.counter-icon[alt="Plus"]').click();
  }

  decrementCounter() {
    cy.get('.counter-icon[alt="Minus"]').click();
  }

  enterCounterValue(value) {
    cy.get(".counter").clear().type(value);
  }

  getCheckoutButton() {
    return cy.get(".checkout-button");
  }

  clickCheckoutButton() {
    this.getCheckoutButton().click();
  }

  getConfirmationModal() {
    return cy.get("#confirmation-modal");
  }

  confirmModal() {
    cy.get("#confirmation-modal").contains("Confirm").click();
  }

  getModalMessage() {
    return cy.get("#confirmation-modal");
  }
}

export default PenShopPage;
