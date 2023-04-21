import mysql from 'mysql'
import {config as dotenv} from 'dotenv'
dotenv()
export const connection = mysql.createPool({
    host: process.env.DB_HOST||'localhost',
    user: process.env.DB_USER||'admin',
    password: process.env.DB_PASSWORD||'',
    database: process.env.DB_NAME||''
})