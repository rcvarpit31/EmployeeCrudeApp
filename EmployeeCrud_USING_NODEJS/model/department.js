const mongoose = require('mongoose'); // Erase if already required
const Employee = require('./employeeModel');


// Declare the Schema of the Mongo model
const departmentSchema = new mongoose.Schema({
    name: String,
  });
  
//Export the model
module.exports = mongoose.model('Department', departmentSchema);