import { BriefcaseBusiness, MessageCircle, Settings } from "lucide-react";

export const APP_NAV = {
    dashboard_nav: [
        {
            title: "Projects",
            href: "/dashboard/projects",
            icon: BriefcaseBusiness,
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