// Controller required
const customersController = require('../controllers/customersController');

module.exports = (app) => {

  // CRUD
  app.post('/customers', customersController.createCustomer);
  app.get('/customers', customersController.getAllCustomers);
  app.put('/customers', customersController.updateCustomerById);
  app.delete('/customers', customersController.deleteCustomerById);

  app.get('/customers/:id', customersController.getCustomerById);

}