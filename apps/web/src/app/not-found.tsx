import Link from "next/link";
import { headers } from "next/headers";
import { HomeIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const NotFoundPage = async () => {
    const headersList = headers();
    const domain = headersList.get("host");
    
    return (
        <>
            <div className="h-full mx-auto max-w-screen-xl px-4 py-8 lg:py-16 grid place-items-center">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 font-mono text-6xl font-bold tracking-tight lg:text-7xl">
                        404
                    </h1>
                    <p className="mb-4 text-3xl font-medium tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Page not found
                    </p>
                    <p className="mb-4 font-mono text-sm font-light text-gray-500 dark:text-gray-400">
                        {`The page you're looking for doesn't exist on ${domain}.`}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <Link className={buttonVariants({ variant: "outline" })} href="/">
                            <HomeIcon size={18} />
                            <span>Go back home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;