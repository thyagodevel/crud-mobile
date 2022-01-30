// Models
const Customer = require('../models/Customer');

module.exports = {

  async getAllCustomers(req, res) {
    const customers = await Customer.findAll();
    if (customers.length > 0) { return res.json(customers); }
    else { return res.json({ "msg": "Não há clientes cadastrados!" }); }
  },

  async getCustomerById(req, res) {
    const { id } = req.params;
    try {
      const customer = await Customer.findOne({ where: { id } });
      return res.json(customer);
    } catch(error) {
      return res.json({ "msg": "Usuário não existe!" });
    }
  },

  async createCustomer(req, res) {
    try {
      const { name, phone, email } = req.body;
      const customer = await Customer.create({ name, phone, email });
      return res.json(customer);
    } catch(error) {
      return res.json(error);
    }
  },

  async updateCustomerById(req, res) {
    const { id, name, phone, email } = req.body;
    try {
      const customer = await Customer.update({ name, phone, email }, { where: { id } });
      return res.json({ "msg": `Cliente ${id} atualizado com sucesso!` });
    } catch(error) {
      return res.json(error);
    }
  },

  async deleteCustomerById(req, res) {
    const { id } = req.body;
    try {
      const customer = await Customer.destroy({ where: { id } });
      return res.json({ "msg": `Cliente ${id} removido com sucesso!` });
    } catch(error) {
      return res.json(error);
    }
  }

}