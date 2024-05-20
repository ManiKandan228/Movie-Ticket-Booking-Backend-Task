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
const ticketBooking = async (request, response) => {
    try {
            const title = await movieModel.findById(request.body.userId);
            if (title.availability > 0) 
            {
                const booking = new bookingModel({
                userId: request.body.userId,
                seatNumber: request.body.seatNumber,
            });
            await booking.save();
            title.availability -= 1;
            await title.save();
            response.status(201).send({ message: 'Ticket Booked' });
            } 
            else 
            {
            response.status(400).send('Slots are full !!');
            }
        } 
        catch (err) {
        response.status(500).send(err);
        }
  }
   


module.exports = {getAllTheatre,getAllDate,getAllMovie,ticketBooking,getBookingAvailability}