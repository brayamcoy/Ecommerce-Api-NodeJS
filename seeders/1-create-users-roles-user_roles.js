const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("test2022", salt);

const users = [
  {
    email: "test1@gmail.com",
    first_name: "Brayan",
    last_name: "Coy",
    password: hash,
    token: jwt.sign(uuidv4(), process.env.JWT_SECRET),
    active: false,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    email: "test2@gmail.com",
    first_name: "Jack",
    last_name: "Gutierrez",
    password: hash,
    token: jwt.sign(uuidv4(), process.env.JWT_SECRET),
    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const roles = [
  {
    name: "Admin",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: "User",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

let userRoles = [
  {
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let rolesR = await queryInterface.bulkInsert("roles", roles, {
      returning: true,
    });
    let usersR = await queryInterface.bulkInsert("users", users, {
      returning: true,
    });
    let { id: adminId } = rolesR.find((role) => role.name === "Admin");
    let { id: userId } = rolesR.find((role) => role.name === "User");

    let { id: user1 } = usersR.find((user) => user.email === "test1@gmail.com");
    let { id: user2 } = usersR.find((user) => user.email === "test2@gmail.com");

    userRoles[0].user_id = user1;
    userRoles[0].role_id = adminId;
    userRoles[1].user_id = user2;
    userRoles[1].role_id = userId;

    let userRolesR = await queryInterface.bulkInsert("user_roles", userRoles, {
      returning: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_roles", null, {});
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
