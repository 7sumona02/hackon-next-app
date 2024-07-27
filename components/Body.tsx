import Image from 'next/image'
import React from 'react'
import Online from './Online'
import { Button } from './ui/button'
import { ChevronRight, MoveUpRight } from 'lucide-react'
import Link from 'next/link'

const Body = () => {
  return (
    <div className='flex justify-center flex-col items-center pb-10'>
      <div className='flex justify-center'>
        <Image src='/Main.svg' alt='bg' width={400} height={400} className='saturate-0 hover:saturate-100 duration-300 transition-all' />
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row md:items-center md:gap-6'>
        <Online />
        <div className='mt-8 flex items-center justify-center md:-translate-y-4'>
          <Button className='bg-[#4ade80] text-black text-xl font-extrabold py-[30px] px-4 hover:bg-[#4ade80]/90'>Apply Now <ChevronRight size={30} /></Button>
        </div>
      </div>
      <div className='mt-4 md:text-2xl'>
        <p className='text-zinc-800'>Interested in Partnering? <Link href=''><span className='underline underline-offset-4 text-black inline-flex font-bold items-center'>Reach out<MoveUpRight size={20} /></span></Link></p>
      </div>
    </div>
  )
}

export default Body
