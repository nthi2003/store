const mongoose = require('mongoose')
const Schema = mongoose.Schema

const specifications = new Schema({
    CPU : { type : 'String', required: false},
    RAM : { type : 'String', required: false},
    storage_drive : { type : 'String', required: false},
    Graphics_card : { type : 'String', required: false},
    Screen : { type : 'String', required: false},
    Port : { type : 'String', required: false},
    Keyboard : { type : 'String', required: false},
    Audio : { type : 'String', required: false},
    Lan : { type : 'String', required: false},
    Bluetooth : { type : 'String', required: false},
    Webcam : { type : 'String', required: false},
    Operating_system : { type : 'String', required: false},
    battery : { type : 'String', required: false},
    Weight : { type : 'String', required: false},
    Size : { type : 'String', required: false},
    
})

const ProductSchema = new Schema({
    name : {type: string , required: true},
    image : {
        public_id : {
            type: String,
            required: true
        },
        url : {
            type: String,
            required: true
        }
    },
    price : {type: string , required: true},
    specifications :  specifications  
    
})
module.exports =  mongoose.model('Product', ProductSchema)