import React from 'react'
import { cn } from '@/lib/utils'
import ProjectInfo from './project-info'
import CopyProjectId from './copy-projectid'
import DeleteProject from './delete-project'
import type { IProject } from '@/db/models/project-model'

interface ProjectCardProps {
    project: IProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div key={project.id} className={cn("p-4 border bg-white space-y-1 rounded-md")}>
            <div className={cn("flex items-center")}>
                <p className="mr-auto mb-2.5">{project.name ?? ""}</p>
                <ProjectInfo project={JSON.stringify(project)} />
                <CopyProjectId project={JSON.stringify(project)} />
                <DeleteProject projectName={project.name} projectId={project.projectId} />
            </div>


            <div className="flex flex-col gap-2 text-sm">
                <div> Project ID </div>
                <div className="flex items-center justify-between">
                    <input type="text" value={project.projectId} disabled className="text-sm flex-1 text-gray-400 bg-white" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;