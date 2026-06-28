//Stores TypeScript interfaces and enums.
export enum UserRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
}

export interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;

    avatar?: string;

    role: UserRole;

    isEmailVerified: boolean;

    isActive: boolean;

    lastLogin?: Date;

    createdAt: Date;

    updatedAt: Date;
}