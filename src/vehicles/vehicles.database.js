const { Vehicle } = require('../database/models');

class Database {
  findAll() {
    return Vehicle.findAll();
  }

  findById(id) {
    return Vehicle.findByPk(id);
  }

  createTeste(make, model, year, price, restrictionDay, restrictionActive, userId) {
    const result = Vehicle.create(
      {
        make,
        model,
        year,
        price,
        restrictionDay,
        restrictionActive,
        userId
      }
    );
    return result
  }
  create(make, model, year) {

    const result = Vehicle.create({
      make,
      model,
      year,
      price,
      restrictionDay,
      restrictionActive,
      userId
    });
    return result;
  }

  update(id, make, model, year, price, restrictionDay, restrictionActive, userId) {
    const result = Vehicle.update(
      {
        make,
        model,
        year,
        price,
        restrictionDay,
        restrictionActive,
        userId
      },
      {
        where: { id: id }
      });
    return result;
  }

  remove(id) {
    return Vehicle.destroy(
      {
        where: { id: id }
      });
  }
}

const VehicleDb = new Database();

module.exports = VehicleDb;
