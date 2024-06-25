"use client";

import { toast } from 'sonner';
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { signIn } from 'next-auth/react';
import { GoogleLogo } from '@/components/icon/logos'
import { useSearchParams } from 'next/navigation';

const GoogleLogin = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const [loading, setLoading] = useState<boolean>(false);

    const handleGoogleLogin = async () => {
        try {
            setLoading(true);
            console.log(callbackUrl)
            const res = await signIn("google");
            console.log(res);
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <div
            onClick={() => handleGoogleLogin()}
            className={cn("py-3 flex justify-center items-center space-x-4 rounded-lg bg-white hover:bg-gray-100 border cursor-pointer duration-200")}
        >
            <GoogleLogo width={20} />
            <p className={cn("text-sm text-gray-800")}>Continue with google</p>
        </div>
    )
}

export default GoogleLogin;