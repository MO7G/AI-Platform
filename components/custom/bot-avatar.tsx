import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const botAvatar = () => {
    return (
        <Avatar  className='h-32 w-32 '>
            <AvatarImage className='p-1' src='/logo.png' />
        </Avatar>
    )
}

export default botAvatar