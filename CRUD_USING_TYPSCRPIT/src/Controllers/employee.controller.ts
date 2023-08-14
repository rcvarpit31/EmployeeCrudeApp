//import modules
import { employeeServices } from '../Services/employee.service'
import { Request, Response } from 'express'
import {EmployeeschemaValidate} from '../Models/emploeeModel'

class  employeeController {
    //add employee controller
    addemployee = async (req: Request, res: Response) => {
        //data to be saved in database
        console.log(req.body);
        
        const data = {
            title: req.body.title,
            name: req.body.name,
            department: req.body.department,
            annualSalary: req.body.annualSalary
        }
        //validating the request
        const {error, value} = EmployeeschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create employee function in the service and pass the data from the request
            const employee = await employeeServices.createEmployee(value)
            res.status(201).send(employee)          
        }
        
    }

    //get all employees
    getAllemployees = async (req: Request, res: Response) => {
        const employees = await employeeServices.getEmployees()
        res.send(employees)
    }


    //get a single employee
    getAemployee = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const employee = await employeeServices.getEmployee(id)
        res.send(employee)
    }

    //update employee
    updateemployee = async (req: Request, res: Response) => {
        const id = req.params.id
       const employee = await employeeServices.updateEmployee(id, req.body)  
        res.send(employee)
    }


    //delete a employee
    deleteemployee = async (req: Request, res: Response) => {
        const id = req.params.id
        await employeeServices.deleteEmployee(id)
        res.send('employee deleted')
    }

}

//export class
export const EmployeeController = new employeeController();