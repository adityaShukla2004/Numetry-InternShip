import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()

const DbURI = process.env.DB_URI;

const DbConnect =()=>{
    mongoose.connect(DbURI).then(()=>{
        console.log("Database connected successfully")
    }).catch((error)=>{
        console.log(error)
    })
    
}

export default DbConnect;




