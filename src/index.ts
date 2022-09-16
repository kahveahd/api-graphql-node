import app from "./app";
import { connectDB } from "./db";
import { SERVER_PORT } from "./config";


function serverUp (){
    try{
    connectDB()

    app.listen(SERVER_PORT)
    console.log(`Application run for the port: ${SERVER_PORT}`)
    }
    catch(error){
        console.log(error)
    }
}

serverUp()