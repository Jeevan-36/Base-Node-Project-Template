const {CityRepository}=require('../repositories/index.js');
const ApiError = require('../utils/ApiError.js');
const cityRepository=new CityRepository();
const {StatusCodes}=require("http-status-codes")
 async function createCity(data){
    try {
       
       const City=await cityRepository.create(data);
        return City;
    } catch (error) {
        console.log(error);
        throw new ApiError(StatusCodes.BAD_REQUEST, "Error in creating City");
       
    }
}

async function getAllCities()
{
    try {
        const CityData= await cityRepository.getAll();
        return CityData;
    } catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR,"Cant get City Data")
    }
}

async function getCityById(id) {

    try {
        const CityData= await cityRepository.get(id);
        return CityData;
    } catch (error) {
        throw new ApiError(StatusCodes.NOT_FOUND, "City not found");
    }
}

async function destroyCity(id) {
    try {
        const CityData= await cityRepository.delete(id);
        return CityData;
    } catch (error) {
        throw new ApiError(StatusCodes.NOT_FOUND, "City not found");
    }
}

async function updateCity(id,data) {
    try {
        const CityData= await cityRepository.update(id,data);
        return CityData;
    } catch (error) {
       
        throw new ApiError(StatusCodes.NOT_FOUND, "City not found");
    }
}

module.exports={createCity,getAllCities};