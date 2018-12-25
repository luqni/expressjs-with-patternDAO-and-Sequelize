var response = require ('../model/res');
// var accountDao = require ('../dao/account-dao');
var accountDao = require ('../dao/account-dao-sequelize');
var logger = require ('../util/logging/winston-logger');
// var util = require('util');

exports.accounts = function(req, res) {
    accountDao.getAll(function(error, rows){
        if(error){
            console.log('error while select :'+error);
            response.err(error, res);
        }else{
            response.ok(rows, res);
        }
    });
};
exports.getAccountrById = function(req, res) {
    accountDao.getById(req.params['id'], function(err, data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } 
        response.ok(data, res);
    });

};
exports.insertAccount= function(req, res) {
    accountDao.insert(req.body, function(err, data){
        if(err){
            console.log('error call insert : '+err);
            response.err(err, res);
        } 
        response.ok('data inserted with id '+data.insertId, res);
    });
};

exports.updateAccount = function(req, res) {
    accountDao.getById(req.body.id, function(err, data){//check customer exists
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, then continue update
            accountDao.update(req.body.id, req.body, function(err, data){
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
    accountDao.getById(req.params['id'], function(err, data){//check customer exists
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        }  else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, continue delete
            accountDao.del(req.params['id'], function(err, data){
                if(err){
                    console.log('error call delete : '+err);
                    response.err(error, res);
                } 
                response.ok(data, res);
            });
        }
    });
};