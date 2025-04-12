const {FlightService}=require('../services/index.js')
const {StatusCodes}=require('http-status-codes');
const ApiResponse =require('../utils/ApiResponse.js');
async function createFlight(req,res) {
    try {
        const Flight=await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureTime:req.body.departureTime,
            arrivalTime:req.body.arrivalTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats

        });
        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(StatusCodes.CREATED,Flight)
        )
    } catch (error) {
        return res.status(error.statusCode||500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function getAllFlights(req,res) {
    try {
        const flights=await FlightService.getAllFlights(req.query);
        return res.status(StatusCodes.OK).json(new ApiResponse(StatusCodes.OK,flights))
    } catch (error) {
        return res.status(error.statusCode||500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

module.exports={createFlight,getAllFlights};
