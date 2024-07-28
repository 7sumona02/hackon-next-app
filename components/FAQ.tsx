import { Pixelify_Sans } from 'next/font/google';
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const pixel = Pixelify_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-pixel',
  });

const FAQ = () => {
  return (
    <div className='mt-14 pb-10 px-16' id='faq'>
      <div className='flex flex-col justify-center items-center md:flex-row md:items-start md:gap-10'>
        <h1 className={`${pixel.className} text-4xl text-center md:text-8xl md:text-left`}>FREQUENTLY <br /> ASKED <br /> QUESTIONS</h1>

        <Accordion type="single" collapsible className="w-[95vw] text-xl px-4 flex flex-col gap-4 mt-10 md:mt-0">
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-left'>Who can participate?</AccordionTrigger>
                <AccordionContent className='text-xl'>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
                </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='text-left'>When will the applications close?</AccordionTrigger>
                <AccordionContent className='text-xl'>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='text-left'>How does the application process work?</AccordionTrigger>
                <AccordionContent className='text-xl'>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className='text-left'>How does the application process work?</AccordionTrigger>
                <AccordionContent className='text-xl'>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className='text-left'>How does the application process work?</AccordionTrigger>
                <AccordionContent className='text-xl'>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className='text-left'>How does the application process work?</AccordionTrigger>
                <AccordionContent className='text-xl'>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>
    </div>
  )
}

export default FAQ
