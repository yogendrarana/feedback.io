import React from 'react'
import { cn } from '@/lib/utils';
import { Mail, PencilLine, Trash } from 'lucide-react';
import { IFeedback } from '@/db/models/feedback-model';

interface FeedbackCardProps {
    key: number;
    feedback: IFeedback
}

const FeedbackCard = (props: FeedbackCardProps) => {
    return (
        <div className={cn("p-3 flex justify-between border rounded-md font-medium bg-white")}>
            <div className='space-y-1'>
                <div className={cn("flex items-center gap-2 text-sm")}>
                    <Mail size={18} />
                    <p>{props.feedback.email}</p>
                </div>
                <div className={cn("flex items-center gap-2 text-md text-gray-400")}>
                    <p>{props.feedback.message}</p>
                </div>
            </div>

            <div className='flex items-center'>
                <Trash size={16} />
            </div>
        </div>
    )
}

export default FeedbackCard;