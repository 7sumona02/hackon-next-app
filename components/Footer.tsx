import { Pixelify_Sans } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import { FaDiscord, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { SiShadcnui, SiVercel } from 'react-icons/si';

const pixel = Pixelify_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-pixel',
  });  

const Footer = () => {
  return (
    <div className="px-4 p-10 bg-[url('/FooterBg.svg')] bg-cover bg-center">
        <div className='flex justify-center pb-5 rotate-3'>
            <Image src='/Robot.svg' alt='img' height={200} width={200} />
        </div>
        <div className='bg-white p-10 rounded-t-xl'>
        <div className='flex flex-col items-start'>
            <h1 className={`${pixel.className} text-4xl`}>BREAK. <br /> ALL. <br /> BARRIERS.</h1>
            <div className='flex gap-3 mt-5'>
                <div className='p-2 bg-black rounded-lg'>
                    <FaYoutube className='invert text-2xl' />
                </div>
                <div className='p-2 bg-black rounded-lg'>
                    <FaLinkedin className='invert text-2xl' />
                </div>
                <div className='p-2 bg-black rounded-lg'>
                    <FaTwitter className='invert text-2xl' />
                </div>
                <div className='p-2 bg-black rounded-lg'>
                    <FaDiscord className='invert text-2xl' />
                </div>
                <div className='p-2 bg-black rounded-lg'>
                    <FaTelegram className='invert text-2xl' />
                </div>
            </div>

            <div className="flex h-5 items-center space-x-4 text-sm mt-5">
                <div>+91 1234567890</div>
                <Separator orientation="vertical" className='bg-zinc-800' />
                <div>contact@hackon.tech</div>
            </div>
        </div>
        <div className='mt-2'>
                    <Link href=''>
                        <span className=' text-black inline-flex items-center'>Code of Conduct<MoveUpRight size={20} /></span>
                    </Link>
                </div>
                <Separator className="my-4 bg-zinc-800" />
                <div>
                    <p className='font-semibold flex items-center'><SiVercel className='mr-1' />Vercel and <SiShadcnui className='mr-1 ml-2' /> Shadcn</p>
                </div>
        </div>
        
        <div className='bg-zinc-200 p-4 rounded-b-xl'>
        <div className='flex justify-center'>
            <p>made by Sumona</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
