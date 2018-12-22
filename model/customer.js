module.exports = (sequelize, type) => {
    return sequelize.define('customer',{
        id:{
            field:'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        firsname:{
            field:'firsname',
            type: type.STRING
        },
        lastname:{
            field:'lastname',
            type: type.STRING
        },
        birthdate:{
            field:'birthdate',
            type: type.DATE
        },
        username: type.STRING,
        password: type.STRING,
        phonenumber:{
            field:'phonenumber',
            type: type.STRING
        },
        phonetype:{
            field:'phonetype',
            type: type.STRING
        }
    },{
        tableName:'customer',
        timestamps:false
    })
}