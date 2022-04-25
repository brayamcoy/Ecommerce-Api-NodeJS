const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

class UserRole extends Model {
  static associate(models) {
    UserRole.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "users",
    });
    UserRole.belongsTo(models.Role, {
      foreignKey: "role_id",
      as: "roles",
    });
  }
}
UserRole.init(
  {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "UserRole",
    tableName: "user_roles",
    underscored: true,
  }
);
module.exports = UserRole;
