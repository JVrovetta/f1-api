require('dotenv').config()

const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_BASE,
  define: {
    timestamps: true
  }
}

module.exports = config