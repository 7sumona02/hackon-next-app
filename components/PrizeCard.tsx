import { Pixelify_Sans } from 'next/font/google';
import React from 'react';

const pixel = Pixelify_Sans({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-pixel',
});

// Define the props interface
interface PrizeCardProps {
    title?: string;  
    amount?: string; 
}

const PrizeCard: React.FC<PrizeCardProps> = ({ title, amount }) => {
  return (
    <div className='bg-white py-5 px-10 rounded-xl w-[95vw]'>
      <div className='flex flex-col justify-center items-center text-3xl'>
        <h1 className={`${pixel.className} text-3xl`}>{title}</h1>
        <p>{amount}</p>
      </div>
    </div>
  );
}

export default PrizeCard;