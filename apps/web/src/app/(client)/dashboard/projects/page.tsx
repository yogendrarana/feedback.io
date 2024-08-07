import React from 'react'
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import Projects from './_components/projects';
import EmptyProjects from './_components/empty-projects';
import { getProjectsByOwnerId } from '@/server/actions/project';

export default async function ProjectsPage() {
  let projects: any[] = [];
  const session = await auth();

  if (session?.user?.id) {
    const res = await getProjectsByOwnerId(session.user.id);
    projects = JSON.parse(JSON.stringify(res.projects.map(p => ({
      id: p._id.toString(),
      name: p.name,
      projectId: p.projectId,
      description: p.description,
      feedbacks: p.feedbacks.length,
      createdAt: p.createdAt.toISOString(),
    }))));
  }

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      {
        projects.length > 0
          ? <Projects projects={projects} />
          : <EmptyProjects />
      }
    </div>
  )
}