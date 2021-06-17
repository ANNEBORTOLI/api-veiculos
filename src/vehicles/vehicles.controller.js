const VehicleService = require('./vehicles.service');

class Controller {

  async findAll(req, res) {
    const vehicles = await VehicleService.findAll();
    return vehicles.length == 0 ?
      res.json({ "messege": "No vehicle registered yet" })
      :
      res.json(vehicles);
  }

  async findById(req, res) {
    const { id } = req.params;
    const vehicle = await VehicleService.findById(id);
    return vehicle ?
      res.json(vehicle)
      :
      res.json({ "message": "Vehicle not found" });
  }

  async create(req, res) {
    const { make, model, year, userId } = req.body;
    await VehicleService.create({ make, model, year, userId });

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