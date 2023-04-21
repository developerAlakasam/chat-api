import express from "express";
import cors from 'cors'
import morgan from "morgan"
import chatgpt from './api/chatgpt/chatgpt.routes.js'
import gen from './api/generalidades/generalidades.routes.js'
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(morgan('dev'))
app.use(chatgpt)
app.use(gen)

export default app