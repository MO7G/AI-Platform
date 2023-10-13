import { UserButton } from '@clerk/nextjs'
import React from 'react'
const DashboardPage = () => {
  return (
    <div>
        <h1>Hi i am the dashboard page (proteced) </h1>
        {/*Redirecting the user to the landing page after signing out !!! */}
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashboardPage