import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DashboardNav from "./_components/dashboard-nav";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    return (
        <div className={cn("container")}>
            <Header />
            <main className={cn("md:px-0  flex flex-col", "container")}>
                <div className="h-[var(--dashboard-nav-height)] mb-2">
                    <DashboardNav />
                </div>
                <div className={cn("flex-1 w-full overflow-y-auto rounded-md")}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DashboardLayout;