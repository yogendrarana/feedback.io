import {
    BugIcon,
    HomeIcon,
    LayoutDashboardIcon,
    MonitorIcon,
    MoonIcon,
    SettingsIcon,
    SproutIcon,
    SunIcon,
} from "lucide-react";
import { GithubLogo, XLogo } from "@/components/icon/logos";

export const Pages = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboardIcon,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: SettingsIcon,
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
        href: "https://github.com/yogendrarana/slug?tab=readme-ov-file#-getting-started",
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
        icon: XLogo,
    },
    {
        name: "GitHub Repository",
        href: "https://github.com/yogendrarana/feedback.io",
        icon: GithubLogo,
    },
];