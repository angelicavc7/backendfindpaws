const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Lost extends Model {}
Lost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    petName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    petType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    petDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastSeen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateLost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reward: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Lost",
  }
);
module.exports = Lost;
