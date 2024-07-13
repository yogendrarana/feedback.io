import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { TwitterLogo } from "../icon/logos";
import { ExternalLink } from "@/components/ui/external-link";

interface FooterProps {
    className?: string;
}

const Footer = (props: FooterProps) => {
    return (
        <footer
            className={cn(
                "h-[var(--footer-height)]",
                "group w-full text-sm text-neutral-600 animate-in fade-in-25 dark:text-neutral-400",
                "bg-white/60 backdrop-blur-md dark:bg-neutral-900/60",
                props.className,
                "container"
            )}
        >
            <div className={cn("h-full flex items-center justify-between")}>
                <div className="flex items-center space-x-2">
                    <ExternalLink
                        href="https://yogendrarana.vercel.app"
                        className="flex items-center space-x-1"
                    >
                        <p>Made by Yogendra Rana</p>
                        <ArrowUpRight size={14} />
                    </ExternalLink>
                </div>
                <div className="flex items-center space-x-2">
                    <TwitterLogo className="h-3 w-3" />
                    <ExternalLink
                        href="https://twitter.com/yoogendra_rana"
                        className="flex items-center space-x-1"
                    >
                        <p className="hidden md:block">Twitter</p>
                        <ArrowUpRight size={14} />
                    </ExternalLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;