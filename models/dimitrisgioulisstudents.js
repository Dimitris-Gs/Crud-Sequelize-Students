'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DimitrisGioulisStudents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DimitrisGioulisStudents.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    tuitionFees: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DimitrisGioulisStudents',
  });
  return DimitrisGioulisStudents;
};