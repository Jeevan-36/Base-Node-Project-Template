const {StatusCodes}=require("http-status-codes");
const {ApiError}=require('../utils/index')
const validateCreateRequest=(req,res,next)=>{
    if(!req.body.name || !req.body.cityId || 
        !req.body.address || !req.body.code
    )
    {
        return res.status(StatusCodes.BAD_REQUEST).json(
            
            new ApiError(StatusCodes.BAD_REQUEST,
                "Invalid request, please provide all required fields")
                )
        
    }
    else return next();
}
module.exports={validateCreateRequest};