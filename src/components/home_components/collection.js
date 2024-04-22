import React from 'react';
import Men from './images/collection/Men.webp';
import Women from './images/collection/Women.webp';
import Accessories from './images/collection/Accessories.webp'
import { Link } from 'react-router-dom';

export default function Collection() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl my-16'>Collections</h1>
      <div className='flex flex-col md:flex-row justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        <div className=' md:w-[30%]  overflow-hidden'>
          <Link><img src={Men} alt='Men' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
        <div className='md:w-[30%] overflow-hidden'>
          <Link><img src={Women} alt='Women' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
        <div className='md:w-[30%] overflow-hidden'>
          <Link><img src={Accessories} alt='Accessories' className='w-full h-full object-cover transition-transform transform duration-1000 hover:scale-110'/></Link>
        </div>
      </div>
    </div>
  )
}
