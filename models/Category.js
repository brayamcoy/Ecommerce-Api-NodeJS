const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Category extends Model {
  static associate(models) {
    Category.belongsTo(models.Category, {
      foreignKey: "parent_id",
      as: "categories",
    });
    Category.hasMany(models.ProductCategory, {
      foreignKey: "id",
      as: "product_categories",
    });
  }
}
Category.init(
  {
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    underscored: true,
  }
);

module.exports = Category;
