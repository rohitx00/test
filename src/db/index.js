import dotenv from 'dotenv';
dotenv.config();


import mongoose from "mongoose";



const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("MongodB Connect!!");
    } catch (error) {
        console.log(error);
    }
    
}



export default connectDB
 