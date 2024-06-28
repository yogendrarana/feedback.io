"use server";

import { connectDb } from "@/db";
import UserModel, { IUserModel } from "@/db/models/user-model";

// create user with google provider
export async function createUser({
    name,
    email,
    authProvider,
    providerAccountId
}: Partial<IUserModel>) {
    try {
        await connectDb();
        const user = await UserModel.create({
            name,
            email,
            authProvider,
            providerAccountId,
        });

        console.log("user created", user);

        return user;
    } catch (err: any) {
        return null;
    }
}

// get user by google id
export async function getUserByProviderAccountId(providerAccountId: string) {
    try {
        await connectDb();
        const user = await UserModel.findOne({ providerAccountId });

        if (!user) {
            return null;
        }

        return user;
    } catch (err: any) {
        return null;
    }
}

// get user by email
export async function getUserByEmail(email: string) {
    try {
        await connectDb();
        const user = await UserModel.findOne({ email });

        if (!user) {
            return null;
        }

        return user;
    } catch (err: any) {
        return null;
    }
}