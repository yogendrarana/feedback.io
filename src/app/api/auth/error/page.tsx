import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypographyH4 } from "@/components/ui/typography";
import { ChevronLeft } from "lucide-react";

const AuthErrorPage = () => {
    return (
        <div className={cn("h-full flex flex-col gap-6 justify-center items-center")}>
            <div>
                <TypographyH4 className="text-xl">Something went wrong.</TypographyH4>
            </div>
            <div className={cn("flex items-center gap-2 group")}>
                <ChevronLeft size={20} className={cn("group-hover:mr-2 duration-300")} />
                <Link
                    href="/auth"
                    className="opacity-75 transition-opacity duration-100 hover:text-black hover:opacity-100 dark:hover:text-white"
                >
                    <span>Back to login</span>
                </Link>
            </div>
        </div>
    );
};

export default AuthErrorPage;