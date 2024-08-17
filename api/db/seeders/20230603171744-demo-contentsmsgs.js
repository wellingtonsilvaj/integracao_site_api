// Normatizar o código
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "ContactsMsgs"
    return queryInterface.bulkInsert('ContactsMsgs', [
      {
        name: 'Wellington',
        email:'wellington@wellington.com.br',
        subject:'Assunto da mensagem 1',
        content:'conteudo da mensagem 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // Limpar os registros da tabela "ContactsMsgs"
  async down (queryInterface) {
    await queryInterface.bulkDelete('ContactsMsgs', null, {});
  }
};
