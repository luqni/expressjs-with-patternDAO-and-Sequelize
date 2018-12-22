// const uuid = require('uuid/v4'); 

module.exports = (sequelize, type) => {
    return sequelize.define ('account',{
        accountnumber: {
            field:'accountnumber',
            type: type.INTEGER,
            primaryKey: true,
        },
        opendate:{
            field:'opendate',
            type:type.DATE
        },
        balance:{
            field:'balance',
            type:type.DECIMAL
        },
        customerid:{
            type:type.INTEGER,
            onDelete:'CASCADE',

            references:{
                model:'customer',
                key:'id'
            }
        }
    },{
       tableName:'account',
       timestamps:false 
    })
}