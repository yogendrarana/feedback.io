import React from 'react'
import { cn } from '@/lib/utils'
import { Copy, Settings, Trash } from 'lucide-react'

interface ProjectCardProps {
    project: any
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div key={project.id} className={cn("p-2 border bg-white space-y-1 rounded-md")}>
            <div className={cn("flex items-center")}>
                <p className="mr-auto mb-2.5">Project Name</p>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Settings size={14} />
                </button>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Copy size={14} />
                </button>
                <button className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'>
                    <Trash size={14} />
                </button>
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