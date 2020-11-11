// =============================================================================
// Buy a specific beer 
// =============================================================================


context('Beer buying bot ', () => {
    // this is the main homepage ===============================================

    const baseURL = "https://shop.rarbrewing.com/"


    it('Go to home page and try to buy a product', () => {
        cy.visit(baseURL + '/product/new-release-sticker-pack/');
        cy.get('#product-46255 > div.summary.entry-summary > form > button').click();
        cy.wait(1500)
        cy.get('#content > div > div.woocommerce > div > a').click()
        cy.wait(1500);
        cy.get('.checkout-button').click();
    });
    // =============================================================================
    // Filling in personal details, To change detials,simply change the values from 
    // inside the single quotes where it says .type('CHANGETHIS')
    // =============================================================================
    it('Cart Info', () => {
        cy.get('#billing_first_name').type('');
        cy.get('#billing_last_name').type('');
        cy.get('#billing_address_1').type('');
        cy.get('#billing_address_2').type('Floor 2nd');
        cy.get('#billing_city').type('Edison');
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type('New Jersey{enter}');
        // .trigger('input');
        cy.wait(1500);
        // cy.pause();
        cy.get('#billing_postcode').type('08837');
        cy.get('#billing_phone').type('23423423324');
        cy.get('#billing_email').type('dsfas@gmail.com');
        // cy.wait(2500);
    });


});

// it('Billing info', () => {
//     cy.get('#stripe-card- element').type('12332345123122312');
//     cy.get('#stripe-exp-element').type('02/23');
//     cy.get('#stripe-cvc-element > .__PrivateStripeElement > iframe').type('234');
// });

// it('Go to the beer  promo page', () => {
//     cy.visit(baseURL + '/product-category/beer-release/');
// });