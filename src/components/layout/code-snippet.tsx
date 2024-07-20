import React from 'react'
import { cn, dedent } from '@/lib/utils'
import CodeBlock from '../ui/markdown/codeblock'
import { TypographyH2, TypographyP } from '../ui/typography'

const CodeSnippet = () => {


    const postCode = dedent`
        axios.post('https://feeeedback.vercel.app/feedback', {
            senderEmail: 'abc@gmail.com',
            feedbackType: "message",
            feedbackMessage: "Your site is cool."
        }, {
            headers: {
                'Content-Type': 'application/json',
                'account': 'Your-Account-ID',
                'project': 'Your-Project-ID'
            },
        })
    `;

    return (
        <div className={cn("mt-8")}>
            <div className='flex items-center justify-between'>
                <div>
                    <TypographyH2>Simple Integration</TypographyH2>
                    <TypographyH2>Powerful Results</TypographyH2>
                    <TypographyP className='opacity-70'>
                        One API endpoint to capture all your user feedback.
                    </TypographyP>
                </div>
                <div className='w-1/2'>
                    <CodeBlock
                        filename='request.js'
                        copyable
                        showLineNumbers={false}
                        className='w-full'
                    >
                        {postCode}
                    </CodeBlock>
                </div>
            </div>
        </div>
    )
}

export default CodeSnippet;