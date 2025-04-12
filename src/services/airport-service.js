const {AirportRepository}=require('../repositories/index.js');
const ApiError = require('../utils/ApiError.js');
const airportRepository=new AirportRepository();
const {StatusCodes}=require("http-status-codes")
 async function createAirport(data){
    try {
      
       
       const airportData=await airportRepository.create(data);
        return airportData;
    } catch (error) {
       console.log(error);
        throw new ApiError(StatusCodes.BAD_REQUEST, "Error in creating Airport ");
       
    }
}

async function getAirport()
{
    try {
        const airportData= await airportRepository.getAll();
        return airportData;
    } catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR,"Cant get Airport Data")
    }
}

async function getAirportById(id) {

    try {
        const airportData= await airportRepository.get(id);
        return airportData;
    } catch (error) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Airport not found");
    }
}

async function destroyAirport(id) {
    try {
        const airportData= await airportRepository.delete(id);
        return airportData;
    } catch (error) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Airport not found");
    }
}

async function updateAirport(id,data) {
    try {
        const airportData= await airportRepository.update(id,data);
        return airportData;
    } catch (error) {
       
        throw new ApiError(StatusCodes.NOT_FOUND, "Airport not found");
    }
}

module.exports={createAirport,getAirport,getAirportById,destroyAirport,updateAirport};