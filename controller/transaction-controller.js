var response = require('../model/res');
var transactionDao = require('../dao/transaction-dao');

exports.transactions = function(req, res) {
    transactionDao.getAll(function (error, rows){
        if(error){
            console.log('error while select: '+error);
            response.err(error, res);
        } else{
            response.ok(rows, res)
        }
    });
};
exports.getTransactionById = function(req, res) {
    transactionDao.getById(req.params['id'], function(err, data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } 
        response.ok(data, res);
    });

};

exports.insertTransaction= function(req, res) {
    transactionDao.insert(req.body, function(err, data){
        if(err){
            console.log('error call insert : '+err);
            response.err(err, res);
        } 
        response.ok('data inserted with id '+data.insertId, res);
    });
};

exports.updateTransaction = function(req, res) {
    transactionDao.getById(req.body.id, function(err, data){//check customer exists
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, then continue update
            transactionDao.updateTransaction(req.body.id, req.body, function(err, data){
                if(err){
                    console.log('error call update : '+err);
                    response.err(error, res);
                } 
                response.ok('updated data : '+ data.message, res);
            });
        }
    });
};

exports.del = function(req, res) {
    transactionDao.getById(req.params['id'], function(err, data){//check customer exists
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        }  else if(data==null){
            response.datanotfound('transaction not found', res);
        }else{
            //if exists, continue delete
            transactionDao.del(req.params['id'], function(err, data){
                if(err){
                    console.log('error call delete : '+err);
                    response.err(error, res);
                } 
                response.ok(data, res);
            });
        }
    });
};