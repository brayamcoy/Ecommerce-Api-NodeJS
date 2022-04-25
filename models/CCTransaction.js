const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class CCTransaction extends Model {
  static associate(models) {
    CCTransaction.hasOne(models.SalesOrder, {
      foreignKey: "processor_trans_id",
      as: "sales_orders",
    });
  }
}
CCTransaction.init(
  {
    code: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    transdate: DataTypes.DATE,
    processor: DataTypes.STRING,
    processor_trans_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    cc_num: DataTypes.STRING,
    cc_type: DataTypes.STRING,
    response: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "CCTransaction",
    tableName: "cc_transactions",
    underscored: true,
  }
);

module.exports = CCTransaction;
