import {
    BugIcon,
    HeartHandshakeIcon,
    HomeIcon,
    LayoutDashboardIcon,
    MonitorIcon,
    MoonIcon,
    SettingsIcon,
    SproutIcon,
    SunIcon,
    TelescopeIcon,
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
        href: "https://github.com/pheralb/slug?tab=readme-ov-file#-getting-started",
        icon: SproutIcon,
    },
    {
        name: "Roadmap",
        href: "https://github.com/pheralb/slug?tab=readme-ov-file#-roadmap",
        icon: TelescopeIcon,
    },
    {
        name: "Contributing",
        href: "https://github.com/pheralb/slug?tab=readme-ov-file#%EF%B8%8F-contributing",
        icon: HeartHandshakeIcon,
    },
    {
        name: "Report a Bug",
        href: "https://github.com/pheralb/slug/issues/new/choose",
        icon: BugIcon,
    }
];

export const SocialPages = [
    {
        name: "X (Formerly Twitter)",
        href: "https://twitter.com/pheralb_",
        icon: XLogo,
    },
    {
        name: "GitHub Repository",
        href: "https://github.com/pheralb/slug",
        icon: GithubLogo,
    },
];