import React from 'react'

interface MentorCardProps {
    speaker?: string;
    companyImg?: string;
}

const MentorCard: React.FC<MentorCardProps> = ({speaker, companyImg}) => {
  return (
    <div className='bg-white w-36 h-56 rounded-lg p-2'>
      <div className='h-36 overflow-hidden'>
        <img src='/m1.jpg' className='w-full h-full object-cover rounded-xl' />
      </div>
      <div className='flex flex-col gap-1 mt-2'>
        <h1 className='text-xl font-semibold'>{speaker}</h1>
        <img src={companyImg} className='w-16' />
      </div>
    </div>
  )
}

export default MentorCard
