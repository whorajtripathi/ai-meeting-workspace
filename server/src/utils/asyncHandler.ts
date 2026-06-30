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

//                 SERVER STARTS
//                      │
//                      ▼
//         asyncHandler(register)
//                      │
//                      ▼
//       Returns Wrapped Function
//                      │
//                      ▼
//       Express Stores That Function
// ═══════════════════════════════════════
//            USER SENDS REQUEST
// ═══════════════════════════════════════
//                      │
//                      ▼
//      Express Executes Wrapped Function
//                      │
//                      ▼
//           fn(req,res,next)
//                      │
//                      ▼
//              register()
//                      │
//                      ▼
//          userService.register()
//                      │
//                      ▼
//          userRepository.create()
//                      │
//                      ▼
//                MongoDB
//             /              \
//            /                \
//       Success            Exception
//          │                   │
//          ▼                   ▼
//    Response Sent      Promise Rejected
//                              │
//                              ▼
//                         .catch(next)
//                              │
//                              ▼
//                   Global Error Middleware
//                              │
//                              ▼
//                   Standard Error Response