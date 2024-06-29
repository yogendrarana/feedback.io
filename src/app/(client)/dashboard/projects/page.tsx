import React from 'react'
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import ProjectCard from './_components/project-card';
import type { IProject } from "@/db/models/project-model";
import ProjectsHeader from './_components/projects-header';
import { getProjectsByOwnerId } from '@/server/actions/project';

export default async function ProjectsPage() {
  let projects: IProject[] = [];
  const session = await auth();

  if (session?.user?.id) {
    projects = await getProjectsByOwnerId(session.user.id);
  }

  return (
    <div className={cn("w-full space-y-2")}>
      <ProjectsHeader />
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))
        ) : (
          <p>No projects found or loading...</p>
        )}
      </div>
    </div>
  )
}