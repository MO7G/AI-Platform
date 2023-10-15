import Heading from '@/components/custom/Heading'
import { ImageIcon, VideoIcon } from 'lucide-react'
import React from 'react'

const videoGeneration = () => {
  return (
    <div>
          <Heading
                title="Video Generation"
                desc="Our most advanced Video Generation model"
                Icon={VideoIcon}
                iconColor='text-green-500'
                bgColor='bg-violet-500/10'
            />
    </div>
  )
}

export default videoGeneration