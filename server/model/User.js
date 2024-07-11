const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },

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