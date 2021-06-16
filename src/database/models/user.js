'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Vehicle, {
        foreignKey: 'user_id'
      });
    };
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birth_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};