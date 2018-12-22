module.exports = function(app) {
    var controller = require('../controller/customer-controller');

    app.route('/customers').get(controller.customers);
    app.route('/customer').post(controller.insertCustomer);
    app.route('/customer/:id').get(controller.getCustomerById);
    app.route('/customer').put(controller.updateCustomer);
    app.route('/customer/:id').delete(controller.del);
    
};