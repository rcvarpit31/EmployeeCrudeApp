//importing modules
import  {Schema, model,} from 'mongoose'
import Joi from 'joi'

//validation schema
export const DepartmentchemaValidate = Joi.object({
    department: Joi.string().required(),
  

})

//creating an interface 
interface IDepartment{
    name: string,
    
}

//Postschema
const department = new Schema<IDepartment>({
    name: {
        type: String,
    },

    
})

//creating a model
 export const Department = model<IDepartment>('Department', department )
