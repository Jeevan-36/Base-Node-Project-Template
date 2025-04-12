const {CityService}=require('../services/index.js')
const {StatusCodes}=require('http-status-codes');
const ApiResponse =require('../utils/ApiResponse.js');
async function createCity(req,res) {
    try {
        const City=await CityService.createCity({
            name:req.body.name
        });
        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(StatusCodes.CREATED,City)
        )
    } catch (error) {
        return res.status(error.statusCode||500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}
async function getCities(req,res) {
    try {
        const Citys=await CityService.getAllCities();
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Citys)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function getCityById(req,res) {
    try {
        const Citys=await CityService.getCityById(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Citys)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}

async function deleteCity(req,res) {
    try {
        const Citys=await CityService.destroyCity(req.params.id);
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Citys)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
    
}
async function updateCityData(req,res) {
    try {
        const Citys=await CityService.updateCity(req.params.id,{
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        return res.status(StatusCodes.OK).json(
            new ApiResponse(StatusCodes.OK,Citys)
        )
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
    
}
module.exports={createCity,getCities};
