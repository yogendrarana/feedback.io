import React from 'react'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CreateProject } from './create-project'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ProjectsHeader = () => {
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

            <CreateProject>
                <Button asChild className={cn("bg-[#24252a]")}>
                    <span>
                        Create Project
                        <Plus size={16} className="ml-2" />
                    </span>
                </Button>
            </CreateProject>
        </div>
    )
}

export default ProjectsHeader