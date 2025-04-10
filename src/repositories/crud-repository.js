
const { StatusCodes } = require('http-status-codes');
const {logger}=require('../config/logger-config.js');
const ApiError = require('../utils/ApiError.js');
class crudRepository{
    constructor(model)
    {
        this.model=model;
    }
    async create(data)
    {
        
            const response=await this.model.create(data);
            return response;
        
    }
    async delete(data)
    {
        
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            if(!response)
                {
                    throw new ApiError(StatusCodes.NOT_FOUND, 'Resource not found');
                }
            return response;
       
    }
    async get(data)
    {
       
            const response=await this.model.findByPk(data);
            if(!response)
            {
                throw new ApiError(StatusCodes.NOT_FOUND, 'Resource not found');
            }
            return response;
        
    }
    async getAll(data)
    {
        
            const response=await this.model.findAll();
            return response;
        
    }
    async update(id,data)
    {
       
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            if(response[0]===0)
                {
                    throw new ApiError(StatusCodes.NOT_FOUND, 'Resource not found');
                }
            return response;
        
    }

}


module.exports=crudRepository;