import {Router} from "express";
import userRoutes from "../modules/users/user.routes"

const router = Router();

router.get("/",(req,res)=>{

    res.json({
        success:true,
        message:"Welcome to AI Meeting Workspace API"
    });
});

router.use("/users",userRoutes);

export default router;
