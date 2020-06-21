describe("MiniCart", () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("shoud display 0$ total", () => {
    cy.visit("/cart");

    cy.contains("0$").should("be.visible");
  });

  it("Add a product should display it in cart", () => {
    cy.visit("/product/car-lights-and-stars");
    cy.contains("Add to cart").click();
    // wait really added
    cy.contains("Successfully added to cart").should("be.visible");
    cy.visit("/cart");

    cy.get("span").contains("Car lights and stars").should("be.visible");
    cy.contains("10.99$").should("be.visible");
  });

  it("Add mulitple products should display them in cart", () => {
    cy.visit("/product/car-lights-and-stars");
    cy.contains("Add to cart").click();
    // wait really added
    cy.contains("Successfully added to cart").should("be.visible");

    cy.visit("/product/moutain-lake");
    cy.contains("Add to cart").click();
    // wait really added
    cy.contains("Successfully added to cart").should("be.visible");

    cy.visit("/cart");

    cy.get("span").contains("Car lights and stars").should("be.visible");
    cy.get("span").contains("Moutain lake").should("be.visible");
    cy.contains("21.98$").should("be.visible");
  });

  it("User should be able to change quantity & see an informative message", () => {
    const increase = ".item-dec-inc > :nth-child(3) > svg";
    const decrease = ".item-dec-inc > :nth-child(1) > svg";
    const quantity = ".item-dec-inc > :nth-child(2)";

    cy.visit("/product/car-lights-and-stars");
    cy.contains("Add to cart").click();
    // wait really added
    cy.contains("Successfully added to cart").should("be.visible");

    cy.visit("/cart");

    cy.get(increase).click();
    cy.get(quantity).should("contain", "2");
    cy.contains("Successfully update quantity (2)").should("be.visible");

    cy.get(decrease).click();
    cy.get(quantity).should("contain", "1");
    cy.contains("Successfully update quantity (1)").should("be.visible");
  });

  it("User should be able to delete product from cart & see an informative message", () => {
    const deleteIcon = ".item-delete-icon";

    cy.visit("/product/car-lights-and-stars");
    cy.contains("Add to cart").click();
    // wait really added
    cy.contains("Successfully added to cart").should("be.visible");

    cy.visit("/cart");

    cy.get("span").contains("Car lights and stars").should("be.visible");
    cy.get(deleteIcon).click();

    // Not fan of this selector
    cy.get(".item-name-delete span").should("not.exist");
    cy.contains("Successfully removed from cart").should("be.visible");
  });
});
