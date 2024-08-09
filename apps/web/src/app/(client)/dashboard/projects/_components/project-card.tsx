"use client";

import React from 'react'
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import DeleteProject from './delete-project';

interface ProjectCardProps {
    project: any
}

const ProjectCard = (prop: ProjectCardProps) => {
    const project = prop.project;

    return (
        <div className={cn("p-4 space-y-3 border rounded-lg bg-white dark:bg-gray-800 dark:border-none")}>
            <div className={cn("flex items-center")}>
                <h1 className={cn("text-xl font-semibold")}>{project.name}</h1>
                <button
                    className="ml-auto mr-1 border dark:border-none rounded-sm p-1.5 dark:bg-gray-700 hover:bg-gray-100 dark:hover: duration-200"
                    onClick={() => {
                        navigator.clipboard.writeText(project.projectId)
                        toast.success("Copied project id to clipboard.")
                    }}
                >
                    <Copy size={16} className='dark:text-gray-400' />
                </button>
                <DeleteProject id={project.id} projectName={project.name} />
            </div>
            <div className='space-y-2'>
                <p className={cn("text-sm text-gray-500")}><strong>{project.feedbacks}</strong> feedbacks</p>
                <p className={cn("text-sm text-gray-500")}><strong>Project ID:</strong> {project.projectId}</p>
                <p className={cn("text-sm text-gray-500")}><strong>Description:</strong> {project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;