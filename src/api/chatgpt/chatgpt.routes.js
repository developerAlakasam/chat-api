import { Router } from "express";
import { chatPrompt } from "./chatgpt.js";
const router = Router()
router.post('/chatgpt',chatPrompt)
export default router