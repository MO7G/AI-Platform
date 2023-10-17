import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";


export const sideBarRoutes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: 'text-sky-500',
        bgColor: "",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-pink-500",
        bgColor: "",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/imageGeneration",
        color: "text-green-700",
        bgColor: "",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/videoGeneration",
        color: "text-orange-500",
        bgColor: "",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/musicGeneration",
        color: "text-emerald-700",
        bgColor: "",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/codeGeneration",
        color: "text-violet-500",
        bgColor: "",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/Settings",
        color: "text-white-500",
        bgColor: "",
    },
];