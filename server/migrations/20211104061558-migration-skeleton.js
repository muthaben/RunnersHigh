'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('chattings', 'roomId', { type: Sequelize.INTEGER })
    await queryInterface.addConstraint('chattings', {
      fields: ['roomId'],
      type: 'foreign key',
      name: 'chatting_roomId',
      references: {
        table: 'rooms',
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
    await queryInterface.removeConstraint('chattings', 'chatting_roomId')
    await queryInterface.removeColumn('chattings', 'roomId')
  }
}
