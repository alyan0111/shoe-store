import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/add-product/add-product';
import ProductList from './pages/productsList';
import NavBar from './components/nav_footer/nav';
import Home from './pages/home/home';
import Footer from './components/nav_footer/footer';
import NavBottom from './components/nav_footer/nav_bottom';
import Sale from './pages/sale/sale';
import ProductDetails from './pages/product_details/product_details';
import Signup from './pages/Login_signup/signup';
import Login from './pages/Login_signup/login';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/products/:productId' element={<ProductDetails/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    <NavBottom/>
    </BrowserRouter>
  );
}

export default App;
