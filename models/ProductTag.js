const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class ProductTag extends Model {
  static associate(models) {
    ProductTag.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "products",
    });
    ProductTag.belongsTo(models.Tag, {
      foreignKey: "tag_id",
      as: "tags",
    });
  }
}
ProductTag.init(
  {
    product_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "ProductTag",
    tableName: "product_tags",
    underscored: true,
  }
);
module.exports = ProductTag;
