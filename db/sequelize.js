const Sequelize = require('sequelize')
const CustomerModel = require('../model/customer')
const AccountModel = require ('../model/account')

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
const Account = AccountModel (sequelize, Sequelize)
Account.belongsTo(Customer, {
  foreignKey:'customerid', targetKey:'id'});
module.exports = {
  Customer,
  Account
}
