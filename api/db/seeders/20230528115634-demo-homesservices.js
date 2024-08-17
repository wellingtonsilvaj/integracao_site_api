// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "HomesServices"
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('HomesServices', [
      {
        servTitle:'Serviços',
        servIconOne:'FaHouse',
        servTitleOne:'Serviços elétricos residenciais',
        servDescOne:'Contrary to popular belief, Lorem Ipsum is not simply random',

        servIconTwo:'FaBuilding',
        servTitleTwo:'Serviços elétricos em empresas',
        servDescTwo:'Contrary to popular belief, Lorem Ipsum is not simply random',

        servIconThree:'FaSolarPanel',
        servTitleThree:'Instação de paineis  solares',
        servDescThree:'Contrary to popular belief, Lorem Ipsum is not simply random',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  // Limpar os registros da tabela "HomesServices"
  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesServices', null, {});
  }
};
