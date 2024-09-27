import PenCardPage from "../support/pom/pen-shop-page";

describe("Pen Card Component Functionality", () => {
  const penCardPage = new PenCardPage();

  beforeEach(() => {
    penCardPage.visit();
    penCardPage.getPenCard().should("be.visible");
  });

  it("should allow selecting a pen color", () => {
    penCardPage.getColorButton("gold").click();
    penCardPage.getColorChoice().should("have.class", "gold");
  });

  it("should increment the pen quantity", () => {
    penCardPage.getCounter().should("have.value", "0");
    penCardPage.incrementCounter();
    penCardPage.getCounter().should("have.value", "1");
  });

  it("should not decrement the pen quantity below 0", () => {
    penCardPage.decrementCounter();
    penCardPage.getCounter().should("have.value", "0");
  });

  it("should allow manually entering pen quantity", () => {
    penCardPage.enterCounterValue("5");
    penCardPage.getCounter().should("have.value", "5");
    penCardPage.getCheckoutButton().should("have.css", "opacity", "1");
  });

  it("should allow decrementing manually entered pen quantity", () => {
    penCardPage.enterCounterValue("5");
    penCardPage.decrementCounter();
    penCardPage.getCounter().should("have.value", "4");
  });

  it("should cap manually entered pen quantity at 10", () => {
    penCardPage.enterCounterValue("15");
    penCardPage.getCounter().should("have.value", "10");
  });

  it("should not allow invalid input for pen quantity", () => {
    penCardPage.enterCounterValue("asd");
    penCardPage.getCounter().should("have.value", "0");
  });

  it("should disable the checkout button when quantity is 0", () => {
    penCardPage.getCheckoutButton().should("have.css", "opacity", "0.5");
  });

  it("should proceed to checkout with a valid pen quantity", () => {
    penCardPage.enterCounterValue("3");
    penCardPage.getColorButton("silver").click();
    penCardPage.clickCheckoutButton();
    penCardPage.getConfirmationModal().should("be.visible");
    penCardPage
      .getModalMessage()
      .contains("Are you sure you want to checkout 3 silver colored pens?");
  });

  it("should reset quantity and color choice after confirming checkout", () => {
    penCardPage.enterCounterValue("3");
    penCardPage.getColorButton("silver").click();
    penCardPage.clickCheckoutButton();
    penCardPage.confirmModal();
    penCardPage.getCounter().should("have.value", "0");
    penCardPage.getColorChoice().should("have.class", "gold");
  });
});
