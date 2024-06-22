import Link from "next/link";
import { cn } from "@/lib/utils";
import Commandk from "@/components/commadk";
import UserButton from "@/components/auth/user-btn";
import { GithubLogo } from "@/components/icon/logos";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/util/change-theme";
import { ExternalLink } from "@/components/ui/external-link";

const Header = () => {
    return (
        <nav
            className={cn(
                "flex w-full",
                "pb-3 pt-4 lg:px-4",
                "sticky top-0 z-50",
                "dark:bg-neutral-900",
            )}
        >
            <div className={cn("flex w-full items-center justify-between", "container")}>
                <div className="flex items-center space-x-5">
                    <div className="flex items-center space-x-1 pr-1 md:pr-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse"
                        >
                            {/* <GoogleLogo width={30} />    */}
                            <Link
                                href="/"
                                className="self-center whitespace-nowrap text-lg font-medium tracking-tight dark:text-white"
                            >
                                feedback.io
                            </Link>
                            {/* <Badge className="hidden cursor-pointer md:block">beta</Badge> */}
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <ExternalLink
                        href="https://github.com/yogendrarana/feedback.io"
                        className={buttonVariants({
                            variant: "ghost",
                            size: "icon",
                        })}
                    >
                        <GithubLogo width={20} name="GitHub Repository" />
                    </ExternalLink>
                    <Commandk />
                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
        </nav>
    );
};

export default Header;