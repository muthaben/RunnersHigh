'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('user_rooms', 'roomId', { type: Sequelize.INTEGER })
    await queryInterface.addConstraint('user_rooms', {
      fields: ['roomId'],
      type: 'foreign key',
      name: 'user_room_roomId',
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
    await queryInterface.removeConstraint('user_rooms', 'user_room_roomId')
    await queryInterface.removeColumn('user_rooms', 'roomId')
  }
}
