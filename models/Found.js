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
    PetDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    circumstances: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    PhoneNumber: {
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
module.exports = Found;
