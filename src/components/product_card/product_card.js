import { Carousel, Modal } from "flowbite-react";
import { React, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchProduct } from "../../redux/actions";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleViewDetails = (productId) => {
    dispatch(fetchProduct(productId));
    // Optionally, you can navigate to the product details page here.
  };

  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div >
      <button onClick={() => setOpenModal(true)}>
        <div className="relative group">
        <span className="absolute top-[2%] right-[2%] bg-red-600 rounded-full py-2.5 px-1 z-10">
          <p className="text-white text-xs">-50%</p>
        </span>
          <img
            src={`http://localhost:8080${product.product_picture}`}
            alt={product.product_name}
            className="w-full h-full object-cover "
          />
          <Link
            onClick={() => setOpenModal(true)}
            className="group/2 hidden lg:group-hover:block absolute top-[40%] left-[50%] transform translate-x-[-50%] duration-500 -translate-y-[-40%] bg-white hover:bg-neutral-800 rounded-full py-2 px-4 w-32 text-center"
          >
            <p className="group-hover/2:hidden">Quick view</p>
            <p className="hidden px-9 group-hover/2:block text-2xl ">
              <FiEye className="text-white" />
            </p>
          </Link>
          <Link className="lg:hidden shadow-lg bg-white absolute bottom-1 right-1 rounded-full hover:bg-neutral-800 text-2xl hover:text-white p-1 sm:p-2 z-20">
            <FiEye/>
          </Link>
        </div>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body className="w-[100%] flex flex-col sm:flex-row p-0  gap-4">
          <Modal.Header className="absolute top-2 right-2 z-20 border-none p-0" />
          <Carousel className="h-64 sm:h-[28rem] xl:h-[28rem] 2xl:h-[30rem]">
            <img
              src={`http://localhost:8080${product.product_picture}`}
              alt={product.product_name}
              className="w-full"
            />
          </Carousel>
          <div className="w-[70%] mt-3">
            <h2 className="text-xl font-semibold">{product.product_name}</h2>
            <p className="text-red-600 text-xl flex flex-col gap-2 sm:flex-row  ">
              <del className="text-gray-600">
                Rs.
                {parseFloat(product.product_discount) +
                  parseFloat(product.product_price)}
              </del>{" "}
              Rs.{product.product_price}
            </p>
            <p className="text-sm mt-3">Shipping calculated at checkout</p>
            <p className="text-sm font-medium mt-3">
              Sizes:{" "}
              <span className="border rounded-lg">
                {product.product_size.join(", ")}
              </span>
            </p>

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
              <button className="text-white bg-neutral-700 hover:bg-black py-2 px-4 animate-shake-delayed">
                Add to Cart
              </button>
            </div>
            <p className="text-gray-600 mt-2">
              Vendor: {product.product_vendor}
            </p>
            <br />
            <p className="text-gray-600">SKU: {product._id}</p>
            <br />
            <Link
            to='/products/:productId'
              onClick={() => handleViewDetails(product._id)}
              className=" font-semibold text-sm duration-300 hover:text-[#64d3e4] flex items-center group"
            >
              View Full Details{" "}
              <span className="group-hover:text-xs group-hover:ml-1 ">
                <FaLongArrowAltRight />
              </span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <Link 
      to='/products/:productId'
      onClick={() => handleViewDetails(product._id)} className="text-xl font-semibold hover:text-[#64d3e4]">
        {product.product_name}
      </Link>
      <p className="text-red-600">
        <del className="text-gray-600">
          Rs.
          {parseFloat(product.product_discount) +
            parseFloat(product.product_price)}
        </del>{" "}
        Rs.{product.product_price}
      </p>
    </div>
  );
};

export default ProductCard;
