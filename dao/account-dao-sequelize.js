const { Account, Customer } = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

// exports.getById = function getById(id, callback) {
//     Account.findById(id)
//     .then((account) => {
//         return callback(null, account);
//     })
//     .catch((error) => {
//         logger.error(error);
//         return callback(error);
//     })
// };

exports.getAll = function getAll(callback) {
    Account.findAll({
        include:[Customer]
    })
    .then((accounts) => {
        return callback(null, accounts);
    })
    .catch((error) => {
        logger.error(error);
        return callback(error);
    })
};

// exports.insert = function insert(data, callback) {
//     account = data;
//     if(account.customer==null && account.id==null){
//         res.json('customer kosong');
//     }else{
//         if(account.id==null){
//             account.id = account.customer.id;
//         }
//     }

//     Account.create(account)
//     .then(account => {
//         return callback(null, account);
//     })
//     .catch((error) => {
//         logger.error(error);
//         return callback(error);
//     })
// };

// exports.update = function update(id, data, callback) {
//     account = data;
//     if(account.customer==null && account.id==null){
//         res.json('customer kosong');
//     }else{
//         if(account.id==null){
//             account.id = account.customer.customerNumber;
//         }
//     }
    
//     Account.update(data, {
//         where: { accountnumber: data.accountnumber },
//         returning: true,
//         plain: true
//       })
//     .then(result => {
//         logger.info('result  update:');
//         logger.info(result);
//         return callback(null, data);
//     })
//     .catch((error) => {
//         logger.error(error);
//         return callback(error);
//     })
// };
// exports.del = function del(id, callback) {
//     Account.destroy({
//         where: { accountnumber: id }
//       })
//     .then(result => {
//         logger.info('result  update:');
//         logger.info(result);
//         return callback(null, id);
//     })
//     .catch((error) => {
//         logger.error(error);
//         return callback(error);
//     })
// };

