const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class OrderProduct extends Model {
  static associate(models) {
    OrderProduct.hasOne(models.SalesOrder, {
      foreignKey: "order_id",
      as: "sales_orders",
    });
  }
}
OrderProduct.init(
  {
    order_id: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
  },
  {
    sequelize,
    modelName: "OrderProduct",
    tableName: "order_products",
    underscored: true,
  }
);
module.exports = OrderProduct;
