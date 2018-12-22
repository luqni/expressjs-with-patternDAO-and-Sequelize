var response = require('../model/res');
var customerDao = require('../dao/customer-dao');

exports.customers = function(req, res) {
    customerDao.getAll(function (error, rows){
        if(error){
            console.log('error while select: '+error);
            response.err(error, res);
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getCustomerById = function(req, res) {
    customerDao.getById(req.params['id'], function(err, data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } 
        response.ok(data, res);
    });

};

exports.updateCustomer = function(req, res) {
    customerDao.getById(req.body.id, function(err, data){//check customer exists
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, then continue update
            customerDao.update(req.body.id, req.body, function(err, data){
                if(err){
                    console.log('error call update : '+err);
                    response.err(error, res);
                } 
                response.ok('updated data : '+ data.message, res);
            });
        }
    });
};

exports.insertCustomer= function(req, res) {
    customerDao.insert(req.body, function(err, data){
        if(err){
            console.log('error call insert : '+err);
            response.err(err, res);
        } 
        response.ok('data inserted with id '+data.insertId, res);
    });
};

exports.del = function(req, res) {
    customerDao.getById(req.params['id'], function(err, data){//check customer exists
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        }  else if(data==null){
            response.datanotfound('customer not found', res);
        }else{
            //if exists, continue delete
            customerDao.del(req.params['id'], function(err, data){
                if(err){
                    console.log('error call delete : '+err);
                    response.err(error, res);
                } 
                response.ok(data, res);
            });
        }
    });
};