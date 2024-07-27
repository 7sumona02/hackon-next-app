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
    bgColor?: string;
    textColor?: string;
    cardWidth?: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ title, amount, bgColor, textColor, cardWidth }) => {
  return (
    <div className={`${bgColor} py-5 px-10 rounded-xl ${cardWidth}`}>
      <div className={`${textColor} flex flex-col gap-4 justify-center items-center text-3xl md:text-5xl`}>
        <h1 className={`${pixel.className} text-3xl`}>{title}</h1>
        <p>{amount}</p>
      </div>
    </div>
  );
}

export default PrizeCard;