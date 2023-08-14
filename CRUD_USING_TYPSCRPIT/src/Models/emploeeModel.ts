//importing modules
import  mongoose, {Schema, model,} from 'mongoose'
import Joi from 'joi'

//validation schema
export const EmployeeschemaValidate = Joi.object({
    title: Joi.string().required(),
    department: Joi.string().required(),
    annualSalary: Joi.number().required(),
    name: Joi.string().required(),

})

//creating an interface 
interface IEmployee{
    name: string;
    title: string;
    department: any;
    annualSalary: number;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

//Postschema
const employeeSchema = new Schema<IEmployee>({
    name: String,
    title: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    annualSalary: Number,
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
})

//creating a model
 export const Employee = model<IEmployee>('Employee', employeeSchema )
