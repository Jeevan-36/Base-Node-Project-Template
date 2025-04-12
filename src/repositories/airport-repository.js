const crudRepository =require('./crud-repository.js')
const {Airport}=require('../models')

class AirportRepository extends crudRepository{
    constructor() {
        super(Airport)
        }
}
module.exports = AirportRepository;