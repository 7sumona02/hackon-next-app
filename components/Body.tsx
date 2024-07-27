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
        <Image src='/Main.svg' alt='bg' width={400} height={400} />
      </div>
      <Online />
      <div className='mt-8 flex items-center'>
        <Button className='bg-[#4ade80] text-black text-xl font-extrabold py-6 hover:bg-[#4ade80]/90'>Apply Now <ChevronRight size={30} /></Button>
      </div>
      <div className='mt-4'>
        <p className='text-zinc-500'>Interested in Partnering? <Link href=''><span className='underline underline-offset-4 text-black inline-flex items-center'>Reach out<MoveUpRight size={20} /></span></Link></p>
      </div>
    </div>
  )
}

export default Body
