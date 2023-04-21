import { Router } from "express";
import { getGeneralidades } from "./generalidades.js";
const router = Router()
router.get('/gen/:brand',getGeneralidades)
export default router