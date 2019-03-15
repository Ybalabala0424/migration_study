'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const {INTEGER,DATE,STRING}=Sequelize;
      await queryInterface.createTable('users', {
          id: { type: INTEGER, primaryKey: true, autoIncrement: true },
          name: {type:STRING},
          age:INTEGER,
          created_at: DATE,
          updated_at: DATE,
      });
  },
    down: async queryInterface => {
        await queryInterface.dropTable('users');
    },
};
