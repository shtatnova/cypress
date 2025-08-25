// Кастомные команды, которых нет в cypress

Cypress.Commands.add('logout', () => {
    cy.request('GET', 'https://api.pokemonbattle.me/v2/pokemons?page=1').then((response) => {
        expect(response.status).to.eq(200);
    });
});

// Генерация рандомного валидного номера карты по алгоритму Луна
Cypress.Commands.add('generateCardNumber', () => {
  let arr = [];

  // генерируем первые 15 цифр
  for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }

  // алгоритм Луна для контрольной цифры
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let digit = arr[arr.length - 1 - i];
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  let checkDigit = (10 - (sum % 10)) % 10;
  arr.push(checkDigit);

  return arr.join('');
});



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })