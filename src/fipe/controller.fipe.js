const axios = require('axios');
const FipeService = require('./service.fipe');

class Controller {

  async getVehicle(req, res) {
    const { make, model, year } = req.body;

    const makerId = await FipeService.getMakerId(make);
    const modelId = await FipeService.getModelId(model, makerId);
    const yearId = await FipeService.getYearId(year, makerId, modelId);
    const carPrice = await FipeService.getPrice(makerId, modelId, yearId);

    console.log(`
    makerId = ${makerId} | 
    modelId = ${modelId} | 
    yearId = ${yearId} | 
    carPrice = ${carPrice}
    `);


    res.json({ status: 200 });
  }
}

const FipeController = new Controller();

module.exports = FipeController;