const {Router}=require('express')
const {AirplaneController}=require('../../controllers/index.js')
const {AirplaneMiddlewares}=require('../../middlewares/index.js')
const router=Router()
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);
module.exports=router;