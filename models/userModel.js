const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    firstName :
    {
        type : String,
        required : true
    },
    lastName : 
    {
        type : String,
        required : true
    },
    email : 
    {
        type : String,
        required : true,
        unique:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    password : 
    {
        type : String,
        required : true
    },
    role :
    {
        type : String,
        enum :['admin','user'],
        default : 'user'
    }
},
{
    collection : 'user-details'
 })

 module.exports = mongoose.model('user-details',userModel)