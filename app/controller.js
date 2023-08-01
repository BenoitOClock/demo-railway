const Client = require('pg').Client;

const client = new Client();

client.connect();

const controller = {
  async getHome(request, response) {
    const items = await client.query('SELECT * FROM item');
    response.render('home', { items: items.rows });
  },
};

module.exports = controller;
