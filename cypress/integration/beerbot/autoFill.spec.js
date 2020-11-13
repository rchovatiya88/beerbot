// =============================================================================
// Buy a specific beer 
// =============================================================================


context('Beer buying bot ', () => {
    // this is the main homepage ===============================================
    beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        Cypress.Cookies.preserveOnce();
    })

    const baseURL = "https://shop.rarbrewing.com/"


    it('Go to home page and try to buy a product', () => {
        cy.visit(baseURL + '/product/new-release-sticker-pack/');
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[2]/form/div/input').clear();
        cy.xpath('/html/body/div[2]/div[2]/div/div[2]/main/div[2]/div[2]/form/div/input').type('3');
        // cy.findAllByText('Add to cart').click({ multiple: true });
        cy.get('#product-46255 > div.summary.entry-summary > form > button').click();
        cy.wait(800)
        cy.get('#content > div > div.woocommerce > div > a').click()
        cy.wait(1500);
        cy.get('.checkout-button').click();
        cy.get('.custom-logo').click();
    });

    it('Go to homepage', () => {

        cy.wait(1500);

    })



});