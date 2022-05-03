describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    afterEach(() => {
        // cy.logout();
    });

    it('should display the login with google button', () => {
        cy.get('.login-container__form-button > button').should('be.visible');
        cy.get('.login-container__form-button > button').should('have.text', 'Login with Google');
    });

    it("should login the user using google", () => {
        // Log user in
        cy.login();

        // Click login btn
        cy.get('.login-container__form-button > button').click();

        // Should show loading svg spinner on btn
        cy.get('.login-container__form-button > button > svg').should('be.visible');

        // Close new tab for login as we are already logged in
        cy.window().then((win) => {
            cy.stub(win, 'open', () => {
                win.close();
            })
        });

        // URL should be / and user should be logged in
        cy.url().should('equal', 'http://localhost:3000/');
        cy.get('.sidenav__avatar-img').should('exist');

        // Log user out on click of avatar
        cy.get('.sidenav__avatar-img').click();
        cy.get('.sidenav__avatar-img').should('not.exist');
        cy.url().should('contain', '/login');
    });

});