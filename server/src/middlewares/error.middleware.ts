import {Request, Response, NextFunction} from 'express';
import {ApiError} from '../utils/ApiError';

export const errorHandler=(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction

)=>{

    if(err instanceof ApiError){

        return res.status(err.statusCode).json({
            success:false,
            statusCode:err.statusCode,
            message:err.message,
        });
    }

    return res.status(500).json({
        success:false,
        statusCode:500,
        message:"Internal Server Error",
    })
};


//                     Error Occurs
//                          │
//                          ▼
//                errorHandler(err)
//                          │
//           ┌──────────────┴──────────────┐
//           │                             │
//           ▼                             ▼
// err instanceof ApiError?           No
//           │                             │
//          Yes                            │
//           │                             │
//           ▼                             ▼
// Use err.statusCode             statusCode = 500
// Use err.message                message = "Internal Server Error"
//           │                             │
//           └──────────────┬──────────────┘
//                          ▼
//               Send Standard JSON Response