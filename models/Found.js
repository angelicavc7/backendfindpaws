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
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
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
    petType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    circumstances: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateFound: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lastSeen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Found",
  }
);
module.exports = Found;
