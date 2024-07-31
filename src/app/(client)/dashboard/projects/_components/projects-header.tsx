"use client";

import React from 'react'
import { cn } from '@/lib/utils'
import { Folder, Plus } from 'lucide-react'
// import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CreateProject } from './create-project'

interface ProjectsHeaderProps {
    projects: any[]
}

const ProjectsHeader = ({ projects }: ProjectsHeaderProps) => {
    return (
        <div className={cn("h-[var(--projects-header-height)] flex gap-x-2 items-center justify-between")}>
            {/* <Input
                disabled
                placeholder="Search project ..."
                value=""
                onChange={(event) =>
                    console.log(event.target.value)
                }
                className="flex-1 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
            /> */}

            <div className="h-full ml-auto flex gap-2">
                {/* TODO: If number of projects is more than 10 for hobby users, show alert to subscribe */}
                <div className='h-full px-3 space-x-2 rounded-md border flex items-center'>
                    <Folder size={16} />
                    <span>{projects ? projects.length : 0} projects</span>
                </div>

                <CreateProject>
                    <Button asChild className="bg-[#24252a]">
                        <span>
                            <Plus size={16} />
                            <span className='hidden sm:flex'>Create Project</span>
                        </span>
                    </Button>
                </CreateProject>
            </div>
        </div>
    )
}

export default ProjectsHeader