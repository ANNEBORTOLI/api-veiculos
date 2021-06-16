'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {

    static associate(models) {
      Vehicle.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  };
  Vehicle.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    rotation_day: DataTypes.STRING,
    rotation_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};