const Driver = require('../models/Driver')
const Car = require('../models/Car')

module.exports = {
  async create(req, res) {
    try {
      const { name, number, cars } = req.body
      const driver = await Driver.create({ name, number });

      (cars && cars.length > 0) && driver.setCars(cars)

      return res.status(200).json(driver)
    } catch (err) {
      return res.status(500).json({ err })
    }
  },

  async read(req, res) {
    try {
      const drivers = await Driver.findAll({
        attributes: ['id', 'name', 'number'],
        include: [{
          model: Car,
          as: 'cars',
          attributes: ['id', 'manufacturer', 'model'],
          through: { attributes: [] }
        }]
      })

      return res.status(200).json(drivers)
    } catch (err) {
      return res.status(500).json({ err })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { cars, ...data } = req.body
      const driver = await Driver.findByPk(id)

      if (driver) {
        driver.update(data)
        cars && driver.setCars(cars)

        return res.status(200).json(driver)
      }

      return res.status(404).send("Driver not found...")
    } catch (err) {
      return res.status(500).json({ err })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      const driver = await Driver.findByPk(id)

      if (driver) {
        Driver.destroy({ where: { id } })

        return res.status(200).send('Driver deleted successfully...')
      }

      return res.status(404).send("Driver not found...")
    } catch (err) {
      return res.status(500).json({ err })
    }
  }
}