import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { NotebookText } from "lucide-react";
import Commandk from "@/components/commadk";
import UserButton from "@/components/auth/user-btn";
import { GithubLogo } from "@/components/icon/logos";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/util/change-theme";
import { ExternalLink } from "@/components/ui/external-link";

interface HeaderProps {
    className?: string;
}

const Header = ({ className }: HeaderProps) => {
    return (
        <nav
            className={cn(
                "h-[var(--header-height)] bg-white",
                "flex w-full",
                "sticky top-0 z-50",
                "dark:bg-neutral-900",
                className,
            )}
        >
            <div className={cn("flex w-full items-center justify-between")}>
                <div className="flex items-center space-x-5">
                    <div className="flex items-center space-x-1 pr-1 md:pr-4">
                        <div className="flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse">
                            <Link href={"/"}>
                                <NotebookText width={30} />
                            </Link>
                            <Link
                                href="/"
                                className="hidden space-x-2 md:flex md:items-center self-center whitespace-nowrap text-lg font-medium tracking-tight dark:text-white"
                            >
                                <span>feedback.io</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                    <ExternalLink
                        href="https://github.com/yogendrarana/feedback.io"
                        className={buttonVariants({ variant: "ghost", size: "icon" })}
                    >
                        <GithubLogo width={20} name="GitHub Repository" />
                    </ExternalLink>
                    <Commandk />
                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
        </nav >
    );
};

export default Header;