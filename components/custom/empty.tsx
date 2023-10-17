import React from 'react'
import Image from 'next/image'
interface EmptyProps {
    label: string,
    image:string
}

export const Empty = ({ label , image }: EmptyProps) => {
    return (
        <div className='h-full p-20 flex flex-col items-center justify-center'>
            <div className='relative w-28 h-28 md:w-60 md:h-60 lg:w-72 lg:h-72 '>
                <Image
                    alt="empty"
                    fill
                    src={`/${image}.png`}
                />
            </div>
            <p className='text-muted-foreground p-9 text-xl text-center'>
                {label}
            </p>

        </div>
    )
}

