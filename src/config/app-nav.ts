import { Briefcase, MessageCircle, Settings, Text } from "lucide-react";

export const APP_NAV = {
    dashboard_nav: [
        {
            title: "Projects",
            href: "/dashboard/projects",
            icon: Briefcase,
        },
        {
            title: "Feedbacks",
            href: "/dashboard/feedbacks",
            icon: MessageCircle,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        }
    ]
}