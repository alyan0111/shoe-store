import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        product_catagory: '',
        product_picture: null,
        picturePath: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleFileChange = async (e) => {
        const formData = new FormData();
        formData.append('product_picture', e.target.files[0]);

        try {
            const response = await axios.post('http://localhost:8080/upload-picture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProduct({
                ...product,
                product_picture: response.data.picturePath
            });
        } catch (error) {
            alert('Failed to upload picture');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { product_name, product_price, product_description, product_catagory, product_picture } = product;

        const formData = {
            product_name,
            product_price,
            product_description,
            product_catagory,
            product_picture
        };

        try {
            await axios.post('http://localhost:8080/add-product', formData);
            alert('Product added successfully');
        } catch (error) {
            alert('Failed to add product');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="product_name" className="block text-sm font-medium text-gray-600">Product Name:</label>
                    <input 
                        type="text" 
                        id="product_name" 
                        name="product_name" 
                        value={product.product_name} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="product_price" className="block text-sm font-medium text-gray-600">Product Price:</label>
                    <input 
                        type="number" 
                        id="product_price" 
                        name="product_price" 
                        min="0" 
                        value={product.product_price} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="product_description" className="block text-sm font-medium text-gray-600">Product Description:</label>
                    <textarea 
                        id="product_description" 
                        name="product_description" 
                        rows="4" 
                        value={product.product_description} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="product_catagory" className="block text-sm font-medium text-gray-600">Product Category:</label>
                    <input 
                        type="text" 
                        id="product_catagory" 
                        name="product_catagory" 
                        value={product.product_catagory} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="product_picture" className="block text-sm font-medium text-gray-600">Product Picture:</label>
                    <input 
                        type="file" 
                        id="product_picture" 
                        name="product_picture" 
                        onChange={handleFileChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
