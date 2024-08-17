'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "homestops"
    return queryInterface.bulkInsert('HomesPremiums', [
      {
        premTitle:'Serviço Premium',
        premSubtitle:' Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam laoreet porta rhoncus.',
        premDesc:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        premBtntext:'Contato',
        premBtnlink:'/contact',
        premImage:'premium_v6.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  // Limpar os registros da tabela "HomesPremiums"
  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesPremiums', null, {});
  }
};
