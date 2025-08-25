describe('Автотесты для формы логина и пароля на [login.qa.studio]', function () {

     it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('email@email.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


    it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('неправильный_пароль');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('pupu@pu.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('НЕвалидный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('pupupu.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Логин с верхним регистром и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
 })
