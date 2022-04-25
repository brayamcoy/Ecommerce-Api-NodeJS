const { User, UserRole, Role } = require("../models");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ where: { email } });
    if (!userFound) throw new Error("Email or password incorrect");

    const passwordCompare = await bcrypt.compare(password, userFound.password);
    if (!passwordCompare) throw new Error("Email or password incorrect");

    const token = jwt.sign(
      {
        ...userFound,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );

    return res
      .status(200)
      .json({ message: "Login success", data: userFound, token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const token = jwt.sign(uuidv4(), process.env.JWT_SECRET);

    const data = {
      email,
      first_name,
      last_name,
      active: true,
      password: hash,
      token,
    };

    const userCreated = await User.create(data, { returning: true });
    const role = await Role.findOne({ where: { name: "User" } });
    await UserRole.create({ user_id: userCreated.id, role_id: role.id });

    return res
      .status(201)
      .json({ message: "Register success", data: userCreated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const verifyToken = (req, res, next) => {
  const authHeader = req.header("authorization");
  if (!authHeader) return res.status(401).json({ error: "Access forbidden" });

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const forgotPassword =  async (req, res, next) => {
  try {
    const { email } = req.body; 

    const userFound = User.findOne({ where: { email } });
    if( !userFound ) throw new Error('Error, user doesn"t exist');

    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NODEMAILER_USER, // generated ethereal user
        pass: testAccount.NODEMAILER_PASSWORD, // generated ethereal password
      },
    });

    try {
       await transporter.sendMail({
        from: process.env.NODEMAILER_USER, // sender address
        to: userFound.email, // list of receivers
        subject: "Reset Your Password", // Subject line
        html: "<b>Hello world?</b>", // html body
      }); 
      return res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      return res.status(500).json({ error: error.message});
    }
  
  
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};
const resetPassword = (req, res, next) => {};

module.exports = {
  login,
  register,
  verifyToken,
  forgotPassword,
  resetPassword,
};
