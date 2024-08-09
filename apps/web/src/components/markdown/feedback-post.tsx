import React from 'react'
import { cn, dedent } from '@/lib/utils';
import { APP_DATA } from '@/data/app-data';
import CodeBlock from '../ui/mdx/codeblock';

interface FeedbackPostProps {
    className?: string,
    filename?: string,
    switcher?: React.ReactNode,
    copyable?: boolean,
    showLineNumbers?: boolean,
}

const FeedbackPost = ({ className, ...props }: FeedbackPostProps) => {
    const postCode = dedent`
        import axios from 'axios';

    axios.post(${APP_DATA.feedback_endpoint}, {
        email: 'abc@gmail.com',
        type: "bug",
        feedback: "There is a bug in the login page."
    }, {
        headers: {
            'Content-Type': 'application/json',
            'account': 'Your-Client-ID',
            'project': 'Your-Project-ID'
        },
    })
    `;

    return (
        <CodeBlock
            {...props}
            className={cn("", className)}
        >
            {postCode}
        </CodeBlock>
    )
}

export default FeedbackPost