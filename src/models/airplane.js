'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
   
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{
        foreignKey: 'id',
        onDelete:'CASCADE'
      });
      this.hasMany(models.Seat,{
        foreignKey: 'id',
        onDelete:'CASCADE'
      })
      
    }
  }
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Airplane',
      timestamps:true
    }
  );
  return Airplane;
}; 

