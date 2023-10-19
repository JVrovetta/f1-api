const express = require('express')
const DriverController = require('../controllers/DriverController')

const router = express.Router()

// Driver C.R.U.D
router.post('/', DriverController.create)
router.get('/', DriverController.read)
router.put('/:id', DriverController.update)
router.delete('/:id', DriverController.delete)

module.exports = router