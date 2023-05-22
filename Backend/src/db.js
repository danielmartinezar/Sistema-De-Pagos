import {createPool} from "mysql/promise"
import { 
    DB_HOST,
    DB_NAME, 
    DB_PASSWORD,
    DB_PORT,
    DB_USER 
} from "./config"


export const conn = createPool({
user: DB_USER,
password: DB_PASSWORD,
host: DB_HOST,
port: DB_PORT,
database: DB_NAME
})
