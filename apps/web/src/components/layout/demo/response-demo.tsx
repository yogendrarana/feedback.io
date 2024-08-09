import React from 'react'
import { cn, dedent } from '@/lib/utils';
import CodeBlock from '../../ui/mdx/codeblock'

const ResponseDemo = () => {
  const responseCode = dedent`
  {
    success: true,
    code: 200,
    message: "Feedback sent successfully."
  }
`;

  return (
    <div className={cn("w-[450px] rounded-xl flex flex-col")}>
      <CodeBlock
        filename='response'
        copyable
        showLineNumbers={false}
        className='w-full rounded-lg'
      >
        {responseCode}
      </CodeBlock>
    </div>
  )
}

export default ResponseDemo