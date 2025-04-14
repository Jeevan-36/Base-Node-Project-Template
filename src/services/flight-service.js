const {FlightRepository}=require('../repositories/index.js');
const ApiError = require('../utils/ApiError.js');
const flightRepository=new FlightRepository();
const {Op}=require('sequelize')
const {StatusCodes}=require("http-status-codes")
 async function createFlight(data){
    try {
       const FlightData=await flightRepository.create(data);
        return FlightData;
    } catch (error) {
       console.log(error);
        throw new ApiError(StatusCodes.BAD_REQUEST, "Error in creating Flight ");
    }
}
async function getAllFlights(query) {
    let customFilter={};
    let sortFilter=[];
    if(query.trips)
    {
        const [departureAirportId,arrivalAirportId]=query.trips.split("-");
        if(departureAirportId===arrivalAirportId)
        {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Departure and arrival Id are same");
        }
        customFilter={departureAirportId,arrivalAirportId};
    }
    if(query.price)
    {
        const [minPrice,maxPrice]=query.price.split("-");
        customFilter={
            ...customFilter,
            price:{
                [Op.gte]:(minPrice)||1000,
                [Op.lte]:(maxPrice) || 20000
                }    
        }
    }
    if(query.travellers)
    {
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate)
    {
        customFilter.departureTime={
            [Op.gte]:query.tripDate
        }
    }
    if(query.sort)
    {
        const params=query.sort.split(',');
        const sortFilter=params.map(param=>param.split('_'));
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
        if(flights.length===0)
        {
            throw new ApiError(StatusCodes.NOT_FOUND, "No Flights found");
        }
        else return flights;
     } catch (error) {
         throw new ApiError( error.statusCode ||StatusCodes.BAD_REQUEST, error.message || "Cannot get data from Flights ");
     }
}


module.exports={createFlight ,getAllFlights};