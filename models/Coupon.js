const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Coupon extends Model {
  static associate(models) {
    Coupon.hasMany(models.SalesOrder, {
      foreignKey: "id",
      as: "sales_orders",
    });
  }
}
Coupon.init(
  {
    code: DataTypes.STRING,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    value: DataTypes.INTEGER,
    multiple: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Coupon",
    tableName: "coupons",
    underscored: true,
  }
);

module.exports = Coupon;
