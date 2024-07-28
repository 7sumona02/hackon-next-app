import { DM_Sans } from 'next/font/google'
import React from 'react'

const dm = DM_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-dm',
  });

const Online = () => {
  return (
    <div className='flex justify-center font-semibold text-lg tracking-wide'>
      <div className='flex'>
        <div className='bg-white rounded-l-lg'>
            <div className='p-4 flex items-center gap-2'>
              <div className="status bg-[#4ade80]"></div>
                <p>Online</p>
            </div>
        </div>
        <div className='bg-zinc-950 rounded-tr-lg rounded-br-lg flex items-center p-4'>
            <p className='text-white'>24 JUN - 24 JUL &apos;24</p>
        </div>
      </div>
    </div>
  )
}

export default Online
