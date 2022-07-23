const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
},{timestamps:true});


module.exports = mongoose.model("employee", employeeSchema);