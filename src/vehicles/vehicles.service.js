const { findAll, findById, create, update, remove } = require('./vehicles.database');
const axios = require('axios');

class Service {

  findAll() {
    return findAll();
  }

  findById(id) {
    return findById(id);
  }

  save(vehicle) {
    const { id, make, model, year, price, rotation_day, rotation_active, user_id } = vehicle;
    return id ? update(id, make, model, year, price, rotation_day, rotation_active, user_id) : create(make, model, year, price, rotation_day, rotation_active, user_id);
  }

  remove(id) {
    return remove(id);
  }


}

const VehicleService = new Service();

module.exports = VehicleService;