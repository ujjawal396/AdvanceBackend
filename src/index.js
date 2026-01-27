// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
dotenv.config({
    path: './env'
})


import connectDb from "./db/index.js";




connectDb().
then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️   Server is running at port : ${process.env.PORT}`);
    })
})

.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


























//one way of connect to database

/*import express from "express";
const app=express();
import { DB_NAME } from "./constant";

(async ()=>{

    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERRR: ", error);
            //throw error
            // you can also use throw keyword to throw error

        })


    }catch(error){
        console.error("ERROR :",error);
    }

    
})()*/

















