import React from 'react'
import FeedbackTable from '@/app/(client)/dashboard/feedbacks/_components/table/feedback-table';

interface FeedbackTableDemoProps {
    feedbacks: any[]
}

const FeedbackTableDemo = (props: FeedbackTableDemoProps) => {
    return (
        <div className='border dark:border-none dark:bg-gray-800 p-3 rounded-lg'>
            <FeedbackTable feedbacks={props.feedbacks} />
        </div>
    )
}

export default FeedbackTableDemo;