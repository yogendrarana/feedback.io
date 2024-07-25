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
        <section className={cn("h-[calc(100vh-400px)] my-8 flex items-center")}>
            <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center '>
                <div>
                    <TypographyH2 className='text-center md:text-left'>Simple Integration</TypographyH2>
                    <TypographyH2 className='hidden md:flex text-center md:text-left'>Powerful Results</TypographyH2>
                    <TypographyP className='mb-4 text-center md:text-left opacity-70'>
                        One API endpoint to capture all your user feedback.
                    </TypographyP>
                </div>
                <div className='w-full md:w-1/2'>
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
        </section>
    )
}

export default CodeSnippet;