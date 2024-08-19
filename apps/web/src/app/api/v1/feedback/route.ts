import mongoose from "mongoose";
import { connectDb } from '@/db';
import { FEEDBACK } from '@/constants';
import UserModel from '@/db/models/user-model';
import ProjectModel from '@/db/models/project-model';
import FeedbackModel from '@/db/models/feedback-model';
import { NextRequest, NextResponse } from 'next/server';
import { CreateFeedbackSchema } from '@/server/schemas';

export async function POST(req: NextRequest) {
    // TODO: Add rate limiting to prevent abuse

    if (req.method !== 'POST') {
        return NextResponse.json({ success: false, message: 'Invalid method' }, { status: 405 })
    }

    let dbSession;
    await connectDb();
    dbSession = await mongoose.startSession();
    dbSession.startTransaction();

    const clientId = req.headers.get('x-client-id');
    const projectId = req.headers.get('x-project-id');

    if (!projectId || !clientId) {
        await dbSession.abortTransaction();
        return NextResponse.json({ success: false, message: 'Missing project id, account id, or account secret' }, { status: 400 });
    }

    try {
        // find the account and verify the secret
        const account = await UserModel.findOne({ clientId }).session(dbSession).exec();
        if (!account) {
            await dbSession.abortTransaction();
            return NextResponse.json({ success: false, message: `Invalid account id.` }, { status: 404 });
        }

        // Find the project and verify the secret
        const project = await ProjectModel.findOne({ projectId, owner: account._id }).session(dbSession).exec();
        if (!project) {
            await dbSession.abortTransaction();
            return NextResponse.json({ success: false, message: `Invalid project id or project does not belong to this account.` }, { status: 404 });
        }

        // Validate the request body
        const { feedback, type, email } = await req.json();

        if (!FEEDBACK.includes(type)) {
            await dbSession.abortTransaction();
            return NextResponse.json({ success: false, message: 'Invalid feedback type' }, { status: 400 });
        }

        if (!feedback || !type || !email) {
            await dbSession.abortTransaction();
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const validate = await CreateFeedbackSchema.safeParse({ feedback, type, email });
        if (!validate.success) {
            await dbSession.abortTransaction();
            const errorMessage = validate.error.errors.map(err => err.message).join(', ');
            return NextResponse.json({ success: false, message: errorMessage }, { status: 400 });
        }

        // Create the feedback
        const [newFeedback] = await FeedbackModel.create([{
            project: project._id,
            feedback,
            type,
            email,
        }], { session: dbSession });

        // Add the feedback to the project model feedbacks array
        project.feedbacks.push(newFeedback._id);
        await project.save();

        // Commit the transaction
        await dbSession.commitTransaction();

        // TODO: Send email to project owner with feedback details

        return NextResponse.json({ success: true, message: 'Feedback sent successfully' }, { status: 201 });
    } catch (error: any) {
        if (dbSession) {
            await dbSession.abortTransaction();
        }
        return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 });
    } finally {
        if (dbSession) {
            dbSession.endSession();
        }
    }
}