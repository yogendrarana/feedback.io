import React from 'react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/header'
import { TypographyH2, TypographyP } from '@/components/ui/typography'


const Docslayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cn("min-h-full", "container")}>
            <Header className='px-0' />
            <div className='h-[30vh] border rounded-md shadow-sm flex flex-col justify-center items-center bg-white'>
                <TypographyH2 className="text-2xl font-bold">Documentation</TypographyH2>
                <TypographyP className="text-gray-500">Learn how to use our API</TypographyP>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Docslayout;