// const mongoose = require('mongoose')

// const employeeSchema = new mongoose.Schema({
//   firstName: {
//     type: "string",
//     required: true
//   },
//   lastName: {
//     type: "string",
//     required: true
//   },
//   email: {
//     type: "string",
//     required: true,
//     unique: true
//   },
//   nationalId: {
//     type: "string",
//     required: true
//   },
//   telephone: {
//     type: "string",
//     required: true
//   },
//   department: {
//     type: "string",
//     required: true
//   },
//   position: {
//     type: "string",
//     required: true
//   },
//   laptopManufacturer: {
//     type: "string",
//     required: true
//   },
//   model: {
//     type: "string",
//     required: true
//   },
//   serialNumber: {
//     type: "string",
//     required: true
//   }
// });

// module.exports.employeeModel = mongoose.model("Employee",employeeSchema); 


const { DataTypes } = require("sequelize");
const sequelize = require("../middleware/sequelize");

const Employee = sequelize.define("Employee", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nationalId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  laptopManufacturer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Employee;
