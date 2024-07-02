import { z } from 'zod';
import { connectDb } from '@/db';
import ProjectModel from '@/db/models/project-model';
import FeedbackModel from '@/db/models/feedback-model';
import { NextRequest, NextResponse } from 'next/server';
import { CreateFeedbackSchema } from '@/server/schemas';

export default async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ success: false, message: 'Invalid method' }, { status: 405 })
    }

    await connectDb();
    const projectId = req.headers.get('x-project-id');
    const projectSecret = req.headers.get('x-project-secret');

    if (!projectId || !projectSecret) {
        return NextResponse.json({ success: false, message: 'Missing project ID or secret' }, { status: 400 });
    }

    try {
        // Find the project and verify the secret
        const project = await ProjectModel.findOne({ projectId });
        if (!project) {
            return NextResponse.json({ message: 'Project not found or invalid secret' }, { status: 404 });
        }

        // Validate the request body
        const { message, category, userEmail } = await req.json();
        const validate = await CreateFeedbackSchema.safeParse({ message, category, userEmail });
        if (!validate.success) {
            return NextResponse.json({ success: false, message: validate.error.errors[0].message || 'Invalid request body' }, { status: 400 });
        }

        if (!message || !category || !userEmail) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Create the feedback
        await FeedbackModel.create({
            projectId: project._id,
            message,
            category,
            userEmail: userEmail || undefined,
        });

        // TODO: Send email to project owner with feedback details

        return NextResponse.json({ success: true, message: 'Feedback received successfully' }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message || 'Internal server error' });
    }
}