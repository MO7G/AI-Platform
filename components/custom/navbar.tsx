import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { isContext } from "vm";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidbar";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
                {/*Redirecting the user to the landing page after signing out !!! */}
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    );
};

export default Navbar;
