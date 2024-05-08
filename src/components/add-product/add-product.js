import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const initialProductState = {
        product_name: '',
        product_price: '',
        product_discount:'',
        product_description: '',
        product_category: '',
        product_vendor: '',
        product_sale:'',
        product_class:'',
        product_size: [],
        product_picture: null,
        picturePath: ''
    };

    const [product, setProduct] = useState(initialProductState);

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

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        let updatedSizes = [...product.product_size];

        if (checked) {
            updatedSizes.push(value);
        } else {
            updatedSizes = updatedSizes.filter((size) => size !== value);
        }

        setProduct({
            ...product,
            product_size: updatedSizes
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { product_name, product_price, product_discount,  product_description, product_category, product_vendor,product_sale,
            product_class, product_size, product_picture } = product;

        const formData = {
            product_name,
            product_price,
            product_discount,
            product_description,
            product_category,
            product_vendor,
            product_sale,
            product_class,
            product_size: product_size.join(','),
            product_picture
        };

        try {
            await axios.post('http://localhost:8080/add-product', formData);
            alert('Product added successfully');
            setProduct(initialProductState);  // Reset form fields
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
                    <label htmlFor="product_discount" className="block text-sm font-medium text-gray-600">Product Discount:</label>
                    <input 
                        type="number" 
                        id="product_discount" 
                        name="product_discount" 
                        min="0" 
                        value={product.product_discount} 
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
                    <label htmlFor="product_category" className="block text-sm font-medium text-gray-600">Product Category:</label>
                    <select 
                        id="product_category" 
                        name="product_category" 
                        value={product.product_category} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="">Select Category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="product_vendor" className="block text-sm font-medium text-gray-600">Product Vendor:</label>
                    <select 
                        id="product_vendor" 
                        name="product_vendor" 
                        value={product.product_vendor} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="">Select Vendor</option>
                        <option value="Marc Kessler">Marc Kessler</option>
                        <option value="Reeva">Reeva</option>
                        <option value="Regale">Regale</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="product_sale" className="block text-sm font-medium text-gray-600">Product sale:</label>
                    <select 
                        id="product_sale" 
                        name="product_sale" 
                        value={product.product_sale} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="none">None</option>
                        <option value="summer sale">Sumer sale</option>
                        <option value="winter sale">Winter sale</option>
                        <option value="festive sale">Festive sale</option>
                        <option value="new arrival">New Arrival</option>

                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="product_class" className="block text-sm font-medium text-gray-600">Product class:</label>
                    <select 
                        id="product_class" 
                        name="product_class" 
                        value={product.product_class} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="">Select class</option>
                        <option value="MK-zen">MK-zen</option>
                        <option value="MK-premium">MK-premium</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Product Size:</label>
                    <div className="flex flex-wrap">
                        {['36/4', '37/5', '38/6', '39/5', '39/7', '40/6', '40/8', '41/7', '41/9', '42/8', '43/9', '44/10', '45/11'].map((size) => (
                            <div key={size} className="mr-4">
                                <input 
                                    type="checkbox" 
                                    id={size} 
                                    name={size} 
                                    value={size} 
                                    checked={product.product_size.includes(size)} 
                                    onChange={handleSizeChange} 
                                />
                                <label htmlFor={size} className="ml-2">{size}</label>
                            </div>
                        ))}
                    </div>
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
