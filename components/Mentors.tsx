import { Pixelify_Sans } from 'next/font/google';
import React from 'react'
import MentorCard from './MentorCard';
import Image from 'next/image';

const pixel = Pixelify_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-pixel',
  });

const Mentors = () => {
  return (
    <div className='mt-28 pb-10'>
      <div className='flex flex-col justify-center items-center relative'>
        <Image src='/Atom.svg' alt='img' height={100} width={100} className='absolute -rotate-12 -top-16 left-14' />
        <h1 className={`${pixel.className} text-4xl text-center z-40`}>SPEAKERS <br /> & MENTORS</h1>

        <div className='pb-10 pt-10'>
            <div className='grid grid-cols-2 gap-4'>
                <MentorCard speaker='NAVIN GUPTA' companyImg='/company/Apple.svg' />
                <MentorCard speaker='XYZ' companyImg='/company/Apple.svg' />
                <MentorCard speaker='ABC' companyImg='/company/Apple.svg' />
                <MentorCard speaker='333' companyImg='/company/Apple.svg' />
            </div>
      </div>
      </div>
    </div>
  )
}

export default Mentors
