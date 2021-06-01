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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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
