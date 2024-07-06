"use server"

import { z } from "zod";
import { auth } from "@/auth";
import { connectDb } from "@/db";
import { v4 as uuid } from "uuid";
import { revalidatePath } from "next/cache";
import { CreateProjectSchema } from "../schemas";
import ProjectModel, { IProject } from "@/db/models/project-model";

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

        // check if the project id has already been used
        const projectIdAlreadyUsed = await ProjectModel.findOne({ projectId }).exec();
        if (projectIdAlreadyUsed) {
            projectId = uuid();
        }

        // TODO: add project secret as well in future

        const projectData = {
            ...values,
            projectId,
            owner: session.user.id
        };

        const project = await ProjectModel.create(projectData);
        if (!project) {
            return { error: "Failed to create project" };
        }

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
export async function getProjectsByOwnerId() {
    try {
        await connectDb();
        const session = await auth();

        if (!session?.user?.id) {
            return { success: false, message: "User not authenticated", projects: [] };
        }

        const projects = await ProjectModel.find({ owner: session.user.id }).exec();
        return { success: true, message: "Projects fetched successfully", projects };
    } catch (error: any) {
        return { success: false, message: error.message || "Internal Server Error", projects: [] };
    }
}

// delete project
export async function deleteProject(projectId: string) {
    try {
        const currentUser = await auth();
        if (!currentUser) {
            return { error: "Not authenticated." };
        }

        await connectDb();
        const project = await ProjectModel.findOneAndDelete({ projectId }).exec();
        if (!project) {
            return { error: "Project not found" };
        }

        // TODO: delete all feedback messages related to this project

        // revalidate path
        revalidatePath("/dashboard/projects");

        return { project };
    } catch (error: any) {
        return { error: error.message || "Internal server error" };
    }
}