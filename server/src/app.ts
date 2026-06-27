//  Contains
//->Express app
//->Middleware
//->Routes


import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIII!!");
    
    res.status(200).json({
        success:true,
        message:"AI Meeting server is running successfully"
    });
})

export default app;