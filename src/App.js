import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/add-product/add-product';
import ProductList from './pages/productsList';
import NavBar from './components/nav_footer/nav';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
