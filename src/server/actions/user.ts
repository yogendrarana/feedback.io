"use server";

import { connectDb } from "@/db";
import UserModel from "@/db/models/user-model";

export async function getUserById(userId: string) {
    try {
        await connectDb();

        const user = await UserModel.findById(userId);

        if (!user) {
            return null;
        }

        // Convert the Mongoose document to a plain JavaScript object
        return JSON.parse(JSON.stringify(user));
    } catch (error: any) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
    }
}