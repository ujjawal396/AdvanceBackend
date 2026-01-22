// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
dotenv.config({
    path: './env'
})


import connectDb from "./db/index.js";




connectDb();


























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

















