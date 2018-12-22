var connection = require('../db/conn');

const sqlGetById = "SELECT * FROM customer WHERE id = ?";
const sqlUpdate = "UPDATE customer SET ? WHERE id = ?";
const sqlGetAll = "SELECT * FROM customer";
const sqlInsert = "INSERT INTO customer SET ?";
const sqlDelete = "DELETE FROM customer WHERE id = ?";

exports.getById = function getById(id, callback) {
    connection.query(sqlGetById,id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows[0]);
    });
};

exports.getAll = function getAll(callback) {
    connection.query(sqlGetAll, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.insert = function insert(data, callback) {
    connection.query(sqlInsert, data, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.update = function update(id, data, callback) {
    connection.query(sqlUpdate, [data, id], function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.del = function del(id, callback) {
    connection.query(sqlDelete, id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};