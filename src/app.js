import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))  // to prevent cors error
app.use(express.json({limit: "16kb"})) // we use this so that we can parse json data 
app.use(express.urlencoded({extended: true, limit: "16kb"}))//parese data from url
app.use(express.static("public"))
app.use(cookieParser())//parse data from cookie


export {app} ;