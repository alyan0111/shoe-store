import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{ ...style, color:"black",border:"1px solid black", borderRadius:"50px",height:"2rem",width:"2rem",zIndex:"20",  }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ ...style, color:"black",border:"1px solid black", borderRadius:"50px",height:"2rem",width:"2rem",zIndex:"20" }}
      onClick={onClick}
    />
  );
}

const Women = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default value set to 2

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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 400) {
        setSlidesToShow(2);
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
  if (error) return <p>Error: Failed to load products.</p>; // Updated error message

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-screen sm:container p-10 cursor-grab">
      <Slider {...settings}>
        {products.map((product) => {
          return product.product_category === 'women' ? (
            <div key={product._id} className="px-3">
              <div className="relative">
                <Link>
                  <span className="absolute top-2 right-5 bg-red-600 rounded-full py-2.5 px-1 z-10">
                    <p className="text-white text-xs">-50%</p>
                  </span>
                  <img
                    src={`http://localhost:8080${product.product_picture}`}
                    className="max-h-52"
                    alt={product.product_name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'placeholder_image_url'; // Provide a placeholder image URL
                    }}
                  />
                </Link>
              </div>
              <Link className="font-semibold font-mono cursor-pointer duration-300 hover:text-blue-400">
                {product.product_name}
              </Link>
              <p className="text-red-700 text-sm font-sans">
                <del className="text-gray-600">Rs.{product.product_discount || 0}</del> Rs.{product.product_price || 0}
              </p>
            </div>
          ) : null;
        })}
      </Slider>
    </div>
  );
};

export default Women;
