import app from "./app";
import { connectDB } from "./db";

const port = 3002

function serverUp (){
    try{
    connectDB()

    app.listen(port)
    console.log('Application run for the port:'+port)
    }
    catch(error){
        console.log(error)
    }
}

serverUp()