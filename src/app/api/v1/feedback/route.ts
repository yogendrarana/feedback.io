import { connectDb } from '@/db';
import { FEEDBACK_TYPE } from '@/constants';
import UserModel from '@/db/models/user-model';
import ProjectModel from '@/db/models/project-model';
import FeedbackModel from '@/db/models/feedback-model';
import { NextRequest, NextResponse } from 'next/server';
import { CreateFeedbackSchema } from '@/server/schemas';

export async function POST(req: NextRequest) {
    // TODO: Add rate limiting to prevent abuse
    // TODO: Add CORS headers since this endpoint will be called from different domains
    if (req.method !== 'POST') {
        return NextResponse.json({ success: false, message: 'Invalid method' }, { status: 405 })
    }

    await connectDb();
    const projectId = req.headers.get('x-project-id');
    const accountId = req.headers.get('x-account-id');

    if (!projectId || !accountId) {
        return NextResponse.json({ success: false, message: 'Missing project id or project id' }, { status: 400 });
    }

    try {
        // find the account and verify the secret
        const account = await UserModel.findOne({ accountId });
        if (!account) {
            return NextResponse.json({ success: false, message: `Invalid account id.` }, { status: 404 });
        }

        // Find the project and verify the secret
        const project = await ProjectModel.findOne({ projectId });
        if (!project) {
            return NextResponse.json({ success: false, message: `Invalid project id.` }, { status: 404 });
        }

        // Validate the request body
        const { message, category, email } = await req.json();

        if (!FEEDBACK_TYPE.includes(category)) {
            return NextResponse.json({ success: false, message: 'Invalid feedback category' }, { status: 400 });
        }

        if (!message || !category || !email) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const validate = await CreateFeedbackSchema.safeParse({ message, category, email });
        if (!validate.success) {
            const errorMessage = validate.error.errors.map(err => err.message).join(', ');
            return NextResponse.json({ success: false, message: errorMessage }, { status: 400 });
        }

        // Create the feedback
        const feedback = await FeedbackModel.create({
            project: project._id,
            message,
            category,
            email: email || null,
        });

        // Add the feedback to the project model feedbacks array
        project.feedbacks.push(feedback._id);
        await project.save();

        // TODO: Send email to project owner with feedback details

        return NextResponse.json({ success: true, message: 'Feedback sent successfully' }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message || 'Internal server error' });
    }
}