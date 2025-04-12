const {Router}=require('express')
const {AirportController}=require('../../controllers/index.js')
const {AirportMiddlewares}=require('../../middlewares/index.js')
const router=Router()
router.post('/',
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);
router.get('/',AirportController.getAirports);
router.get('/:id',AirportController.getAirportById);
router.delete('/:id',AirportController.deleteAirport);
router.put('/:id', AirportMiddlewares.validateCreateRequest,AirportController.updateAirportData)
module.exports=router;