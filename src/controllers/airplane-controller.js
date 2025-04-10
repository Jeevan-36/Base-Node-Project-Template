const {AirplaneService}=require('../services/index.js')
const {StatusCodes}=require('http-status-codes');

async function createAirplane(req,res) {
    try {
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Airplane created successfully',
            data:airplane,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            success:false,
            message:error.message,
            data:{}
        })
    }
}
module.exports={createAirplane};
