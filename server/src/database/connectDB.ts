import mongoose from "mongoose";
import {env} from "../config/env";

export const connectDB=async()=>{

    try{
        await mongoose.connect(env.MONGO_URI);
        console.log("MongoDB Connected Successfully!!");
    }catch(e){
        console.error("MongoDB Connection Failed!!");
        console.error(e);
        process.exit(1);
    }
};
