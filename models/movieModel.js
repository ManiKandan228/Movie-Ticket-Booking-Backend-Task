const mongoose = require('mongoose')

const movieModel = mongoose.Schema({
    title :
    {
        type : String,
        required : true
    },
    genre : 
    {
        type : String,
        required : true
    },
    IMDB : 
    {
        type :String,
        required : true
    },
    imageUrl:
    {
        type:String,
        required:true
    }

},
{
    collection : 'movie-details'
 })

 module.exports = mongoose.model('movie-details',movieModel)