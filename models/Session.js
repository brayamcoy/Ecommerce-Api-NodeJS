const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Session extends Model {
  static associate(models) {
    Session.hasOne(models.SalesOrder, {
      foreignKey: "id",
      as: "sales_orders",
    });
  }
}
Session.init(
  {
    data: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Session",
    tableName: "sessions",
    underscored: true,
  }
);
module.exports = Session;
