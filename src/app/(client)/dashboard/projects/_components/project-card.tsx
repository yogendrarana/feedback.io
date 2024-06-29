import React from 'react'
import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import DeleteProject from './delete-project'
import ProjectSetting from './project-setting'
import type { IProject } from '@/db/models/project-model'

interface ProjectCardProps {
    project: IProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div key={project.id} className={cn("p-4 border bg-white space-y-1 rounded-md")}>
            <div className={cn("flex items-center")}>
                <p className="mr-auto mb-2.5">{project.name ?? ""}</p>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Copy size={14} />
                </button>
                <ProjectSetting project={project} />
                <DeleteProject projectName={project.name} projectId={project.id} />
            </div>

            <div className='flex items-center justify-between text-sm text-gray-400'>
                <p>Feedbacks</p>
                <span>21 Feedbacks</span>
            </div>

            <div className='flex items-center justify-between text-sm text-gray-400'>
                <p>Created at</p>
                <span>August 12, 2023</span>
            </div>
        </div>
    )
}

export default ProjectCard;