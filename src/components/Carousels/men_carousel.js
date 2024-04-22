import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();

    // Set number of slides to show based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="">
        <Slider {...settings}>
          {products.map((product) => {
            return product.product_category === "men" ? (
              <div key={product._id} className='px-3'>
                <img 
                  src={`http://localhost:8080${product.product_picture}`} 
                  alt={product.product_name} 
                  className="w-full h-32 rounded" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'placeholder_image_url'; // Provide a placeholder image URL
                  }}
                />
                <h2 className="text-xl font-semibold">{product.product_name}</h2>
                <p className='text-red-700'><del className="text-gray-600">Rs.{product.product_discount || 0}</del> Rs.{product.product_price || 0}</p>
              </div>
            ) : null;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Men;
