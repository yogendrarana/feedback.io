import React from 'react'
import { cn } from '@/lib/utils'
import GoogleLogin from './_components/google-login'
import { TypographyH4, TypographyP } from '@/components/ui/typography'

const AuthPage = () => {    
    return (
        <div className={cn("h-full w-full grid place-items-center")}>
            <div className={cn("flex flex-col")}>
                <TypographyH4 className={cn("text-center")}>Log in</TypographyH4>
                <TypographyP className={cn("text-center text-sm text-gray-400")}>Log in to feedback.io with your Google account</TypographyP>
                <div className={cn("mt-6")}>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    )
}

export default AuthPage;