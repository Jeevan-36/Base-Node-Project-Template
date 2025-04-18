'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await  queryInterface.addConstraint('Airports',{
    type: 'foreign key',
    name: 'fk_airport_id',
    fields:['cityId'],
    references:{
      table:'Cities',
      field:'id'
    },
    onUpdate:'cascade',
    onDelete:'cascade'
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','fk_airport_id');
  }
};
