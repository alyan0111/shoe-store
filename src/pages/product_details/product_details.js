import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCarousel from "../../components/Carousels/product_carousel";
import { addToCart } from '../../redux/actions';
import Cart from "../../components/cart/cart";


const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);
  const {email} = useSelector(state => state.auth);
  const navigate = useNavigate();


  const addToCartHandler = () => {
    if (email){setCartOpen(!cartOpen);
    dispatch(addToCart(productDetails, count));}
    else {
      navigate('/login')
    }
    // Optionally, provide visual feedback to the user
    
  };

  const productDetails = useSelector((state) => state.product.product);
  

  const [selectedSizes, setSelectedSizes] = useState(["40/6"]);

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((selectedSize) => selectedSize !== size));
    } else {
      setSelectedSizes([size]);
    }
  };

  if (!productDetails) return <div>Loading...</div>;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-start sm:flex-row shadow-xl p-4 w-full">
        <Link
          to="/"
          className="text-gray-600 flex items-center justify-center gap-2 hover:text-[#64d3e4]"
        >
          Home
          <IoIosArrowForward />
        </Link>
        <Link
          to=""
          className="text-gray-600 flex items-center justify-center gap-2 hover:text-[#64d3e4]"
        >
          {productDetails.product_sale}-{productDetails.product_category}
          <IoIosArrowForward />
        </Link>
        <p className="text-gray-600">{productDetails.product_name}</p>
      </div>
      <div className="container">
        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-[100%] md:w-[50%] lg:[40%]">
            <ProductCarousel productDetails={productDetails} />
          </div>

          <div className="flex flex-col justify-start items-start">
            <h2 className="text-xl font-semibold">
              {productDetails.product_name}
            </h2>
            <p className="text-red-600 text-xl flex flex-col gap-2 sm:flex-row  ">
              <del className="text-gray-600 text-xl">
                Rs.
                {parseFloat(productDetails.product_discount) +
                  parseFloat(productDetails.product_price)}
              </del>
              Rs.{productDetails.product_price}
            </p>
            <p className=" mt-3">Shipping calculated at checkout</p>
            <div>
      <p className="font-medium mt-3">
        Size:
        {selectedSizes.map((size, index) => (
          <span
            key={index}
            className="inline-block mr-2 "
          >
            {size}
          </span>
        ))}
      </p>
      <div>
        {["40/6","41/7","42/8","43/9","44/10","45/11"].map((size, index) => (
          <button
            key={index}
            className={` text-neutral-500 text-sm font-normal p-1 border-2 rounded-full inline-block mr-2 ${
              selectedSizes.includes(size) ? 'line-through text-white bg-neutral-700' : ''
            }`}
            onClick={() => toggleSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex border-2 items-center gap-3 p-0">
                <button className="text-4xl font-medium" onClick={decrement}>
                  -
                </button>
                <p className="font-medium text-lg"> {count}</p>
                <button className="text-3xl font-medium" onClick={increment}>
                  +
                </button>
              </div>
              <button
              onClick={addToCartHandler} className="text-white bg-neutral-700 hover:bg-black py-2 px-4 animate-shake-delayed">
                Add to Cart
              </button>
              {cartOpen && <Cart />}
            </div>
            <div>
              <p className="text-gray-600 mt-2">
                Vendor: {productDetails.product_vendor}
              </p>
              <br />
              <p className="text-gray-600 text-wrap">SKU: {productDetails._id}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center  mt-10">
          <h2 className="font-semibold text-sm sm:text-base  border border-black p-2 w-32 rounded-full">
            Description
          </h2>
        </div>
        <p className="text-left mt-3">{productDetails.product_description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
