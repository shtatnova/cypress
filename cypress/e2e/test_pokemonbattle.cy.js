describe('Автотесты для формы логина и пароля на [login.qa.studio]', function () {

    it('Верный логин и верный пароль', function () {
        cy.visit('https://pokemonbattle.ru/login');
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').click();

        // выбираем рандомный аватар с классом "available"
        cy.get('li.shop__item.available .shop__button').then($buttons => {
            const randomIndex = Math.floor(Math.random() * $buttons.length);
            cy.wrap($buttons[randomIndex]).click();
        });

        // генерируем карту (алгоритм Луна) и вводим
        cy.generateCardNumber().then(cardNumber => {
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type(cardNumber);
        });

        cy.get(':nth-child(1) > .style_1_base_input').type('01/27');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('pupupu');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.payment_form_card_form').contains('Покупка прошла успешно');
        cy.get('.success__image').should('be.visible');
        cy.get('.style_1_base_link_blue').click();

    });

});
