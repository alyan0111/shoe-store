import React from 'react';
import premium_zenbanner1 from './images/exclusive_line/premium_zenbanner1.webp';
import premium_zenbanner from './images/exclusive_line/premium_zenbanner.webp';
import { Link } from 'react-router-dom';

export default function ExclusiveLine() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl my-10'>Exclusive Line</h1>
      <div className='flex flex-row justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        <div className='w-[40%]  overflow-hidden'>
          <Link><img src={premium_zenbanner1} alt='premium_zenbanner1' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
        <div className='w-[40%] overflow-hidden'>
          <Link><img src={premium_zenbanner} alt='premium_zenbanner' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
      </div>
    </div>
  )
}
