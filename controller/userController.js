const movieModel = require('../models/movieModel')
const bookingModel = require('../models/bookingModel')

const getAllTheatre = async(request,response) =>
{
    try
    {
        const theatre = await bookingModel.find()
        if(theatre.length === 0)
        {
            return response.status(200).send({message: 'Sorry not available'})
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
const getAllMovie = async(request,response) =>
    {
        try
        {
            const title = await movieModel.find()
            if(title.length === 0)
            {
                return response.status(200).send({message: 'Sorry not available'})
            }
            else
            {
                return response.status(200).json(title)
            }
        }
        catch(error)
        {
            return response.status(500).send({message:error.message})
        }
    }
    const getAllDate = async(request,response) =>
        {
            try
            {
                const date = await movieModel.find()
                if(date.length === 0)
                {
                    return response.status(200).send({message: 'Sorry not available'})
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


const getBookingAvailability = async(request,response)=>
{
    try
    {
        const theatre = await bookingModel.find({ availability: { $gt: 0 } })
        if(theatre.length === 0)
        {
            return response.status(200).send({message: 'Sorry all the slot are full'})
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
    


module.exports = {getAllTheatre,getAllDate,getAllMovie,getBookingAvailability}