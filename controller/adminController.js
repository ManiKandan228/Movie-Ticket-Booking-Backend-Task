const bookingModel = require('../models/bookingModel')
const initialBookingData = require('../data/initialBookingData')
const initialData = require('../data/initialData')

const getAllDetails = async(request,response) =>
{
    try
    {
        const theatre = await bookingModel.find()
        if(theatre.length === 0)
        {
            const initialDetails = await bookingModel.insertMany(initialData)
            return response.status(200).json(initialDetails)
        }
        else
        {
            return response.status(200).json(theatre)
        }
    }
    catch(error)
    {
        return response.status(500).send({message:error.message})
    }
}

const addNewTheatre = async(request,response)=>
{
    const newTheatre = request.body
    try
    {
        const existingTheatre = await bookingModel.findOne({theatre:newTheatre.theatre})
        if(!existingTheatre)
        {
            const addNewTheatre = await bookingModel.insertMany(newTheatre)
            return response.status(200).json(addNewTheatre)
        }
        else
        {
            return response.status(409).send({message : `Sorry!!!..The Theatre is already exists`})
        }
    }
    catch(error)
    {
        return response.status(200).send({message : error.message})
    }
}

const addNewMovie = async(request,response)=>
{
    const newMovie = request.body.title
    const theatre = request.body.theatre
    try
    {
        const moviedetails = await moviedetails.findOne({ theatre: theatre });
        moviedetails.title.push(...newMovie);
        await moviedetails.save();
        return response.status(200).send(moviedetails)
    }
    catch(error)
    {
        return response.status(200).send({message : error.message})
    }
}

const getAllbookings = async(request,response)=>
{
    try
    {
        const bookingData = await bookingModel.find()
        if(bookingData.length === 0)
        {
            const initialDetails = await bookingModel.insertMany(initialBookingData)
            return response.status(200).json(initialDetails)
        }
        else
        {
            return response.status(200).json(theatre)
        }
    }
    catch(error)
    {
        return response.status(500),send({message: error.message})
    }
}

module.exports = {getAllDetails,addNewTheatre,addNewMovie,getAllbookings}