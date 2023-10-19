const Car = require('../models/Car')

module.exports = {
  async create(req, res) {
    try {
      const { manufacturer, model } = req.body
      const car = await Car.create({ manufacturer, model })

      return res.status(200).json(car)
    } catch (err) {
      return res.status(500).json({ err })
    }
  },

  async read(req, res) {
    try {
      const cars = await Car.findAll({
        attributes: ['id', 'manufacturer', 'model']
      })

      return res.status(200).json(cars)
    } catch (err) {
      return res.status(500).json({ err })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const data = req.body
      const car = await Car.findByPk(id)

      if (car) {
        car.update(data)

        return res.status(200).json(car)
      }

      return res.status(404).send('Car not found...')
    } catch (err) {
      return res.status(500).json({ err })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      const car = await Car.findByPk(id)

      if (car) {
        Car.destroy({ where: { id } })

        return res.status(200).send('Car successfully deleted...')
      }

      return res.status(404).send('Car not found...')
    } catch (err) {
      return res.status(500).json({ err })
    }
  }
}