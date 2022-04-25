const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class User extends Model {
  static associate(models) {
    User.hasMany(models.UserRole, {
      foreignKey: "id",
      as: "user_roles",
    });
    User.hasMany(models.SalesOrder, {
      foreignKey: "id",
      as: "sales_orders",
    });
  }
}
User.init(
  {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    underscored: true,
  }
);
module.exports = User;
