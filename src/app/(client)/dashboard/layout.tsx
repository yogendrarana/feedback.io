import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import DashboardNav from "./_components/dashboard-nav";
import Header from "@/components/layout/header";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    return (
        <>
            <Header />
            <main className={cn("min-h-[calc(100vh-200px)]", "container")}>
                <nav>
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