import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { isContext } from "vm";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidbar";
import { ModeToggle } from "../dark-mode-toggle";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
                {/*Redirecting the user to the landing page after signing out !!! */}
                <div className="flex flex-row space-x-4 ">
                <ModeToggle></ModeToggle>
                <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
