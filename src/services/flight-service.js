const {FlightRepository}=require('../repositories/index.js');
const ApiError = require('../utils/ApiError.js');
const flightRepository=new FlightRepository();
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
    if(query.trips)
    {
        const [departureAirportId,arrivalAirportId]=query.trips.split("-");
        if(departureAirportId===arrivalAirportId)
        {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Departure and arrival Id are same");
        }
        customFilter={departureAirportId,arrivalAirportId};
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter);
        if(flights.length===0)
        {
            throw new ApiError(StatusCodes.NOT_FOUND, "No Flights found");
        }
        else return flights;
     } catch (error) {
       // console.log(error);
         throw new ApiError( error.statusCode ||StatusCodes.BAD_REQUEST, error.message || "Cannot get data from Flights ");
     }
}


module.exports={createFlight ,getAllFlights};