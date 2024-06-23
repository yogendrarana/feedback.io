import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Avatar from "boring-avatars";
import UserMenu from "./user-menu";
import { SignOut } from "./sign-out";
import { ArrowRight } from "lucide-react";

export default async function UserButton() {
    const session = await auth();

    if (!session?.user)
        return (
            <Link
                href="/auth"
                className={buttonVariants({
                    variant: "outline",
                    className: "group",
                })}
            >
                <span>Join</span>
                <ArrowRight size={16} />
            </Link>
        );

    if (session?.user)
        return (
            <DropdownMenu>
                <DropdownMenuTrigger
                    name={session.user.name ?? "User Menu"}
                    className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                    })}
                >
                    {session.user.name && (
                        <Avatar size={22} name={session.user.name} variant="beam" />
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                                {session.user.name}
                            </p>
                            <p className="text-xs leading-none text-neutral-400">
                                {session.user.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <UserMenu />
                    <SignOut />
                </DropdownMenuContent>
            </DropdownMenu>
        );
}