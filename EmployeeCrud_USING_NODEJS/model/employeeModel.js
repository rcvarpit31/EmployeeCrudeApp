const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var emoloyeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    department: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: "Department" }],
        annualSalary: {
        type: Number,
        required: true,
    },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//Export the model
module.exports = mongoose.model('Employee', emoloyeeSchema);