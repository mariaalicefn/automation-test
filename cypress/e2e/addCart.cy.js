describe ('Processo de compras', () => {

    beforeEach (() => {
        cy.visit("/")
    });


    it('Adicionando e excluindo produtos do carrinho', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').contains('Products').click()
        cy.wait(12000)
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click({force:true})
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click({force:true})
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').contains('Cart').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get('#product-1 > .cart_delete > .cart_quantity_delete > .fa').click()
        cy.get('#product-2 > .cart_delete > .cart_quantity_delete > .fa').click()
        cy.get('#empty_cart > .text-center').should('have.text','Cart is empty! Click here to buy products.')
        cy.wait(5000)
        cy.screenshot()

    });

})