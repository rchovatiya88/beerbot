context('Beer buying bot ', () => {
    const baseURL = "https://shop.rarbrewing.com/"
        // before(() => {

    //     cy.visit(baseURL)
    // });


    it('Go to the beer page', () => {
        cy.visit(baseURL + '/product-category/beer-release/');
    })

    it('Go to home page and try to buy a product', () => {
        cy.get('.custom-logo').click();
        cy.visit(baseURL + '/product/new-release-sticker-pack/');
        cy.get('#product-46255 > div.summary.entry-summary > form > button').click();
        cy.wait(1200)
        cy.get('#content > div > div.woocommerce > div > a').click()
        cy.wait(1000);
        cy.get('.checkout-button').click();
        // cy.wait(1000);
    });

    // it('Cart Checkout', () => {

    //     // cy.get('.checkout-button')
    // });
});