const Driver = require('../Driver')
const Car = require('../Car')

Driver.belongsToMany(Car, {
  through: 'drivers_cars',
  as: 'cars',
  foreignKey: 'driver_id'
})

Car.belongsToMany(Driver, {
  through: 'drivers_cars',
  as: 'drivers',
  foreignKey: 'car_id'
})

module.exports = { Driver, Car }