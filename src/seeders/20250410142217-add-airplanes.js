'use strict';
const {Op}=require('sequelize')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplanes', [{
      modelNumber:"h4jvv4",
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"h4jvv5",
      capacity: 300,
      createdAt: new Date(),
      updatedAt: new Date()
      },
  ],);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airplanes',  {
      [Op.or]:[{
        modelNumber:"h4jvv4"
      }]
    });
  }
};
