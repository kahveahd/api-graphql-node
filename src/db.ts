import { createConnection } from "typeorm";
import { Country } from "./entities/country";

import './config'
import { DATABASE_DATABASE, DATABASE_HOST, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "./config";


export const connectDB = async()=>{
    await createConnection({
        type: 'mysql',
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        port:     Number(DATABASE_PORT),
        host:     DATABASE_HOST,
        database: DATABASE_DATABASE,
        entities:[Country],
        synchronize:true
    })
    console.log('Database connected')
}