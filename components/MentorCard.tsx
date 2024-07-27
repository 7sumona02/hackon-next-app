import React from 'react'

interface MentorCardProps {
    speaker?: string;
    companyImg?: string;
    className?: string;
}

const MentorCard: React.FC<MentorCardProps> = ({speaker, companyImg, className}) => {
  return (
    <div className={`${className} bg-white w-44 md:w-64 h-64 md:h-[340px] rounded-xl p-3 shadow-sm`}>
      <div className='h-44 md:h-60 overflow-hidden'>
        <img src='/m1.jpg' alt='' className='w-full h-full object-cover rounded-xl' />
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-xl md:text-2xl font-bold'>{speaker}</h1>
        <img src={companyImg} alt='' className='w-16 md:w-20 pb-2' />
      </div>
    </div>
  )
}

export default MentorCard
