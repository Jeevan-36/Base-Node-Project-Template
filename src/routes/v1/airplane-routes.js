const {Router}=require('express')
const {AirplaneController}=require('../../controllers/index.js')
const {AirplaneMiddlewares}=require('../../middlewares/index.js')
const router=Router()
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);
router.get('/',AirplaneController.getAirplanes);
router.get('/:id',AirplaneController.getAirplaneById);
router.delete('/:id',AirplaneController.deleteAirplane);
router.put('/:id', AirplaneMiddlewares.validateCreateRequest,AirplaneController.updateAirplaneData)
module.exports=router;