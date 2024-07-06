import React from 'react'
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import FeedbackCard from './_components/feedback-card';
import EmptyFeedback from './_components/empty-feedback';
import type { IFeedback } from '@/db/models/feedback-model';
import { getAllFeedbacksByOwnerId } from '@/server/actions/feedback';

export default async function ProjectsPage() {
  let feedbacks: IFeedback[] = [];
  const session = await auth();

  if (session?.user?.id) {
    const response = await getAllFeedbacksByOwnerId();
    feedbacks = response.feedbacks;
  }

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      {feedbacks.length > 0 && (
        <div className='space-y-2'>
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      )}

      {feedbacks.length === 0 && <EmptyFeedback />}
    </div>
  )
}