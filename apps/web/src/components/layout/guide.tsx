"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import CodeBlock from '../ui/mdx/codeblock'
import Doc from "@/components/markdown/manual-setup.mdx"

export default function Guide({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn("rounded-lg bg-white", "container")}>
            Hello
        </div>
    )
}