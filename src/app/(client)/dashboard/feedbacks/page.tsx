import React from 'react'
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import { IProject } from '@/db/models/project-model';
import FeedbackList from './_components/feedback-list';
import EmptyFeedback from './_components/empty-feedback';
import type { IFeedback } from '@/db/models/feedback-model';
import { getProjectsByOwnerId } from '@/server/actions/project';
import { getAllFeedbacksByOwnerId } from '@/server/actions/feedback';

export default async function FeedbacksPage() {
  let projects: IProject[] = [];
  let feedbacks: IFeedback[] = [];
  const session = await auth();

  if (session?.user?.id) {
    const res = await getAllFeedbacksByOwnerId();
    feedbacks = res.feedbacks;

    const response = await getProjectsByOwnerId()
    projects = response.projects;
  }

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      <FeedbackList projects={JSON.stringify(projects)} feedbacks={JSON.stringify(feedbacks)} />
      {feedbacks.length === 0 && <EmptyFeedback />}
    </div>
  )
}