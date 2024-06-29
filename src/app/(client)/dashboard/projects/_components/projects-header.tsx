import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import React from 'react'
import { CreateProject } from './create-project'

const ProjectsHeader = () => {
    return (
        <div className={cn("max-h-10 flex gap-x-2 items-center justify-between")}>
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

            <CreateProject />
        </div>
    )
}

export default ProjectsHeader