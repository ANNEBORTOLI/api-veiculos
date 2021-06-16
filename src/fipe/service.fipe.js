const axios = require('axios');

class Service {

  async getMakerId(make) {

    const { data } = await axios("https://parallelum.com.br/fipe/api/v1/carros/marcas");

    const carMaker = data.find(maker => maker.nome == make);

    return carMaker.codigo;
  }

  async getModelId(model, makerId) {

    const { data } = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${makerId}/modelos`);

    const carModel = data.modelos.find(item => item.nome == model);

    return carModel.codigo;
  }

  async getYearId(year, makerId, modelId) {

    const { data } = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${makerId}/modelos/${modelId}/anos`);

    const carYear = data.find(item => item.nome == year);

    return carYear.codigo;
  }

  async getPrice(makerId, modelId, yearId) {

    const { data } = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${makerId}/modelos/${modelId}/anos/${yearId}`);

    return data.Valor
  }

}

const FipeService = new Service();
module.exports = FipeService;