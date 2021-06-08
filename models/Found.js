const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Found extends Model {}
Found.init(
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
    petType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    petDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    circumstances: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateFound: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastSeen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Found",
  }
);
module.exports = Found;
