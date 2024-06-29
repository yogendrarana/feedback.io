"use server"

import { z } from "zod";
import { connectDb } from "@/db";
import { v4 as uuid } from "uuid";
import { CreateProjectSchema } from "../schemas";
import ProjectModel from "@/db/models/project-model";
import { auth } from "@/auth";

export async function createProject(values: z.infer<typeof CreateProjectSchema>) {
    try {
        await connectDb();
        
        const session = await auth();
        if (!session?.user?.id) {
            return { error: "Not authenticated" };
        }

        let projectId = uuid();

        // check if project with the same name exists
        const projectExists = await getProjectByName(values.name);
        if (projectExists.exists) {
            return {
                error: "Project with this name already exists. Please select a different name.",
            };
        }

        // check if the project id has already been used
        const projectIdAlreadyUsed = await getProjectByProjectId(projectId);
        if (projectIdAlreadyUsed) {
            projectId = uuid();
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

        return { project };
    } catch (error: any) {
        console.error("Error creating project:", error);
        return { error: "An unexpected error occurred" };
    }
}

// Check if the project with the same name exists
export async function getProjectByName(name: string) {
    try {
        await connectDb();

        const project = await ProjectModel.findOne({ name });
        if (project) {
            return {
                project,
                exists: true
            };
        }

        return {
            project: null,
            exists: false
        };
    } catch (error: any) {
        return {
            project: null,
            exists: false
        };
    }
}

// Check if the project with the same projectId exists
export async function getProjectByProjectId(projectId: string) {
    try {
        await connectDb();

        const project = await ProjectModel.findOne({ projectId });
        if (project) {
            return {
                project: project,
                exists: true
            };
        }

        return {
            project: null,
            exists: false
        };
    } catch (error: any) {
        return {
            project: null,
            exists: false
        };
    }
}