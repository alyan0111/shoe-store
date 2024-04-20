import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/add-product/add-product';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
