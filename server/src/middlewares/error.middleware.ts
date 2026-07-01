import {Request, Response, NextFunction} from 'express';
import {ApiError} from '../utils/ApiError';
import { ZodError } from "zod";


export const errorHandler=(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction

)=>{

    // Handle our custom errors
    if(err instanceof ApiError){

        return res.status(err.statusCode).json({
            success:false,
            statusCode:err.statusCode,
            message:err.message,
        });
    }


    // Handle Zod validation errors
    if (err instanceof ZodError) {

        const errors=err.issues.map((issue)=>({
            field:issue.path.join("."),
            message:issue.message
        }));

        return res.status(400).json({
            success:false,
            statusCode:400,
            message:"Validation Error",
            errors,
        })
}


    return res.status(500).json({
        success:false,
        statusCode:500,
        message:"Internal Server Error",
    })
};

// after seeing 4 arguments the express get to know that this is an error handling middleware and 
// it will be called when next(err) is called in the application. This middleware will catch any 
// errors thrown in the application and send a proper response to the client with the error message 
// and status code.

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


//ZOD ERROR HANDLING
//                    Request
//                       │
//                       ▼
//                   Express
//                       │
//                       ▼
//               Validation Middleware
//                       │
//           ┌───────────┴───────────┐
//           │                       │
//           ▼                       ▼
//       Invalid                 Valid
//           │                       │
//           ▼                       ▼
//       ZodError               Controller
//           │                       │
//           ▼                       ▼
//    Error Middleware          Service
//           │                       │
//           ▼                       ▼
//      JSON Response          Repository
//                                   │
//                                   ▼
//                               MongoDB
//                                   │
//                                   ▼
//                             ApiResponse