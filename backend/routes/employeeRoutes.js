const express = require('express')
const router = express.Router()

const {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById
} = require("../controllers/employeeController");

const authMiddleware = require("../middleware/auth")

router.post("/create/employee", [authMiddleware], createEmployee);
router.get("/all/employees", [authMiddleware], getAllEmployee);
router.get("/employee/:id", [authMiddleware], getEmployeeById);
router.put("/employee/update/:id", [authMiddleware], updateEmployeeById);
router.delete("/employee/delete/:id", [authMiddleware], deleteEmployeeById);

module.exports.employeeRoutes = router ;