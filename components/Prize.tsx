import { Pixelify_Sans } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import PrizeCard from './PrizeCard';

const pixel = Pixelify_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-pixel',
  });

const Prize = () => {
  return (
    <div id='partners'>
      <div className='flex flex-col justify-center items-center'>
        <Image src='/Money.svg' alt='bg' width={1000} height={1000} className='w-[600px]md:w-[1000px]' />
        <div className='-translate-y-8'>
            <h1 className='text-4xl text-center md:text-7xl'>$15,000 <br /> <span className={`${pixel.className} text-4xl text-center md:text-7xl`}>PRIZE POOL</span></h1>
        </div>
      </div>

      <div className='flex justify-center items-center pb-10 pt-10'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <PrizeCard title="polygon" amount="$10,000" bgColor='bg-white' cardWidth='w-[96vw] md:w-[44vw]' />
          <PrizeCard title="FBI" amount="$5,000" bgColor='bg-indigo-950' textColor='text-white' cardWidth='w-[96vw] md:w-[44vw]' />
          <PrizeCard title="stackr" amount="$1,000" bgColor='bg-white' cardWidth='w-[96vw] md:w-[44vw]' />
          <PrizeCard title="reclaim" amount="$3,000" bgColor='bg-indigo-950' textColor='text-white' cardWidth='w-[96vw] md:w-[44vw]' />
        </div>
      </div>
    </div>
  )
}

export default Prize
