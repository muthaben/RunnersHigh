'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('chattings', 'userId', { type: Sequelize.INTEGER })
    await queryInterface.addConstraint('chattings', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'chatting_userId',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('chattings', 'chatting_userId')
    await queryInterface.removeColumn('chattings', 'userId')
  }
}
