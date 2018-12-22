

module.exports = function(app){
    var todoList = require('../controller/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/customers')
        .get(todoList.customers);

    app.route('/post')
        .post(todoList.createCustomers);

    app.route('/tes')
        .post(todoList.tespost);

    app.route('/del/:id')
        .delete(todoList.deleteCustomers);
    
    app.route('/findby/:id')
        .get(todoList.findCustomers);

    app.route('/update')
      .put(todoList.updateCustomers);
};
