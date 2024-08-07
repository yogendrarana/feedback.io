"use client";

import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
    Book,
    HomeIcon,
    LayoutDashboardIcon,
    MessageCircleIcon,
    SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { TwitterLogo } from "@/components/icon/logos";

const UserMenu = () => {
    const iconSize = 15;

    return (
        <DropdownMenuGroup className="space-y-1">
            <DropdownMenuItem asChild>
                <Link href="/" className="flex items-center space-x-3 cursor-pointer">
                    <HomeIcon size={iconSize} />
                    <span>Home</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/docs" className="flex items-center space-x-3 cursor-pointer">
                    <Book size={iconSize} />
                    <span>Docs</span>
                </Link>
            </DropdownMenuItem>
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
            <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="flex items-center space-x-3 cursor-pointer">
                    <SettingsIcon size={iconSize} />
                    <span>Settings</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className="flex items-center space-x-3 cursor-pointer" href="https://twitter.com/yoogendra_rana" target="_blank">
                    <TwitterLogo width={iconSize} />
                    <span>Contact</span>
                </Link>
            </DropdownMenuItem>
        </DropdownMenuGroup>
    );
};

export default UserMenu;