const {AirplaneService}=require('../services/index.js')
const {StatusCodes}=require('http-status-codes');
const ApiResponse =require('../utils/ApiResponse.js');
async function createAirplane(req,res) {
    try {
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(StatusCodes.CREATED,airplane)
        )
    } catch (error) {
        return res.status(error.statusCode||500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}
async function getAirplanes(req,res) {
    try {
        const airplanes=await AirplaneService.getAirplane();
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,airplanes)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function getAirplaneById(req,res) {
    try {
        const airplanes=await AirplaneService.getAirplaneById(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,airplanes)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function deleteAirplane(req,res) {
    try {
        const airplanes=await AirplaneService.destroyAirplane(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,airplanes)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
    
}
async function updateAirplaneData(req,res) {
    try {
        const airplanes=await AirplaneService.updateAirplane(req.params.id,{
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,airplanes)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
    
}
module.exports={createAirplane,getAirplanes,getAirplaneById,deleteAirplane,updateAirplaneData};
