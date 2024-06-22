"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
    ArrowUpRight,
    BugIcon,
    HomeIcon,
    LayoutDashboardIcon,
    SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { TwitterLogo } from "@/components/icon/logos";

const UserMenu = () => {
    const iconSize = 15;

    return (
        <>
            <DropdownMenuItem asChild>
                <Link href="/">
                    <HomeIcon size={iconSize} />
                    <span>Home</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/dashboard">
                    <LayoutDashboardIcon size={iconSize} />
                    <span>Dashboard</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                    <SettingsIcon size={iconSize} />
                    <span>Settings</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
                asChild
                className="flex w-full items-center justify-between"
            >
                <Link
                    href="https://github.com/pheralb/slug/issues/new/choose"
                    target="_blank"
                >
                    <div className="flex items-center space-x-3">
                        <BugIcon size={iconSize} />
                        <span>Report a bug</span>
                    </div>
                    <ArrowUpRight size={iconSize} className="opacity-40" />
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
                asChild
                className="flex w-full items-center justify-between"
            >
                <Link href="https://twitter.com/pheralb_" target="_blank">
                    <div className="flex items-center space-x-3">
                        <TwitterLogo width={iconSize} />
                        <span>Contact</span>
                    </div>
                    <ArrowUpRight size={iconSize} className="opacity-40" />
                </Link>
            </DropdownMenuItem>
        </>
    );
};

export default UserMenu;