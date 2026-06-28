//Only talks to MongoDB.
// Find User
// Create User
// Update User
// Delete User

import { User } from "./user.model";
import { IUser } from "./user.types";

export class UserRepository{

    async createUser(userData: IUser){
        return await User.create(userData);         //mongodb.create(type)
    }

    // Finding user by email.
    async findByEmail(email:string){
        return await User.findOne({
            email,
        }).select("+password");                     //earlier we wrote-> password: {select:false}  so it temporaryly includes password
    }

    // Find user by ID
    async findById(id:string){
        return await User.findById(id);
    }

    // Update user.
    async updateUser(id:string, updateData:Partial<IUser>){
        return await User.findByIdAndUpdate(
            id,
            updateData,
            {
                new:true,
            }
        );
    }

    // Delete user.
    async deleteUser(id:string){
        return await User.findByIdAndDelete(id);
    }

}

export const userRepository=new UserRepository();

