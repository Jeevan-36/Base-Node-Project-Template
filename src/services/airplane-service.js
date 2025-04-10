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
module.exports={createAirplane};