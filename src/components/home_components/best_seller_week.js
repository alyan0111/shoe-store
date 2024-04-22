import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import best_seller_1b from './images/Week_Best/best-seller-1b.webp';
import best_seller_2b from './images/Week_Best/best-seller-2b.webp';
import best_seller_2 from './images/Week_Best/best-seller-2.webp';
import best_seller_1 from './images/Week_Best/best-seller-1.webp';

export default function BestSellerWeek() {
    const settings = {
        dots: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };

    return (
        <div className="container w-screen flex flex-col justify-center items-center  my-8">
            <div className="text-center mb-4">
                <h1 className="font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl my-16">Best Sellers of the Week</h1>
            </div>
            <div className="w-[90%] sm:w-[95%] md:hidden ">
                <Slider {...settings}>
                    <img src={best_seller_1b} alt='week best seller' className=''  />
                    <img src={best_seller_2b} alt='week best seller' />
                </Slider>
            </div>
            <div className="w-[95%] hidden md:block">
                <Slider {...settings}>
                    <img src={best_seller_1} alt='week best seller' className="w-full" />
                    <img src={best_seller_2} alt='week best seller' className="w-full" />
                </Slider>
            </div>
        </div>
    )
}
