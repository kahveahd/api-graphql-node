import { createConnection } from "typeorm";
import { Country } from "./entities/country";

export const connectDB = async()=>{
    await createConnection({
        type: 'mysql',
        username:'root',
        password:'',
        port:3306,
        host:'localhost',
        database:'ejercicio',
        entities:[Country],
        synchronize:true
    })
    console.log('Database connected')
}