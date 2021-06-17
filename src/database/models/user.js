'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Vehicle, {
        foreignKey: 'userId'
      });
    };
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
  });
  return User;
};