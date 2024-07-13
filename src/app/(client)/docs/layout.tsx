import React from 'react'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/header'
import { TypographyH2, TypographyP } from '@/components/ui/typography'

const Docslayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cn("container")}>
            <Header />
            <div className='h-[30vh] rounded-lg shadow-sm flex flex-col justify-center items-center bg-gray-100'>
                <TypographyH2 className="text-xl font-bold text-gray-800">Documentation</TypographyH2>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Docslayout;