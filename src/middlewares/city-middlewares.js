const {StatusCodes}=require("http-status-codes");
const {ApiError}=require('../utils/index')
const validateCreateRequest=(req,res,next)=>{
    if(!req.body.name)
    {
        return res.status(StatusCodes.BAD_REQUEST).json(
            
            new ApiError(StatusCodes.BAD_REQUEST,'name is required')
        );
    }
    else return next();
}
module.exports={validateCreateRequest};