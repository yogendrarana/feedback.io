import React from 'react'
import { cn } from '@/lib/utils';
import ProjectCard from './project-card';
import ProjectsHeader from './projects-header';
import { IProject } from '@/db/models/project-model';

interface ProjectsProps {
    projects: any[]
}

const Projects = (props: ProjectsProps) => {
    const projects = props.projects;

    return (
        <div className={cn("space-y-2")}>
            <ProjectsHeader projects={projects} />
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3")}>
                {
                    projects.map((project: Partial<IProject>, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;