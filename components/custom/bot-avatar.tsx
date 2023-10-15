import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const botAvatar = () => {
    return (
        <Avatar  className='h-16 w-16 ' style={{ width: '4rem', height: '4rem' }}>
            <AvatarImage className='p-1' src='/logo.png' />
        </Avatar>
    )
}

export default botAvatar