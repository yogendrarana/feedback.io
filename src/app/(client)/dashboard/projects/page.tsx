import React from 'react'
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import ProjectCard from './_components/project-card';
import EmptyProjects from './_components/empty-projects';
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
    <div className={cn("h-full p-2 border overflow-y-auto rounded-md flex flex-col gap-2")}>
      <ProjectsHeader projects={projects} />

      {projects.length > 0 && (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {projects.length === 0 && <EmptyProjects />}
    </div>
  )
}