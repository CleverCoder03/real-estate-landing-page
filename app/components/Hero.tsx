import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-dvh w-full">
      <div className="relative h-full w-full">
        <Image src={"https://images.pexels.com/photos/13731277/pexels-photo-13731277.jpeg"} alt="Real Standard of Living" className="" fill/>
      </div>
    </div>
  )
}

export default Hero