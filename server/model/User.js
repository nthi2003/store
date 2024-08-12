const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: { type: String, required: false },
    city: { type: String, required: false },
    district: { type: String, required: false },

});

const userSchema = new Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: addressSchema, 
    role: { type: String, 
        default: 'user' ,
        enum: ['user' , 'admin']

    },
    active: { type: Boolean, default: true},

});

module.exports = mongoose.model('User', userSchema);