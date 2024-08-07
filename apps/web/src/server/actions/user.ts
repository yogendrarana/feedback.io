"use server";

import type { z } from "zod";
import mongoose from "mongoose";
import { connectDb } from "@/db";
import { v4 as uuid } from "uuid";
import { auth, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { UpdateProfileSchema } from "../schemas";
import ProjectModel from "@/db/models/project-model";
import UserModel, { IUser } from "@/db/models/user-model";
import FeedbackModel from "@/db/models/feedback-model";


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
            clientId: uuid()
        });

        if (!user) {
            return { success: false, message: "Failed to create user." };
        }

        // TODO: send welcome email to user if user is created successfully

        return { success: true, message: "User created successfully." };
    } catch (err: any) {
        return { success: false, message: err.message || "Internal server error" };
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
    const authSession = await auth();

    try {
        if (!authSession) {
            return { success: false, message: "Not authenticated." };
        }

        await connectDb();
        const user = await UserModel.findOneAndUpdate(
            { email },
            { name },
            { new: true }
        ).exec();


        if (!user) {
            return { success: false, message: "User not found" };
        }

        revalidatePath("/dashboard/settings");
        return { success: true, message: "Profile updated successfully." };
    } catch (error: any) {
        return { message: error.message || "Internal server error" };
    }
}


// delete user account
export async function deleteUser() {
    const authSession = await auth();
    let dbSession;

    try {
        if (!authSession) {
            return { success: false, message: "Not authenticated." };
        }

        await connectDb();

        dbSession = await mongoose.startSession();
        dbSession.startTransaction();

        const user = await UserModel.findById(authSession.user.id).session(dbSession).exec();
        if (!user) {
            await dbSession.abortTransaction();
            return { success: false, message: "User not found" };
        }

        // delete user, his projects and feedbacks
        await UserModel.findByIdAndDelete(authSession.user.id).session(dbSession).exec();
        await ProjectModel.deleteMany({ owner: authSession.user.id }).session(dbSession).exec();
        // TODO: delete feedbacks belonging to the projects of the user
        await FeedbackModel.deleteMany({ project: { $in: user.projects } }).session(dbSession).exec();

        // TODO: send email to user with account deletion confirmation

        await dbSession.commitTransaction();

        // Perform server-side signout
        await signOut({ redirect: false });

        return { success: true, message: "Account deleted successfully." };
    } catch (error: any) {
        if (dbSession) {
            await dbSession.abortTransaction();
        }
        return { success: false, message: error.message || "Internal server error" };
    } finally {
        if (dbSession) {
            dbSession.endSession();
        }
    }
}