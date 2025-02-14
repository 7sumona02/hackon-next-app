import Body from '@/components/Body'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Mentors from '@/components/Mentors'
import Navbar from '@/components/Navbar'
import Online from '@/components/Online'
import Prize from '@/components/Prize'
import Sponsors from '@/components/Sponsors'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#E7E6E6] select-none overflow-hidden'>
      <Navbar />
      <Body />
      <Prize />
      <Sponsors />
      <Mentors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
