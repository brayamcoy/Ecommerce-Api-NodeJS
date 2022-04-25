const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class Role extends Model {
  static associate(models) {
    Role.hasMany(models.UserRole, {
      foreignKey: "id",
      as: "user_roles",
    });
  }
}
Role.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "roles",
    underscored: true,
  }
);
module.exports = Role;
