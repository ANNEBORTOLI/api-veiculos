const VehicleService = require('./vehicle.service');

class Controller {

  async findAll(req, res) {
    const vehicles = await VehicleService.findAll();
    return vehicles.length == 0 ? res.json({ "messege": "No vehicle registered yet" }) : res.json(vehicles);
  }

  async findById(req, res) {
    const { id } = req.params;
    const vehicle = await VehicleService.findById(id);
    return vehicle ? res.json(vehicle) : res.json({ "messege": "Vehicle not found" });
  }

  async createOrUpdate(req, res) {
    const { id } = req.params;
    const { make, model, year, price, rotation_day, rotation_active, user_id } = req.body;

    await VehicleService.save({ id: id, make, model, year, price, rotation_day, rotation_active, user_id });

    res.json({ success: true });
  }

  async remove(req, res) {
    const { id } = req.params;
    await VehicleService.remove(id);

    res.json({ success: true });
  }

}

const VehicleController = new Controller();

module.exports = VehicleController;