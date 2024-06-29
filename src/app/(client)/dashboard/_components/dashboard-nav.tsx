"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Link2Icon, SettingsIcon } from "lucide-react";
import { APP_NAV } from "@/config/app-nav";


const DashboardNav = () => {
    const pathname = usePathname();

    return (
            <div className="flex items-center space-x-8">
                {APP_NAV.dashboard_nav.map((route, index) => (
                    <Link
                        key={index}
                        href={route.href}
                        className={cn(
                            "group relative px-1 pb-4 pt-3 text-sm font-medium outline-2 outline-sky-400 transition-colors duration-100 hover:bg-transparent hover:text-neutral-900 focus-visible:outline dark:hover:text-white",
                            pathname === route.href
                                ? "border-b-2 border-neutral-800 dark:border-white dark:text-white"
                                : "text-neutral-500",
                        )}
                    >
                        <div className=" relative z-10 flex items-center space-x-2">
                            <route.icon
                                size={18}
                                className="duration-300 group-hover:rotate-6"
                            />
                            <span>{route.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
    );
};

export default DashboardNav;