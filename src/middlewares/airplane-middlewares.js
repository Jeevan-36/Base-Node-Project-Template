const {StatusCodes}=require("http-status-codes");
const {ApiError}=require('../utils/index')
const validateCreateRequest=(req,res,next)=>{
    if(!req.body.modelNumber || !req.body.capacity)
    {
        return res.status(StatusCodes.BAD_REQUEST).json(
            
            new ApiError(StatusCodes.BAD_REQUEST,'Model number and capacity are required')
        );
    }
    else return next();
}
module.exports={validateCreateRequest};