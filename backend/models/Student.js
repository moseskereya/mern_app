const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required:true
    },
     email: {
        type: String,
        required:true
    },
    class: {
        type: String,
        required: true
     }
     
})

module.exports = Student = mongoose.model('student', StudentSchema)