"use server"

import { z } from "zod";
import { auth } from "@/auth";
import { connectDb } from "@/db";
import { v4 as uuid } from "uuid";
import { revalidatePath } from "next/cache";
import { CreateProjectSchema } from "../schemas";
import ProjectModel from "@/db/models/project-model";
import UserModel from "@/db/models/user-model";
import FeedbackModel from "@/db/models/feedback-model";

export async function createProject(values: z.infer<typeof CreateProjectSchema>) {
    try {
        await connectDb();

        const session = await auth();
        if (!session?.user?.id) {
            return { error: "Not authenticated" };
        }

        let projectId = uuid();

        // check if project with the same name exists
        const projectExists = await ProjectModel.findOne({ name: values.name }).exec();
        if (projectExists) {
            return { error: "Project with this name already exists. Please select a different name." };
        }

        const projectData = {
            ...values,
            projectId,
            owner: session.user.id
        };

        const project = await ProjectModel.create(projectData);
        if (!project) {
            return { error: "Failed to create project" };
        }

        // insert project id in user's project list
        await UserModel.findByIdAndUpdate(session.user.id, { $push: { projects: project._id } }).exec();

        // revalidate path
        revalidatePath("/dashboard/projects");

        return { project };
    } catch (error: any) {
        if (error.code === 11000 && error.keyPattern?.projectId) {
            return { error: "Error while generating Project ID" };
        }
        return { error: error.message || "Internal server error" };
    }
}

// get projects by owner id
export async function getProjectsByOwnerId(ownerId: string) {
    try {
        await connectDb();
        const session = await auth();

        if (!session?.user?.id) {
            return { success: false, message: "User not authenticated", projects: [] };
        }

        const projects = await ProjectModel.find({ owner: ownerId }).populate("feedbacks").sort({ createdAt: -1 }).exec();
        return { success: true, message: "Projects fetched successfully", projects };
    } catch (error: any) {
        return { success: false, message: error.message || "Internal Server Error", projects: [] };
    }
}

// delete project
export async function deleteProject(id: string) {
    try {
        const currentUser = await auth();
        if (!currentUser) {
            return { success: false, message: "Not authenticated." };
        }

        await connectDb();
        const project = await ProjectModel.findById(id).exec();
        if (!project) {
            return { success: false, message: "Project not found" };
        }

        await FeedbackModel.deleteMany({ project: project._id }).exec();
        await ProjectModel.findByIdAndDelete(id).exec();

        // revalidate path
        revalidatePath("/dashboard/projects");

        return { success: true, message: "Project deleted successfully" };
    } catch (error: any) {
        return { success: false, message: error.message || "Internal server error" };
    }
}