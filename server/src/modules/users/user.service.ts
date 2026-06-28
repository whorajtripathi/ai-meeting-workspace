//Contains business logic.
// Register User
// Hash Password
// Generate JWT
// Send Verification Email


import bcrypt from "bcrypt";
import { IUser } from "./user.types";
import { userRepository, UserRepository } from "./user.repository";

export class UserService{

    async register(userData: IUser){

        const existingUser= await userRepository.findByEmail(userData.email);

        if(existingUser){
            throw new Error("Email already exists");
        }

        const hashPassword=await bcrypt.hash(userData.password,10);

        userData.password=hashPassword;

        return await userRepository.createUser(userData);
    }
}

export const userService= new UserService();