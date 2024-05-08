import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const navigate =useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch login action
      const response = await dispatch(login(formData.email,formData.password));
      console.log('Login successful:', response); // Log the response data
      navigate('/')
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mt-5 mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}
       className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        required/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        required/>
        <button type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >Login</button>
      </form>
    </div>
  );
};

export default Login;
