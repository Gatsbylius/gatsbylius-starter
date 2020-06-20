const initCheckout = () => {
  cy.visit("/product/car-lights-and-stars");
  cy.contains("Add to cart").click();
  // wait really added
  cy.contains("Successfully added to cart").should("be.visible");
  cy.visit("/cart");

  cy.contains("Go to checkout").click();
};

describe("Checkout", () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("User can go back on the checkout page", () => {
    initCheckout();

    cy.contains("Return to Shop").click();

    cy.location("pathname").should("eq", "/");
  });

  it("User can see success message at then end of the checkout", () => {
    initCheckout();

    cy.get("input[name=firstName]").type("FirstName");
    cy.get("input[name=lastName]").type("LastName");
    cy.get("input[name=address]").type("1 rue du test");
    cy.get("input[name=city]").type("Toulouse");
    cy.get("input[name=postalCode]").type("31000");
    cy.get("input[name=phone]").type("0789090902");
    cy.contains("Select...").click();
    cy.get("#react-select-2-option-0").click();
    cy.contains("Continue to shipping").click();

    cy.wait(500);

    cy.contains("Chronopost").click();
    cy.contains("Continue to payment").click();

    cy.wait(500);

    cy.contains("Cash on delivery").click();
    cy.contains("Submit Order").click();

    cy.wait(500);

    cy.contains("FirstName, Thanks for your order !").should("be.visible");
  });
});
