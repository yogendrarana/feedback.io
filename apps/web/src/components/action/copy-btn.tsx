"use client";

import React from 'react'
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import { Button } from '../ui/button';

interface CopyBtnProps {
    text: string;
    className?: string;
}

const CopyBtn = ({ text, className }: CopyBtnProps) => {
    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn("", className)}
            onClick={() => {
                navigator.clipboard.writeText(text)
                toast.info('Copied to clipboard')
            }}

        >
            <Copy size={16} />
        </Button>
    )
}

export default CopyBtn