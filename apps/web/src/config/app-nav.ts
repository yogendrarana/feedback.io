import { BriefcaseBusiness, MessageCircle, User2 } from "lucide-react";

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
            title: "Profile",
            href: "/dashboard/profile",
            icon: User2,
        }
    ]
}