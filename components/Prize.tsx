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
        <Image src='/Money.svg' alt='bg' width={500} height={500} className='w-[600px]' />
        <div className='-translate-y-8'>
            <h1 className='text-4xl text-center'>$15,000 <br /> <span className={`${pixel.className} text-4xl text-center`}>PRIZE POOL</span></h1>
        </div>
      </div>

      <div className='flex flex-col gap-4 justify-center items-center pb-10'>
        <PrizeCard title="polygon" amount="$10,000" />
        <PrizeCard title="FBI" amount="$5,000" />
        <PrizeCard title="stackr" amount="$1,000" />
      </div>
    </div>
  )
}

export default Prize
