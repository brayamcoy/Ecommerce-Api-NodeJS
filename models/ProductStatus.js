const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class ProductStatus extends Model {
  static associate(models) {
    ProductStatus.hasOne(models.Product, {
      foreignKey: "id",
      as: "products",
    });
  }
}
ProductStatus.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "ProductStatus",
    tableName: "product_statuses",
    underscored: true,
  }
);
module.exports = ProductStatus;
