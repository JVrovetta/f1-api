const express = require('express')
const driverRouter = require('./src/routes/driverRouter')
const carRouter = require('./src/routes/carRouter')
require('./src/models/config/associations')

const app = express()
app.use(express.json())

app.use('/drivers', driverRouter)
app.use('/cars', carRouter)

app.listen(3000, () => {
  console.log('Server ONLINE');
})