import Body from '@/components/Body'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Mentors from '@/components/Mentors'
import Navbar from '@/components/Navbar'
import Online from '@/components/Online'
import Prize from '@/components/Prize'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#E7E6E6]'>
      <Navbar />
      <Body />
      <Prize />
      <Mentors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
