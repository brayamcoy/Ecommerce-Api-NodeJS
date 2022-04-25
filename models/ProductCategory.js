const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class ProductCategory extends Model {
  static associate(models) {
    ProductCategory.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "categories",
    });
    ProductCategory.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "products",
    });
  }
}
ProductCategory.init(
  {
    category_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "ProductCategory",
    tableName: "product_categories",
    underscored: true,
  }
);
module.exports = ProductCategory;
