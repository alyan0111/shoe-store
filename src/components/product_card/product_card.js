import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-md p-4 m-4">
            <h2 className="text-xl font-semibold">{product.product_name}</h2>
            <p className="text-gray-600">Price:<del>Rs{product.product_discount}</del> Rs{product.product_price}</p>
            <p className="text-gray-600">Description: {product.product_description}</p>
            <p className="text-gray-600">Category: {product.product_category}</p>
            <p className="text-gray-600">Vendor: {product.product_vendor}</p>
            <p className="text-gray-600">Sizes: {product.product_size.join(', ')}</p>
            <img src={`http://localhost:8080${product.product_picture}`} alt={product.product_name} className="mt-4 w-full h-32 object-cover" />
        </div>
    );
};

export default ProductCard;
