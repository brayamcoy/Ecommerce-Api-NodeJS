const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Product extends Model {
  static associate(models) {
    Product.hasMany(models.ProductTag, {
      foreignKey: "id",
      as: "product_tags",
    });
    Product.belongsTo(models.ProductStatus, {
      foreignKey: "product_status_id",
      as: "product_statuses",
    });
  }
}
Product.init(
  {
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_status_id: DataTypes.INTEGER,
    regular_price: DataTypes.DECIMAL,
    discount_price: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL,
    taxable: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    underscored: true,
  }
);
module.exports = Product;
