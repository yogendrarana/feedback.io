import React from 'react'
import { cn } from '@/lib/utils'
import { CircleOff, Plus } from 'lucide-react'
import { CreateProject } from './create-project'
import { Button } from '@/components/ui/button'

export default function EmptyProjects() {
    return (
        <div className={cn("h-[72vh] grid place-items-center")}>
            <div className="mx-auto max-w-screen-sm text-center space-y-4">
                <CircleOff size={64} className="mx-auto text-gray-500" />

                <p className="font-medium tracking-tight text-gray-500 dark:text-white md:text-4xl">
                    No project yet.
                </p>
                <p className="font-mono text-sm font-light text-gray-500 dark:text-gray-400">
                    Please create a project to get started.
                </p>
                <div className="flex items-center justify-center">
                    <CreateProject>
                        <span className='px-4 py-2 border rounded-md flex items-center dark:bg-white dark:text-black'>
                            <Plus size={16} className="mr-2" />
                            Create Project
                        </span>
                    </CreateProject>
                </div>
            </div>
        </div>
    )
}
