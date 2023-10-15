"use client"
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { ArrowRight, ImageIcon, MessageSquare } from 'lucide-react'
import React from 'react'
import Sidebar from '@/components/custom/sidebar'
import { sideBarRoutes } from '@/utilities/SideBarRoutes'
import { useRouter } from 'next/navigation'
const DashboardPage = () => {
  const router = useRouter()
  const updatedSideBarRoutes = sideBarRoutes.filter(
    (item) => item.label.toLowerCase() !=="settings" && item.label.toLowerCase() !== "dashboard"
  )
  

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl 
        font-bold text-center'>
          Explore The Power Of AI
          </h2>
          <p className='text-muted-foreground font-light text-sm
          md:text-lg text-center '>
            Chat with the smartest AI - Experience the power of AI
          </p>
          <div className='px-4 md:px-20 lg:px-32 space-y-4'>
            {updatedSideBarRoutes.map((route,index)=>(
              <Card
              onClick={()=>router.push(route.href)}
              key={index}
              className='p-4 border-black/5 flex items-center justify-between
              hover:shadow-md transition cursor-pointer'
              >
                <div className='flex items-center gap-x-4'>
                  <div className={cn('p-2 w-fit rounded-md' , route.bgColor)}>
                    <route.icon className={cn('w-8 h-8',route.color)} />
                  </div>
                  <div className='font-semibold'>
                    {route.label}
                  </div>
                </div>
                <ArrowRight className='w-5 h-5' />
              </Card>
            ))}
          </div>
      </div>
    </div>
  )
}

export default DashboardPage