import React from 'react'
import { cn } from '@/lib/utils'
import { GoogleLogo } from '@/components/icon/logos'
import { TypographyH4, TypographyP } from '@/components/ui/typography'

const AuthPage = () => {
    const iconSize = 20;
    
    return (
        <div className={cn("h-full w-full grid place-items-center")}>
            <div className={cn("flex flex-col")}>
                <TypographyH4 className={cn("text-center")}>Log in</TypographyH4>
                <TypographyP className={cn("text-center text-sm text-gray-400")}>Log in to feedback.io with your Google account</TypographyP>
                <div className={cn("mt-6")}>
                    <div className={cn("py-4 flex justify-center items-center space-x-4 border rounded-lg bg-white shadow-sm cursor-pointer")}>
                        <GoogleLogo width={iconSize}  />
                        <p className={cn("text-sm text-gray-800")}>Continue with google</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;