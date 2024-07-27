import { MenuIcon } from 'lucide-react'
import { Pixelify_Sans } from 'next/font/google'
import Image from 'next/image'
import React from 'react';

const pixel = Pixelify_Sans({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-pixel',
});

const Navbar = () => {
  return (
    <div className='relative pb-28'>
        <div className='bg-[#4ade80] px-3 py-2 w-[40vh] fixed top-4 left-[5.5vw] rounded-lg'>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className={`${pixel.className} font-semibold text-xl`}>HACKon</h2>
            </div>
            <div>
                <MenuIcon strokeWidth={3} size={30} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
