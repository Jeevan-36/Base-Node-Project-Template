const {AirplaneRepository}=require('../repositories/index.js');
const ApiError = require('../utils/ApiError.js');
const airplaneRepository=new AirplaneRepository();
const {StatusCodes}=require("http-status-codes")
 async function createAirplane(data){
    try {
       
       const airplane=await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
       
        throw new ApiError(StatusCodes.BAD_REQUEST, "Error in creating airplane");
       
    }
}

async function getAirplane()
{
    try {
        const airplaneData= await airplaneRepository.getAll();
        return airplaneData;
    } catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR,"Cant get Airplane Data")
    }
}

async function getAirplaneById(id) {

    try {
        const airplaneData= await airplaneRepository.get(id);
        return airplaneData;
    } catch (error) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Airplane not found");
    }
}

async function destroyAirplane(id) {
    try {
        const airplaneData= await airplaneRepository.delete(id);
        return airplaneData;
    } catch (error) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Airplane not found");
    }
}

async function updateAirplane(id,data) {
    try {
        const airplaneData= await airplaneRepository.update(id,data);
        return airplaneData;
    } catch (error) {
       
        throw new ApiError(StatusCodes.NOT_FOUND, "Airplane not found");
    }
}

module.exports={createAirplane,getAirplane,getAirplaneById,destroyAirplane,updateAirplane};