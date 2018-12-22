// query yang pakai tanda tanya sedangkan param menggunakan slush
var response = require('../model/res');
var connection = require('../db/conn');
var util = require('util');

exports.customers = function(req, res){
    connection.query('SELECT * FROM customer', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createCustomers = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var firsname = req.body.firsname;
    var lastname = req.body.lastname;
    var birthdate = req.body.birthdate;
    var phonetype = req.body.phonetype;

    connection.query('INSERT INTO customer (username, password, firsname, lastname, birthdate, phonetype) values (?,?,?,?,?,?)',
    [ username, password,firsname, lastname, birthdate, phonetype ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan customers!", res)
        }
    });
};
exports.deleteCustomers = function(req, res){
    var id = req.body.id;
    connection.query('DELETE FROM customer WHERE id = ?',
    [id],function (error, rows){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus customers", res)
        }
    });
};
exports.findCustomers = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM customer where id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.updateCustomers = function(req, res){
    var id = req.body.id;
    var username = req.body.username;
    var password = req.body.password;
    var firsname = req.body.firsname;
    var lastname = req.body.lastname;
    var birthdate = req.body.birthdate;
    var phonetype = req.body.phonetype;

    connection.query('UPDATE customer SET username =?, password=?, firsname=?, lastname=?, birthdate=?, phonetype=? WHERE id=?',
    [ username, password,firsname, lastname, birthdate, phonetype, id ],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan customers!", res)
        }
    });

}

exports.tespost = function(req, res){
    response.ok("post masuk:"+util.inspect(req.body),res)
};

exports.index = function(req, res){
    response.ok("Hello from the Node JS RESTful side!", res)
};
