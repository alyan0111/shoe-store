import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/add-product/add-product';
import ProductList from './pages/productsList';
import NavBar from './components/nav_footer/nav';
import Home from './pages/home/home';
import Footer from './components/nav_footer/footer';
import NavBottom from './components/nav_footer/nav_bottom';
import Sale from './pages/sale/sale';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/sale' element={<Sale/>}/>
    </Routes>
    <Footer/>
    <NavBottom/>
    </BrowserRouter>
  );
}

export default App;
