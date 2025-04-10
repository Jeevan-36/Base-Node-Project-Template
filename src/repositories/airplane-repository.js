const crudRepository =require('./crud-repository.js')
const {Airplane}=require('../models')

class AirplaneRepository extends crudRepository{
    constructor() {
        super(Airplane)
        }
}
module.exports = AirplaneRepository;