import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="h-dvh w-full">
      <div className="relative h-full w-full bg-black">
        <Image src={"https://images.pexels.com/photos/7601262/pexels-photo-7601262.jpeg"} alt="Real Standard of Living" className="object-cover opacity-40" fill/>
      </div>
      <div className='absolute top-0 left-0 pt-15 h-full w-full flex flex-col gap-5 text-white  items-center justify-center'>
        <h3 className='italic font-serif text-base'>FInd. Buy. Live. Love.</h3>
        <h1 className='font-serif text-7xl'>A New Standard of Living</h1>             
        <p className='w-90 text-center'>Discover an exclusive portfolio of properties across continents - each defined by architecture, artistry and unparalleled service.</p>
        <Link href="/" className='mt-6 uppercase bg-white text-black font-semibold py-4 px-12 text-sm'>
            Discover 
        </Link>
      </div>
    </div>
  )
}

export default Hero