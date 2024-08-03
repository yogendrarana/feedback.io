import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
    return (
        <section className={cn("h-full flex flex-col", "container")}>
            <Header />
            <div className={cn("w-full flex-1 items-center justify-center space-y-8")} >
                {props.children}
            </div>
            <Footer />
        </section>
    );
};

export default AuthLayout;