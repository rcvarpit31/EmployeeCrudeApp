//importing modules
import express from "express";
import { EmployeeController } from '../Controllers/employee.controller'

//initiating the router
export const router = express.Router()

//add Employee route
router.post('/',EmployeeController.addemployee)

//get Employees
router.get('/', EmployeeController.getAllemployees)

//get single Employee
router.get('/:id', EmployeeController.getAemployee)

//update a Employee
router.put('/:id', EmployeeController.updateemployee)

//delete a Employee
router.delete('/:id', EmployeeController.deleteemployee)

