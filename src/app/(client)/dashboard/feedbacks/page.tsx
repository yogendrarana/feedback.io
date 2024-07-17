import React from 'react'
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import EmptyFeedback from './_components/empty-feedback';
import FeedbackTable from './_components/feedback-table';
import { getAllFeedbacksByOwnerId } from '@/server/actions/feedback';

export default async function FeedbacksPage() {
  let feedbacks: any[] = [];
  const session = await auth();

  if (session?.user?.id) {
    const res = await getAllFeedbacksByOwnerId(session.user.id);
    feedbacks = res.feedbacks.map(f => ({
      id: f._id,
      category: f.category,
      project: f.project.name,
      message: f.message,
      createdAt: f.createdAt
    }));
  }

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      {
        feedbacks.length > 0
          ? <FeedbackTable data={feedbacks} />
          : <EmptyFeedback />
      }
    </div>
  )
}