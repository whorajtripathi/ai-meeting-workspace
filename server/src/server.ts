//Contains
//->Start server
//->Listen on port
//->Database connection (later)

import dotenv from "dotenv";
import app from "./app";
import {connectDB} from "./database/connectDB";
import {env} from "./config/env";

const startServer=async()=>{
    await connectDB();

    app.listen(env.PORT,()=>{
        console.log(`Successfully running server from PORT ${env.PORT}`);
    });
};

startServer();


