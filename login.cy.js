describe('Login Test', () => {
    const url = 'https://backpack-staging.fluencyinc.co/login/';

    beforeEach(() => {
      cy.visit('https://backpack-staging.fluencyinc.co/login/'); // reset to login page before each test
    });

      // Verify Successful login
    it('logs in with valid credentials', () => {
   
      cy.get('input[name="username"]').type('yourUsername'); // Replace 'yourUsername' with valid username/email
      cy.get('input[name="password"]').type('yourPassword'); // Replace 'yourPassword' with valid pw
      cy.get('button[type="submit"]').click(); // 'Sign In'
   
      cy.url().should('include', '/home'); // Replace 'home' with keyword in URL indicating successful login
      cy.contains('Welcome').should('be.visible'); // Replace 'Welcome' with an element that confirming login
    });
   });

     // Verify Invalid login attempt - incorrect credentials
     it('displays an error for invalid login', () => {
    
        cy.get('input[name="username"]').type('invalidUser'); 
        cy.get('input[name="password"]').type('wrongPassword');
        cy.get('button[type="submit"]').click(); // Attempt to sign in
    
        cy.url().should('include', '/home'); // Replace 'home' with keyword in URL indicating user remained on login page
        cy.contains('Authentication Failed').should('be.visible'); // Verify the error message displays
      });

    // Verify Invalid login attempt - blank login field
      it('displays error when fields are blank', () => {

        cy.get('button[type="submit"]').click(); //click login w/o typing anything
        cy.get('.text-danger.font-weight-bold.text-center')
          .should('be.visible')
          .and('contain.text', 'Please fill out all fields'); // Verify blank-field login error message displays
      });

    // Other scenarios to test: 
    // Improper formatting (ie: '@' in the username)
    // Password validation (verify length and character rules)