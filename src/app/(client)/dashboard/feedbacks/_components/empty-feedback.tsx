import React from 'react'
import { cn } from '@/lib/utils'
import { CircleOff } from 'lucide-react'

interface EmptyFeedbackProps {
    className?: string;
}

export default function EmptyFeedback({ className }: EmptyFeedbackProps) {
    return (
        <div className={cn("h-full grid place-items-center", className)}>
            <div className="mx-auto max-w-screen-sm text-center space-y-4">
                <CircleOff size={64} className="mx-auto text-gray-500" />

                <p className="font-medium tracking-tight text-gray-500 dark:text-white md:text-4xl">
                    No feedback yet.
                </p>
                <p className="font-mono text-sm font-light text-gray-500 dark:text-gray-400">
                    Please create a project and integrate it to your site to get feedbacks.
                </p>
            </div>
        </div>
    )
}
