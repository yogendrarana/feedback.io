import React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Folder, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CreateProject } from './create-project'
import { IProject } from '@/db/models/project-model'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface ProjectsHeaderProps {
    projects: IProject[]
}

const ProjectsHeader = (props: ProjectsHeaderProps) => {
    const { projects } = props;

    return (
        <div className={cn("h-[var(--projects-header-height)] flex gap-x-2 items-center justify-between")}>
            <Input placeholder="Search projects" />

            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="system">Sort by activity</SelectItem>
                    <SelectItem value="light">Sort by name</SelectItem>
                </SelectContent>
            </Select>

            <div className='h-full px-3 space-x-2 rounded-md border flex items-center'>
                <Folder size={16} />
                <span>{projects.length}/20</span>
            </div>

            {/* TODO: If number of projects is more than 20 for hobby users, show alert instead of create product form */}

            <CreateProject>
                <Button asChild className={cn("bg-[#24252a]")}>
                    <span>
                        <Plus size={16} />
                        <span className='hidden sm:flex'>Create Project</span>
                    </span>
                </Button>
            </CreateProject>
        </div>
    )
}

export default ProjectsHeader