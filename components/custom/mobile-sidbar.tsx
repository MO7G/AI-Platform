"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'


// to activate the hamburger button we need to add wrap the button with the Sheet 
// and the Sheet Trigger as well 
const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
            <Button variant={'ghost'} size="icon" className="md:hidden">
                <Menu />
            </Button>
            </SheetTrigger>
            <SheetContent>
                
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar