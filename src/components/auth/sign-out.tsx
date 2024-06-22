"use client";

import { toast } from "sonner";
import { LogOutIcon } from "lucide-react";
import { handleSignOut } from "@/server/actions/auth";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function SignOut() {
    const iconSize = 15;

    const handleLogout = async () => {
        toast.promise(handleSignOut, {
            loading: "Signing out...",
            error: "Failed to sign out. Please try again.",
        });
    };

    return (
        <DropdownMenuItem onClick={handleLogout}>
            <LogOutIcon size={iconSize} />
            <span>Log Out</span>
        </DropdownMenuItem>
    );
}