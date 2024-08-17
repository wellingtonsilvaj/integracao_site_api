// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "ContentsContacts"
    return queryInterface.bulkInsert('ContentsContacts', [
      {
        titleContact:'Contato',
        descContact:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.',
        iconCompany:'FaRegUser',
        titleCompany:'Empresa',

        descCompany:'Eco Eletrica',
        iconAddress:'MdOutlineLocationOn',
        titleAddress:'Endereço',

        descAddress:'Camocim de são felix',
        iconEmail:'FaRegEnvelope',
        titleEmail:'E-mail',
        descEmail:'eco@eletrica.com.br',

        titleForm:'Mensagem de Contato',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // Limpar os registros da tabela "ContentsContacts"
  async down (queryInterface) {
    await queryInterface.bulkDelete('ContentsContacts', null, {});
  }
};
