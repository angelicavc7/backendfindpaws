const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Found extends Model {}
Found.int(
  {
    id: {
      types: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    PhoneNumber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    email: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    PetType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PetDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    circumstances: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DateFound: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    LastSeen: {
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
