"use server"

import { auth } from "@/auth";
import { connectDb } from "@/db";
import FeedbackModel from "@/db/models/feedback-model";
import ProjectModel from "@/db/models/project-model";
import { revalidatePath } from "next/cache";

export const getFeedbackByProjectId = async (projectId: string) => {
    try {
        await connectDb();
        const feedbacks = await FeedbackModel.find({ project: projectId });
        return feedbacks;
    } catch (err: any) {
        return [];
    }
}


export const getAllFeedbacksByOwnerId = async (ownerId: string) => {
    try {
        await connectDb();
        const session = await auth();

        if (!session?.user?.id) {
            return { success: false, message: "User not authenticated", feedbacks: [] };
        }

        const ownedProjects = await ProjectModel.find({ owner: ownerId });
        const feedbacks = await FeedbackModel.find({ project: { $in: ownedProjects.map(p => p._id) } })
            .populate("project")
            .select("-__v")
            .sort({ createdAt: -1 });
        return { success: true, message: "Feedbacks fetched successfully", feedbacks };
    } catch (err: any) {
        return { success: false, message: err.message, feedbacks: [] };
    }
}


export const deleteFeedback = async (feedbackId: string) => {
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, message: "User not authenticated" };
    }

    try {
        await connectDb();
        // check if the feedback belongs to the project of the authenticated user
        const feedbackBelongsToUser = await ProjectModel.findOne({
            owner: session.user.id,
            feedbacks: feedbackId
        });
        if (!feedbackBelongsToUser) {
            return { success: false, message: "Not authorised!" };
        }

        const result = await FeedbackModel.deleteOne({ _id: feedbackId });
        if (result.deletedCount === 0) {
            return { success: false, message: "Feedback not found" };
        }

        // revalidate the route
        revalidatePath("/dashboard/feedbacks");
        return { success: true, message: "Feedback deleted successfully" };
    } catch (err: any) {
        return { success: false, message: err.message };
    }
}