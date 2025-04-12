const {Router}=require('express')
const {FlightController}=require('../../controllers/index.js')
const {FlightMiddlewares}=require('../../middlewares/index.js')
const router=Router()
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);
router.get('/',FlightController.getAllFlights)
module.exports=router;