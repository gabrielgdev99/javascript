const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: "teste@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          update_at: new Date(),
        },
        {
          nome: "Luiz1",
          email: "teste1@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          update_at: new Date(),
        },
        {
          nome: "Luiz2",
          email: "teste2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          update_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
