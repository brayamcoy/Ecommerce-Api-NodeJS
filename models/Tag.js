const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Tag extends Model {
  static associate(models) {
    Tag.hasMany(models.ProductTag, {
      foreignKey: "id",
      as: "product_tags",
    });
  }
}
Tag.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Tag",
    tableName: "tags",
    underscored: true,
  }
);
module.exports = Tag;
