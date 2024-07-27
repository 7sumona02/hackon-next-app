import React from 'react'

interface MentorCardProps {
    speaker?: string;
    companyImg?: string;
    className?: string;
}

const MentorCard: React.FC<MentorCardProps> = ({speaker, companyImg, className}) => {
  return (
    <div className={`${className} bg-white w-44 md:w-64 h-64 md:h-[320px] rounded-xl p-2`}>
      <div className='h-44 md:h-60 overflow-hidden'>
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
