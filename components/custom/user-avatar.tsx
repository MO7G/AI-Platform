import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react'

const UserAvatar = () => {
   const {user} = useUser();

  return (
    <Avatar className='h-16 w-16 '>
        <AvatarImage  src={user?.imageUrl} />
        <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
        </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar