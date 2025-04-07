import { StatusCodes } from "http-status-codes"

export const info=(req,res)=>{
    res.status(StatusCodes.OK).json({
        success:true,
        message:"Welcome to the API",
        error:{},
        data:{}
    })
}