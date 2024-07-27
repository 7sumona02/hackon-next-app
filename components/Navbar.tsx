import { Pixelify_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { RiMenu3Line } from 'react-icons/ri'

const pixel = Pixelify_Sans({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-pixel',
});

const Navbar = () => {
  return (
    <div className='relative flex justify-center pb-28 z-50'>
      <div className="navbar bg-[#4ade80] flex-row-reverse w-[40vh] md:w-[96vw] fixed top-4 rounded-lg">
      <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <Link href='#partners'><li className='font-bold hover:bg-zinc-200/40 duration-300 rounded-lg transition-all'><a className='text-lg'>PARTNERS</a></li></Link>
            <Link href='#speakers'><li className='font-bold hover:bg-zinc-200/40 duration-300 rounded-lg transition-all'><a className='text-lg'>SPEAKERS</a></li></Link>
            <Link href='#faq'><li className='font-bold hover:bg-zinc-200/40 duration-300 rounded-lg transition-all'><a className='text-lg'>FAQ</a></li></Link>
            <Link href=''><li className='text-[16px] text-white btn rounded-lg transition-all ml-4 text-left'><a>REGISTER</a></li></Link>
          </ul>
        </div>
  <div className="navbar-end md:hidden">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <RiMenu3Line className='size-8' />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-zinc-200 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
        <Link href='#partners'><li className=' hover:bg-zinc-200/80 transition-all'><a className='text-lg'>PARTNERS</a></li></Link>
        <Link href='#speakers'><li className=' hover:bg-zinc-200/80 transition-all'><a className='text-lg'>SPEAKERS</a></li></Link>
        <Link href='#faq'><li className=' hover:bg-zinc-200/80 transition-all'><a className='text-lg'>FAQ</a></li></Link>
        <Link href=''><li className='text-xl text-white btn transition-all mt-2 w-full'><a>REGISTER</a></li></Link>
      </ul>
    </div>
  </div>
  <div className="navbar-start">
    <a className={`${pixel.className} font-semibold text-xl btn btn-ghost hover:bg-transparent`}>HACKon</a>
  </div>
</div>
    </div>
  )
}

export default Navbar

