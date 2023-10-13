"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });


// Let this for now but latter I will move it to another folder and maybe I will implement a 
// dynamic navigation for different users like we can have an admin and a normal user as well 
const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-pink-700",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/Image",
        color: "text-green-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/Music",
        color: "text-orange-500",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/Music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/Code",
        color: "text-violet-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/Settings",
        color: "text-white-500",
    },
];

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-16 mr-1 h-16">
                        <Image alt="logo" src="/logo.png" fill />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Mo7aMind
                    </h1>
                </Link>

                <div className="space-y-1">
                    {routes.map((route, index) => (
                        <Link
                            href={route.href}
                            key={index}
                            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
