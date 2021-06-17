'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {

    static associate(models) {
      Vehicle.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  };
  Vehicle.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    price: DataTypes.STRING,
    restrictionDay: DataTypes.STRING,
    restrictionActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Vehicle',
  });
  return Vehicle;
};