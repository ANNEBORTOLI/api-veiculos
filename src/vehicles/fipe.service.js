const axios = require('axios');

class Service {

  async getFipeInfo(make, model, year) {
    console.log("==================getFipeInfo======================")
    console.log(`maker= ${make}, model= ${model}, year= ${year}`)
    console.log("++++++++++++++++++++++++++++++++++++++++")
    const makerId = await this.getMakerId(make);
    const modelId = await this.getModelId(model, makerId);
    const yearId = await this.getYearId(year, makerId, modelId);
    const carPrice = await this.getPrice(makerId, modelId, yearId);
    console.log(`makerId= ${makerId}, modelId= ${modelId} yearId= ${yearId}`)
    console.log(`typeof(carPrice) = ${carPrice} --> `, typeof (carPrice))
    console.log("++++++++++++++++++++++++++++++++++++++++")
    return carPrice;
  }

  async getMakerId(make) {
    console.log("==================getMakerId======================")

    const { data } = await axios("https://parallelum.com.br/fipe/api/v1/carros/marcas");

    const carMaker = data.find(maker => maker.nome == make);
    const makerId = carMaker.codigo;

    return makerId
  }

  async getModelId(model, makerId) {
    console.log("==================getModelId======================")

    const { data } = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${makerId}/modelos`);

    const carModel = data.modelos.find(item => item.nome == model);
    const modelId = carModel.codigo;

    return modelId;
  }

  async getYearId(year, makerId, modelId) {
    console.log("==================getYearId======================")

    const { data } = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${makerId}/modelos/${modelId}/anos`);

    const carYear = data.find(item => item.nome == year);
    const yearId = carYear.codigo;

    return yearId;
  }

  async getPrice(makerId, modelId, yearId) {
    console.log("==================getPrice======================")

    const { data } = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${makerId}/modelos/${modelId}/anos/${yearId}`);

    return data.Valor
  }
}

const FipeService = new Service();
module.exports = FipeService;