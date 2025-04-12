const {AirportService}=require('../services/index.js')
const {StatusCodes}=require('http-status-codes');
const ApiResponse =require('../utils/ApiResponse.js');
async function createAirport(req,res) {
    try {
        const Airport=await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId

        });
        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(StatusCodes.CREATED,Airport)
        )
    } catch (error) {
        return res.status(error.statusCode||500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}
async function getAirports(req,res) {
    try {
        const Airports=await AirportService.getAirport();
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Airports)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function getAirportById(req,res) {
    try {
        const Airports=await AirportService.getAirportById(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Airports)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function deleteAirport(req,res) {
    try {
        const Airports=await AirportService.destroyAirport(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Airports)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
    
}
async function updateAirportData(req,res) {
    try {
        const Airports=await AirportService.updateAirport(req.params.id,{
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId

        });
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Airports)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
    
}
module.exports={createAirport,getAirports,getAirportById,deleteAirport,updateAirportData};
