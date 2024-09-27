describe("Pen Card", () => {
  it("Visit site", () => {
    cy.visit("http://localhost:3000/");
  });
});
describe("Pen Card Component Functionality", () => {
  beforeEach(() => {
    // Navigate to the product page and ensure the PenCard component is displayed
    cy.visit("http://localhost:3000/");
    cy.get("#pen-card").should("be.visible");
  });

  it("should allow selecting a pen color", () => {
    // Click on the color button for "gold"
    cy.get(".color-button.gold").click();

    // Verify the color choice changed to "gold"
    cy.get(".color-choice").should("have.class", "gold");
  });

  it("should increment the pen quantity", () => {
    // Initial quantity should be 0
    cy.get(".counter").should("have.value", "0");

    // Click the increment button
    cy.get('.counter-icon[alt="Plus"]').click();

    // Verify the quantity is incremented to 1
    cy.get(".counter").should("have.value", "1");
  });

  it("should not decrement the pen quantity below 0", () => {
    // Click the decrement button when the quantity is 0
    cy.get('.counter-icon[alt="Minus"]').click();

    // Verify the quantity remains 0
    cy.get(".counter").should("have.value", "0");
  });

  it("should allow manually entering pen quantity", () => {
    // Manually enter a pen quantity of 5
    cy.get(".counter").clear().type("5");

    // Verify the quantity changes to 5
    cy.get(".counter").should("have.value", "5");

    // Verify that the checkout button is enabled
    cy.get(".checkout-button").should("have.css", "opacity", "1");
  });

  it("should allow decrementing manually entered pen quantity", () => {
    // Manually enter a pen quantity of 5
    cy.get(".counter").clear().type("5");

    // Click the decrement button
    cy.get('.counter-icon[alt="Minus"]').click();

    // Verify the quantity changes to 4
    cy.get(".counter").should("have.value", "4");
  });

  it("should cap manually entered pen quantity at 10", () => {
    // Manually enter a pen quantity of 15
    cy.get(".counter").clear().type("15");

    // Verify the quantity is capped at 10
    cy.get(".counter").should("have.value", "10");
  });

  it("should not allow invalid input for pen quantity", () => {
    // Manually enter an invalid pen quantity
    cy.get(".counter").clear().type("asd");

    // Verify the quantity remains 0
    cy.get(".counter").should("have.value", "0");
  });

  it("should disable the checkout button when quantity is 0", () => {
    // Verify that the checkout button is disabled when quantity is 0
    cy.get(".checkout-button").should("have.css", "opacity", "0.5");
  });

  it("should proceed to checkout with a valid pen quantity", () => {
    // Manually set pen quantity to 3 and select color "silver"
    cy.get(".counter").clear().type("3");
    cy.get(".color-button.silver").click();

    // Click the checkout button
    cy.get(".checkout-button").click();

    // Verify that the confirmation modal appears
    cy.get("#confirmation-modal").should("be.visible");

    // Verify the modal message
    cy.get("#confirmation-modal").contains(
      "Are you sure you want to checkout 3 silver colored pens?"
    );
  });

  it("should reset quantity and color choice after confirming checkout", () => {
    // Set the pen quantity and color before proceeding
    cy.get(".counter").clear().type("3");
    cy.get(".color-button.silver").click();
    cy.get(".checkout-button").click();

    // Confirm the checkout in the modal
    cy.get("#confirmation-modal").contains("Confirm").click();

    // Verify the pen quantity resets to 0
    cy.get(".counter").should("have.value", "0");

    // Verify the color choice resets to default
    cy.get(".color-choice").should("have.class", "gold");
  });
});
