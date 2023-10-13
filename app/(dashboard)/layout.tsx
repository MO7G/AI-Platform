import React from "react";
import { sidebarWidth } from "../styles";
import Navbar from "@/components/custom/navbar";
import Sidebar from "@/components/custom/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className={`hidden h-full md:flex md:w-${sidebarWidth} md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900`}>
                <Sidebar />
            </div>
            <main className={`md:pl-${sidebarWidth}`}>
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
