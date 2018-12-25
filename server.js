var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    bodyParser = require('body-parser')
    morgan = require('morgan');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var logger = require("./util/logging/winston-logger");

app.use(morgan('combined',{ "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");


//var routes = require('./router/routes');
//routes(app);
//router for Customers
var customerRoute = require('./router/routes-customer');
customerRoute(app);

//router for Accounts
var accountRoute = require('./router/routes-account');
accountRoute(app);

//router for transaction
var transactionRoute = require('./router/routes-transaction');
transactionRoute(app);


app.listen(port);
// console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
logger.debug('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
