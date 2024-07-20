import {
    BugIcon,
    HomeIcon,
    LayoutDashboardIcon,
    MonitorIcon,
    MoonIcon,
    SproutIcon,
    SunIcon,
    User2,
} from "lucide-react";
import { GithubLogo, TwitterLogo } from "@/components/icon/logos";

export const Pages = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Profile",
        href: "/dashboard/profile",
        icon: User2,
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboardIcon,
    }
];

export const ChangeTheme = [
    {
        name: "Light Theme",
        param: "light",
        icon: SunIcon,
    },
    {
        name: "Dark Theme",
        param: "dark",
        icon: MoonIcon,
    },
    {
        name: "System Theme",
        param: "system",
        icon: MonitorIcon,
    },
];

export const DocumentationPages = [
    {
        name: "Getting Started",
        href: "https://github.com/yogendrarana/feedback.io#getting-started",
        icon: SproutIcon,
    },
    {
        name: "Report a Bug",
        href: "https://github.com/yogendrarana/feedback.io/issues/new/choose",
        icon: BugIcon,
    }
];

export const SocialPages = [
    {
        name: "Twitter",
        href: "https://twitter.com/yoogendra_rana",
        icon: TwitterLogo,
    },
    {
        name: "GitHub Repository",
        href: "https://github.com/yogendrarana/feedback.io",
        icon: GithubLogo,
    },
];