const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Lost extends Model {}
Lost.init(
  {
    id: {
      types: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastSeen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateLost: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reward: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Lost",
  }
);
module.exports = Lost;
