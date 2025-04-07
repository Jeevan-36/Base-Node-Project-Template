import { Router } from "express";
import { info } from "../../controllers/info-controller.js";
const router=Router();

router.get('/info',info)
export default router;
