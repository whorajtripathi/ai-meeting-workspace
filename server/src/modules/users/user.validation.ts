//Zod
import {z} from "zod";

export const registerUserSchema=z.object({

    firstName: z
        .string()
        .trim()
        .min(1,"First name is required"),

    lastName:z
        .string()
        .trim()
        .min(1,"Last Name is required!!"),

    userName:z
        .string()
        .trim()
        .min(1,"UseName is required!!")
        .max(30,"Username cannot exceed 30 characters"),

    email:z
        .string()
        .trim()
        .email("Invalid Email Address"),

    password:z
        .string()
        .trim()
        .min(8,"Password must be at least 8 characters long"),








})