import React from 'react'
import { cn } from '@/lib/utils'
import { CreateProject } from './create-project'
import { CircleOff } from 'lucide-react'

export default function EmptyProjects() {
    return (
        <div className={cn("h-full grid place-items-center")}>
            <div className="mx-auto max-w-screen-sm text-center space-y-4">
                <CircleOff size={64} className="mx-auto" />

                <p className="font-medium tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    No project yet.
                </p>
                <p className="font-mono text-sm font-light text-gray-500 dark:text-gray-400">
                    Please create a project to get started.
                </p>
                <div className="flex items-center justify-center">
                    <CreateProject>
                        <span className='px-4 py-2 border rounded-md bg-white hover:bg-gray-100 duration-200 dark:bg-black'>
                            Create Project
                        </span>
                    </CreateProject>
                </div>
            </div>
        </div>
    )
}
