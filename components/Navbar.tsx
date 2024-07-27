// import { MenuIcon } from 'lucide-react'
// import { Pixelify_Sans } from 'next/font/google'
// import Image from 'next/image'
// import React from 'react';

// const pixel = Pixelify_Sans({
//   weight: '700',
//   subsets: ['latin'],
//   variable: '--font-pixel',
// });

// const Navbar = () => {
//   return (
//     <div className='relative pb-28 z-50'>
//         <div className='bg-[#4ade80] px-3 py-2 w-[40vh] fixed top-4 left-[5.5vw] rounded-lg'>
//         <div className='flex justify-between items-center'>
//             <div>
//                 <h2 className={`${pixel.className} font-semibold text-xl`}>HACKon</h2>
//             </div>
//             <div>
//                 <MenuIcon strokeWidth={3} size={30} />
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

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
    <div className='relative pb-28 z-50'>
      <div className="navbar bg-[#4ade80] flex-row-reverse w-[40vh] fixed top-4 left-[5.5vw] rounded-lg">
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <RiMenu3Line className='size-8' />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-zinc-200 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
        <Link href='#partners'><li className='text-xl hover:bg-zinc-200/80 transition-all'><a>PARTNERS</a></li></Link>
        <Link href='#speakers'><li className='text-xl hover:bg-zinc-200/80 transition-all'><a>SPEAKERS</a></li></Link>
        <Link href='#faq'><li className='text-xl hover:bg-zinc-200/80 transition-all'><a>FAQ</a></li></Link>
        <Link href=''><li className='text-xl text-white btn transition-all mt-2'><a>REGISTER</a></li></Link>
      </ul>
    </div>
  </div>
  <div className="navbar-start">
    <a className={`${pixel.className} font-semibold text-xl btn btn-ghost`}>HACKon</a>
  </div>
</div>
    </div>
  )
}

export default Navbar

