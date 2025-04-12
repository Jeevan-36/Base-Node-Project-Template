const { Router } = require("express");
const airplaneRoutes=require('./airplane-routes.js')
const cityRoutes=require('./city-routes.js')
const airportRoutes=require('./airport-routes.js')
const router = Router();

router.use('/airplanes',airplaneRoutes);
router.use('/city',cityRoutes);
router.use('/airport',airportRoutes);
module.exports = router;