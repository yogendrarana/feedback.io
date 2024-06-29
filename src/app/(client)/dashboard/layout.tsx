import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import DashboardNav from "./_components/dashboard-nav";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    return (
        <>
            <Header />
            <main className={cn("min-h-[calc(100vh-200px)]", "container")}>
                <nav className="border-b">
                    <DashboardNav />
                </nav>
                <div className={cn("container px-0 py-4 flex w-full items-center")}>
                    {props.children}
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;