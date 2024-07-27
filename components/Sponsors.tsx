import { Pixelify_Sans } from 'next/font/google';
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const pixel = Pixelify_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-pixel',
  });

const Sponsors = () => {
  return (
    <div className='mt-14 md:mt-28 pb-14 pt-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`${pixel.className} text-4xl text-center md:text-8xl`}>SPONSORS</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 justify-center w-[95vw] flex-col gap-4 mt-16'>
            <div className='bg-white py-6 md:py-14 rounded-xl flex items-center justify-center'>
                <img src='sponsors/s1.svg' alt='' className='w-44 md:w-60' />
            </div>
            <div className='bg-white py-6 md:py-14 rounded-xl flex items-center justify-center'>
              <img src='sponsors/s2.svg' alt='' className='w-44 md:w-60' />
            </div>
            <div className='bg-white py-6 md:py-14 rounded-xl flex items-center justify-center'>
              <img src='sponsors/s3.svg' alt='' className='w-44 md:w-60' />
            </div>
            <div className='bg-white py-6 md:py-14 rounded-xl flex items-center justify-center'>
              <img src='sponsors/s4.svg' alt='' className='w-44 md:w-60' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
