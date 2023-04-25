var mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    email: {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: false,
    },
    createdAt : {
        type: Date,
        required: false,
    }

})

module.exports = mongoose.model('register',registerSchema);