"use server"

import { auth } from "@/auth";
import { connectDb } from "@/db";
import FeedbackModel from "@/db/models/feedback-model";
import ProjectModel from "@/db/models/project-model";

export const getFeedbackByProjectId = async (projectId: string) => {
    try {
        await connectDb();
        const feedbacks = await FeedbackModel.find({ projectId });
        return feedbacks;
    } catch (err: any) {
        return [];
    }
}


export const getAllFeedbacksByOwnerId = async () => {
    try {
        await connectDb();
        const session = await auth();

        if (!session?.user?.id) {
            return { success: false, message: "User not authenticated", feedbacks: [] };
        }

        const ownedProjects = await ProjectModel.find({ owner: session.user.id });
        const feedbacks = await FeedbackModel.find({ project: { $in: ownedProjects.map(p => p._id)}});
        return { success: true, message: "Feedbacks fetched successfully", feedbacks };
    } catch (err: any) {
        return { success: false, message: err.message, feedbacks: [] };
    }
} 