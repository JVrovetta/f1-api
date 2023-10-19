'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drivers_cars', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      driver_id: {
        type: Sequelize.INTEGER,
        references: { model: 'drivers', key: 'id' },
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cars', key: 'id' },
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('drivers_cars')
  }
};