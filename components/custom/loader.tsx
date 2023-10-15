import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
        <div className='w-20 h-20 relative animate-ping'>
            <Image
            alt='logo'
            fill
            src="/logo.png"
            />
        </div>
        <p className='text-lg text-muted-foreground'>
            Mo7aMind is processing your prompot
        </p>
    </div>
  )
}

export default Loader