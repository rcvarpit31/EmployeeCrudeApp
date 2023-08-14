//import module
import { Employee, } from "../Models/emploeeModel";
import { Department, } from "../Models/department";

export class employeeService {
    getemployees() {
        throw new Error('Method not implemented.')
    }
    //create a Employee
    async createEmployee(employeeData: any) {
        console.log(employeeData);
        
        const { name, title, department, annualSalary } = employeeData;
        console.log("dfd:"+ department);
        

        try {
            const departmentObj = await this.getOrCreateDepartment(department);
            const employee = new Employee({
                name,
                title,
                department: departmentObj._id,
                annualSalary,
              });
            const newEmployee = await Employee.create(employee)
            return newEmployee

        } catch (error) {
            console.log(error)
        }
    }

    //get all Employees
    async getEmployees() {
        try {
            const Employees = await Employee.find({ deleted: false }).populate('department');
            return Employees

        } catch (error) {
            console.log(error)
        }
    }

    //get a single Employee
    async getEmployee(id: string) {
      
        try {
            const SingleEmployee = await Employee.findById({_id:id})
            if (!SingleEmployee) {
                return 'Employee not available'
            }
            return SingleEmployee

        } catch (error) {
            console.log(error)
        }
    }

    //update a Employee
    async updateEmployee(id: string, data: any) {
        // try {
        //         //pass the id of the object you want to update
        //         //data is for the new body you are updating the old one with
        //         //new:true, so the dats being returned, is the update one
        //         const Employeez = await Employee.findByIdAndUpdate({_id:id}, data, {new: true})                
        //         if(!Employeez){
        //             return "Employee not available"
        //         }
        //         return Employeez          
        // } catch (error) {
        //     console.log(error)
        // }
        const { name, title, department, annualSalary } = data;
        // const department =  req.body.department;
        const departmentObj = await this.getOrCreateDepartment(department); 
       try {
       
           const singleEmployee = await Employee.findByIdAndUpdate(id,{
            name,
            title,
            department: departmentObj._id,
            annualSalary,
           },{new:true,}
           );
           return singleEmployee
       } catch (error:any) {
           throw new Error(error);
    
       }
    }

    //delete a Employee by using the find by id and delete 
    async deleteEmployee(id: string) {
        try {
            // const SingleEmployee = await Employee.findByIdAndDelete(id)
            const deletedEmployee = await Employee.findByIdAndUpdate(id, { deleted: true });
            if (!deletedEmployee) {
                return 'Employee not available'
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getOrCreateDepartment(departmentName: string) {
        try {
          let department = await Department.findOne({ name: departmentName });
      
          if (!department) {
            department = new Department({ name: departmentName });
            await department.save();
          }
      
          return department;
        } catch (error) {
          throw new Error('Error creating department');
        }
      }
}

//export the class
export const employeeServices = new employeeService()