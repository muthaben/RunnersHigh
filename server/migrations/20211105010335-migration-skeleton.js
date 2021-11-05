'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('user_rooms', 'pairId', { type: Sequelize.INTEGER })
    await queryInterface.addConstraint('user_rooms', {
      fields: ['pairId'],
      type: 'foreign key',
      name: 'user_rooms_pairId',
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
    await queryInterface.removeConstraint('user_rooms', 'user_rooms_pairId')
    await queryInterface.removeColumn('user_rooms', 'pairId')
  }
}
