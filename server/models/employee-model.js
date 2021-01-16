const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    name: { type: String, required: true},
    lastName: { type: String, required: true },
    department: { type: String, required: true},
    salary: { type: Number, required: true}
})

module.exports = mongoose.model('employees', Employee)