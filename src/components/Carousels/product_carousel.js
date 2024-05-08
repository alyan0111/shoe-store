import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import 'flickity-fade/flickity-fade'



  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    fade: true,
    dots: false,
  };

function ProductCarousel({ productDetails }) {
  return (
    <Flickity
      className={'carousel ' } // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={`http://localhost:8080${productDetails.product_picture}`} alt={productDetails.product_name} className='object-cover h-96'/>
      <img src={`http://localhost:8080${productDetails.product_picture}`} alt={productDetails.product_name} className='object-cover h-96'/>
      
      
    </Flickity>
    
  )
}

export default ProductCarousel;
