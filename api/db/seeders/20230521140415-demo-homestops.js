// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "HomesTops"
  async up (queryInterface) {
    return queryInterface.bulkInsert('HomesTops', [
      {
        titleOneTop: 'TEMOS A SOLUÇÃO',
        titleTwoTop: 'QUE A SUA EMPRESA PRECISA',
        titleThreeTop: 'PODEMOS AJUDAR A SUA EMPRESA!',
        linkBtnTop: 'http://localhost:3000/contact',
        textBtnTop: 'Entre em Contato',
        imageTop: 'banner_top_v5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  // Limpar os registros da tabela "HomesTops"
  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesTops', null, {});
  }
};
