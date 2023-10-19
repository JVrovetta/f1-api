const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize')

const Car = sequelize.define("cars", {
  manufacturer: DataTypes.STRING,
  model: DataTypes.STRING
});

module.exports = Car
