const Employee = require("../model/employeeModel");
const Department  =require("../model/department");
const asyncHandler = require("express-async-handler");


async function getOrCreateDepartment(departmentName) {
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

const createEmployee = asyncHandler(async (req, res) => {
    const { name, title, department, annualSalary } = req.body;
    // const department =  req.body.department;
    const departmentObj = await getOrCreateDepartment(department);
     const employee = new Employee({
      name,
      title,
      department: departmentObj._id,
      annualSalary,
    });
         await Employee.create(employee);
    //  console.log(newUser);
        res.json(employee);
    // } else {
    //     throw new Error("User Alredy Exists")
    // }
})

// get All Employee  Employee 
  const getAllEmployee =  asyncHandler( async (req,res)=>{
try {
    const Employe = await Employee.find({ deleted: false }).populate('department');
    // const Employee = await  Employee.find();
    res.json(Employe);

} catch (error) {
     throw new Error(error)

}  })

// get a single Employee 
 const getSigleEmployee = asyncHandler( async (req,res)=>{
     const {id} = req.params;
     console.log(id);
    try {
        const singleEmployee = await Employee.findById(id);
        res.json(singleEmployee)
    } catch (error) {
        throw new Error(error)

    }

 })

 // delete a single Employee 
 const deleteSigleEmployee = asyncHandler( async (req,res)=>{
    const {id} = req.params;
   try {
    //    const singleEmployee = await Employee.findByIdAndDelete(id);
    const deletedEmployee = await Employee.findByIdAndUpdate(id, { deleted: true });
       res.json(deletedEmployee)
   } catch (error) {
       throw new Error(error)

   }

})

 // updat a single Employee 
 const updateSigleEmployee = asyncHandler( async (req,res)=>{
    const {id} = req.params;
    const { name, title, department, annualSalary } = req.body;
    // const department =  req.body.department;
    const departmentObj = await getOrCreateDepartment(department);
   try {
   
       const singleEmployee = await Employee.findByIdAndUpdate(id,{
        name,
        title,
        department: departmentObj._id,
        annualSalary,
       },{new:true,}
       );
       res.json(singleEmployee)
   } catch (error) {
       throw new Error(error)

   }

})
module.exports = {
    getAllEmployee,
    getSigleEmployee,
    deleteSigleEmployee,
    updateSigleEmployee,
    createEmployee,getOrCreateDepartment
 };
