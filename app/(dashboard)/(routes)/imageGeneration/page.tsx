import Heading from '@/components/custom/Heading'
import { ImageIcon } from 'lucide-react'
import React from 'react'

const ImageGeneration = () => {
    return (
    <div>
        <Heading
                title="image Generation"
                desc="Our most advanced Conversation model"
                Icon={ImageIcon}
                iconColor='text-green-500'
                bgColor='bg-violet-500/10'
            />
    </div>
    )
}

export default ImageGeneration