import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect('mongodb://localhost:27017/', {
        dbName: "JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}