"use client";

import {
    Book,
    HomeIcon,
    LayoutDashboardIcon,
    MessageCircleIcon,
    SettingsIcon,
} from "lucide-react";
import {
    DropdownMenuGroup,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TwitterLogo } from "@/components/icon/logos";

const UserMenu = () => {
    const iconSize = 15;

    const { data: session, status } = useSession();

    return (
        <DropdownMenuGroup className="space-y-1">
            <DropdownMenuItem asChild>
                <Link href="/" className="flex items-center space-x-3 cursor-pointer">
                    <HomeIcon size={iconSize} />
                    <span>Home</span>
                </Link>
            </DropdownMenuItem>
            {!session && (
                <DropdownMenuItem asChild>
                    <Link href="/docs" className="flex items-center space-x-3 cursor-pointer">
                        <Book size={iconSize} />
                        <span>Docs</span>
                    </Link>
                </DropdownMenuItem>
            )}
            <DropdownMenuItem asChild>
                <Link href="/dashboard/projects" className="flex items-center space-x-3 cursor-pointer">
                    <LayoutDashboardIcon size={iconSize} />
                    <span>Dashboard</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/dashboard/feedbacks" className="flex items-center space-x-3 cursor-pointer">
                    <MessageCircleIcon size={iconSize} />
                    <span>Feedbacks</span>
                </Link>
            </DropdownMenuItem>
            {!session && (
                <DropdownMenuItem asChild>
                    <Link className="flex items-center space-x-3 cursor-pointer" href="https://twitter.com/yoogendra_rana" target="_blank">
                        <TwitterLogo width={iconSize} />
                        <span>Contact</span>
                    </Link>
                </DropdownMenuItem>
            )}
        </DropdownMenuGroup>
    );
};

export default UserMenu;