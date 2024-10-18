'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
        {
          name: "Rakhman",
          profession: "Admin Micro",
          role: "admin",
          email: "auliarakhman1107@gmail.com",
          password: await bcrypt.hash('12345678',10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Rachim",
          profession: "Frond End",
          role: "student",
          email: "rachim@gmail.com",
          password: await bcrypt.hash('123456',10),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});

  }
};
