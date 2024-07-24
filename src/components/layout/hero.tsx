import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Book } from 'lucide-react'
import { GithubLogo } from '../icon/logos'
import { buttonVariants } from '../ui/button'
import { ExternalLink } from '../ui/external-link'
import { TypographyH1, TypographyP } from '../ui/typography'

const Hero = () => {
    return (
        <section className={cn("h-[calc(100vh-400px)] flex flex-col justify-center items-center text-center")}>
            <p className='px-4 py-1 bg-white border rounded-full'>⚠️ Beta Version: Features may be unstable.</p>

            <TypographyH1 className="duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
                Collect Feedback From Your Users
            </TypographyH1>
            <TypographyP className="text-sm duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6">
                Feedback.io is an open-source platform that allows you to collect and manage
                feedback with ease.
            </TypographyP>
            <div className="mt-8 flex items-center justify-center gap-x-3 duration-700 animate-in fade-in-30 sm:flex sm:space-y-0">
                <Link
                    href="/docs"
                    className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                    })}
                >
                    <Book
                        height={18}
                        className="duration-300 group-hover:-rotate-[10deg]"
                    />
                    <span>Explore Docs</span>
                </Link>
                <ExternalLink
                    href="https://github.com/yogendrarana/feedback.io"
                    className={buttonVariants({
                        variant: "default",
                        size: "lg",
                        className: "group",
                    })}
                >
                    <GithubLogo
                        height={18}
                        className="duration-300 group-hover:-rotate-[10deg]"
                    />
                    <span>Star on GitHub</span>
                </ExternalLink>
            </div>
        </section>
    )
}

export default Hero;