"use server";

import type { z } from "zod";
import { auth } from "@/auth";
import { connectDb } from "@/db";
import { revalidatePath } from "next/cache";
import { UpdateProfileSchema } from "../schemas";
import UserModel, { IUser } from "@/db/models/user-model";

// create user with google provider
export async function createUser({
    name,
    email,
    authProvider,
    providerAccountId
}: Partial<IUser>) {
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

// update profile
export async function updateProfile(values: z.infer<typeof UpdateProfileSchema>) {
    const { name, email } = values;

    try {
        const session = await auth();
        if (!session) {
            return { error: "Not authenticated." };
        }

        await connectDb();
        const user = await UserModel.findOneAndUpdate(
            { email },
            { name },
            { new: true }
        ).exec();


        if (!user) {
            return { error: "User not found" };
        }

        revalidatePath("/dashboard/settings");
    } catch (error: any) {
        return { error: error.message || "Internal server error" };
    }
}


// delete user account
export async function deleteUserAccount(email: string) {
    try {
        const session = await auth();
        if (!session) {
            return { error: "Not authenticated." };
        }

        await connectDb();
        const user = await UserModel.findOneAndDelete({ email }).exec();
        if (!user) {
            return { error: "Project not found" };
        }

        // revalidate path
        revalidatePath("/dashboard/settings");

        return { user };
    } catch (error: any) {
        return { error: error.message || "Internal server error" };
    }
}