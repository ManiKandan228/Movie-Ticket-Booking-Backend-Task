const mongoose = require('mongoose')

const bookingModel = mongoose.Schema({
    title :
    {
        type : String,
        required : true
    },
    location : 
    {
        type : String,
        required : true
    },
    theatre : 
    {
        type :String,
        required : true
    },
    date :
    {
        type : String,
        required : true
    },
    availability : 
    {
        type : Number,
        default : 60
    }
},
{
    collection : 'booking-details'
 })

 module.exports = mongoose.model('booking-details',bookingModel)