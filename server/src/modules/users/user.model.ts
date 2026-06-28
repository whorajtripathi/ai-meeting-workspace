//Defines how data is stored in MongoDB.

import { Schema, model } from "mongoose";
import { IUser, UserRole } from "./user.types";

const userSchema = new Schema<IUser>(
{
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    avatar: {
        type: String,
        default: "",
    },
    role: {
        type:String,
        enum:Object.values(UserRole),
        default:UserRole.MEMBER
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    lastLogin: {
        type: Date,
    },
    

},{
    timestamps: true,
  }

);

export const User=model<IUser>("User",userSchema);

