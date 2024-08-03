"use client"

import React from 'react'
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

interface CopyProjectIdProps {
    projectId: string
}

const CopyProjectId = (props: CopyProjectIdProps) => {
    return (
        <button
            onClick={() => {
                toast('Copied project id to clipboard');
                window.navigator.clipboard.writeText(props.projectId);
            }}
            className='rounded-sm p-1.5 hover:bg-gray-100 duration-200'
        >
            <Copy size={14} />
        </button>
    )
}

export default CopyProjectId;