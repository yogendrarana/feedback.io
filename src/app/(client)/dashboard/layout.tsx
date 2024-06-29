import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DashboardNav from "./_components/dashboard-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    return (
        <>
            <Header />
            <main className={cn("h-[calc(100vh-200px)] flex flex-col", "container")}>
                <div className="h-[var(--dashboard-nav-height)] mb-2">
                    <DashboardNav />
                </div>
                <div className={cn("flex-1 w-full overflow-y-auto rounded-md")}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default DashboardLayout;