'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('tasks', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userid:STRING,
        taskName:STRING,
        deadline:INTEGER,
        created_at: {type: DATE,allowNull:true},
        updated_at: {type: DATE,allowNull:true},
    });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('tasks');
  }
};
