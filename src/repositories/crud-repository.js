
const {logger}=require('../config/logger-config.js')
class crudRepository{
    constructor(model)
    {
        this.model=model;
    }
    async create(data)
    {
        
            const respose=await this.model.create(data);
            return respose;
        
    }
    async delete(data)
    {
        try {
            const respose=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return respose;
        } catch (error) {
            logger.error("something went wrong in delete function in crud repo");
            throw error;
        }
    }
    async get(data)
    {
        try {
            const respose=await this.model.findByPk(data);
            return respose;
        } catch (error) {
            logger.error("something went wrong in get function in crud repo");
            throw error;
        }
    }
    async getAll(data)
    {
        try {
            const respose=await this.model.findAll();
            return respose;
        } catch (error) {
            logger.error("something went wrong in get All function in crud repo");
            throw error;
        }
    }
    async update(id,data)
    {
        try {
            const respose=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return respose;
        } catch (error) {
            logger.error("something went wrong in get function in crud repo");
            throw error;
        }
    }

}


module.exports=crudRepository;