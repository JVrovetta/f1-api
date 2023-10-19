const express = require('express')
const CarController = require('../controllers/CarController')

const router = express.Router()

// Car C.R.U.D
router.post('/', CarController.create)
router.get('/', CarController.read)
router.put('/:id', CarController.update)
router.delete('/:id', CarController.delete)

module.exports = router