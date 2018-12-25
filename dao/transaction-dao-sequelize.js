const {Transaction, Account} = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getById = function getById(id, callback) {
    Transaction.findById(id)
    .then((transaction)=>{
        return callback(null, transaction);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};

exports.getAll = function getAll(callback){
    Transaction.findAll({
        include:[Account]
    })
    .then((transactions)=>{
        return callback(null,transactions);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};

exports.insert = function insert(data, callback) {
    transaction = data;
    if(transaction.account==null && transaction.id==null){
        resizeBy.json('transaction empty');
    }else{
        if(transaction.id==null){
            transaction.id = transaction.account.id;
        }
    }
    Transaction.create(transaction)
    .then(transaction =>{
        return callback(null, transaction);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
};
