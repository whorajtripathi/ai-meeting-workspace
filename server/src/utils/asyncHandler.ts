import { Request,Response,NextFunction } from "express";

type AsyncController=(
    req:Request,
    res:Response,
    next:NextFunction
)=>Promise<unknown>;

export const asyncHandler=
        (fn:AsyncController)=>
        ( req:Request, res:Response, next:NextFunction )=>{
            Promise.resolve(
                fn(req,res,next)
            ).catch(next);
        }

// Request
// ↓
// asyncHandler
// ↓
// Controller
// ↓
// Service
// ↓
// Repository
// ↓
// MongoDB
// ↓
// ❌ Error?
// ↓
// .catch(next)
// ↓
// Global Error Middleware
// ↓
// JSON Response