import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react'
import { IFeedback } from '@/db/models/feedback-model';

interface FeedbackCardProps {
    key: number;
    feedback: string;
}

const FeedbackCard = (props: FeedbackCardProps) => {
    const [parsedFeedback, setParsedFeedback] = useState<IFeedback & { project: { name: string } }>();

    useEffect(() => {
        setParsedFeedback(JSON.parse(props.feedback));
    }, [props.feedback]);

    if (!parsedFeedback) {
        return null;
    }

    return (
        <div className={cn("p-1.5 flex flex-col justify-between border rounded-md font-medium bg-white")}>
            <div className='mb-2'>
                <div className={cn("flex items-center gap-2 text-sm")}>
                    On:
                    <p>{parsedFeedback.project.name}</p>
                </div>
                <div className={cn("flex items-center gap-2 text-sm")}>
                    From:
                    <p>{parsedFeedback.email}</p>
                </div>
            </div>
            <div className={cn("p-3 border flex items-center gap-2 text-sm text-gray-800 bg-gray-50 rounded-md")}>
                <p>{parsedFeedback.message}</p>
            </div>
        </div>
    )
}

export default FeedbackCard;