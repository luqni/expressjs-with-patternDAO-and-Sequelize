module.exports = (sequelize, type) => {
    return sequelize.define ('transaction',{
            id:{
                field:'id',
                type:type.INTEGER,
                primaryKey:true,
            },
            type:{
                field:'type',
                type:type.STRING
            },
            amount:{
                field:'amount',
                type:type.INTEGER
            },
            amountsign:{
                field:'amountsign',
                type:type.STRING
            },
            accountid:{
                type:type.INTEGER,
                onDelete:'CASCADE',

                references:{
                    model:'account',
                    key:'accountnumber'
                }
            }
    },{
        tableName:'transaction',
        timestamps:false
    })
}