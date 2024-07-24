import { cn } from '@/lib/utils'
import React from 'react'
import { TypographyH3 } from '../ui/typography'
import RequestDemo from './request-demo'

const Demo = () => {
  return (
    <section className={cn("space-y-8 flex flex-col justify-center items-center")}>
      <TypographyH3 className='text-center'>Explore API Endpoints</TypographyH3>

      <div className='w-full flex justify-between'>
        <RequestDemo />
        <div>Response Demo</div>
      </div>
    </section>
  )
}

export default Demo