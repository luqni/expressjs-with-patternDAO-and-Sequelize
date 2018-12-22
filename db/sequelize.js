const Sequelize = require('sequelize')
const CustomerModel = require('../model/customer')

const sequelize = new Sequelize('coba3', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Customer = CustomerModel(sequelize, Sequelize)

module.exports = {
  Customer
}
