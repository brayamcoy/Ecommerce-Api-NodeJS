const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class SalesOrder extends Model {
  static associate(models) {
    SalesOrder.belongsTo(models.Session, {
      foreignKey: "session_id",
      as: "sessions",
    });
    SalesOrder.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "users",
    });
    SalesOrder.belongsTo(models.Coupon, {
      foreignKey: "coupon_id",
      as: "coupons",
    });
    SalesOrder.belongsTo(models.OrderProduct, {
      foreignKey: "id",
      as: "order_products",
    });
    SalesOrder.belongsTo(models.CCTransaction, {
      foreignKey: "id",
      as: "cc_transactions",
    });
  }
}
SalesOrder.init(
  {
    order_date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    coupon_id: DataTypes.INTEGER,
    session_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "SalesOrder",
    tableName: "sales_orders",
    underscored: true,
  }
);
module.exports = SalesOrder;
