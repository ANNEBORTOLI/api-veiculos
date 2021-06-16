const db = require('../database/models');

class Database {
  findAll() {
    console.log('database vehicle')
    return db.Vehicle.findAll();
  }

  findById(id) {
    return db.Vehicle.findByPk(id);
  }

  create(make, model, year, price, rotation_day, rotation_active, user_id) {
    const result = db.Vehicle.create({
      make,
      model,
      year,
      price,
      rotation_day,
      rotation_active,
      user_id
    });
    return result;
  }

  update(id, make, model, year, price, rotation_day, rotation_active, user_id) {
    const result = db.Vehicle.update(
      {
        make,
        model,
        year,
        price,
        rotation_day,
        rotation_active,
        user_id
      },
      {
        where: { id: id }
      });
    return result;
  }

  remove(id) {
    return db.Vehicle.destroy(
      {
        where: { id: id }
      });
  }

}

const VehicleDb = new Database();

module.exports = VehicleDb;
