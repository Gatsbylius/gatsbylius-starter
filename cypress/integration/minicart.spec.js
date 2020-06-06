describe("MiniCart", () => {
  const cartQuantity = "header nav ul button:first-child";

  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("shoud display 0$ subtotal & cart button on initial state", () => {
    cy.visit("/");
    cy.get(cartQuantity).first().click();
    cy.contains("Subtotal: $0").should("be.visible");
    cy.contains("Go to cart").should("be.visible");
  });

  it("click on cart button should redirect to cart page", () => {
    cy.visit("/");
    cy.get(cartQuantity).first().click();
    cy.contains("Go to cart").click();

    cy.url().should("include", "/cart");
  });

  it("Add a product to cart should display it in minicart & update subtotal", () => {
    cy.visit("/product/car-lights-and-stars");
    cy.contains("Add to cart").click();

    cy.get(cartQuantity).first().click();

    // Not fan of this selector
    // @TODO: refactor
    cy.get("body > div > div > div ul li span")
      .contains("Car lights and stars")
      .should("be.visible");
    cy.contains("Subtotal: $10.99").should("be.visible");
  });
});
