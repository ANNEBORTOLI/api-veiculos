const { findAll, findById, create, update, remove, createTeste } = require('./vehicles.database');
const FipeService = require('./fipe.service');

class Service {

  findAll() {
    return findAll();
  }

  findById(id) {
    return findById(id);
  }

  async create(vehicle) {
    const { make, model, year, userId } = vehicle;

    const price = await FipeService.getFipeInfo(make, model, year);
    const restrictionDay = this.getRestrictedDay(year);
    const restrictionActive = this.getRestrictionStatus(restrictionDay);

    return createTeste(make, model, year, price, restrictionDay, restrictionActive, userId);
  }

  remove(id) {
    return remove(id);
  }

  getRestrictedDay(year) {
    const weekday = new Array(5);
    weekday[0] = "Segunda-Feira";
    weekday[1] = "Terça-Feira";
    weekday[2] = "Quarta-Feira";
    weekday[3] = "Quinta-Feira";
    weekday[4] = "Sexta-Feira";

    const num = year[3]; //"2019 Diesel"
    const index = Math.floor(num / 2); //'0-1'=[0],'2-3'=[1],'4-5'=[2],'6-7'=[3],'8-9'=[4] 
    const w = weekday[index]; //"Sexta"

    return w;
  }

  getRestrictionStatus(day) {
    const today = new Date();
    const weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunda-Feira";
    weekday[2] = "Terça-Feira";
    weekday[3] = "Quarta-Feira";
    weekday[4] = "Quinta-Feira";
    weekday[5] = "Sexta-Feira";
    weekday[6] = "Sábado";

    const index = today.getDay(); //0-dom, 1-seg, 2-ter, 3-quar, 4-quin, 5-sex, 6-sab
    const w = weekday[index];

    return w == day
  }


}

const VehicleService = new Service();

module.exports = VehicleService;

// console.log('-------------')
// console.log('consulta FIPE SERVICE = ', price)
// console.log('day = ', restrictionDay)
// console.log('restriction = ', restrictionActive)
// console.log('-------------')
