"use client"

import React from 'react'
import { DATA } from "@/data"
import { cn } from '@/lib/utils'
import RequestDemo from './request-demo'
import { TypographyH3 } from '../ui/typography'
import FeedbackTableDemo from './feedback-table-demo'

const Demo = () => {
  const [feedbacks, setFeedbacks] = React.useState(DATA.feedbacks)

  return (
    <section className={cn("space-y-8 flex flex-col justify-center items-center")}>
      <TypographyH3 className='text-center'>Explore API Endpoints</TypographyH3>

      <div className='w-full flex gap-4 justify-between items-start'>
        <div>
          <RequestDemo setFeedbacks={setFeedbacks} />
        </div>

        <div className='w-full'>
          <FeedbackTableDemo feedbacks={feedbacks} />
        </div>
      </div>
    </section>
  )
}

export default Demo