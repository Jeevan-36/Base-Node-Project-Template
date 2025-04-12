const {Router}=require('express')
const {CityController}=require('../../controllers/index.js')
const {CityMiddlewares}=require('../../middlewares/index.js')
const router=Router()
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);
router.get('/',CityController.getCities);
// router.get('/:id',CityController.getCityById);
// router.delete('/:id',CityController.deleteCity);
// router.put('/:id', CityMiddlewares.validateCreateRequest,CityController.updateCityData)
module.exports=router;