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
    <div className='mt-14 pb-14 pt-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`${pixel.className} text-4xl text-center`}>SPONSORS</h1>

        <div className='flex justify-center w-[95vw] flex-col gap-4 mt-10'>
            <div className='bg-white py-8 px-10 rounded-xl flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>polygon</h1>
            </div>
            <div className='bg-white py-8 px-10 rounded-xl flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>polygon</h1>
            </div>
            <div className='bg-white py-8 px-10 rounded-xl flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>polygon</h1>
            </div>
            <div className='bg-white py-8 px-10 rounded-xl flex items-center justify-center'>
                <h1 className='text-2xl font-bold'>polygon</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
