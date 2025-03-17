import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';
import ProductsLipstick from './component/Products/ProductsLipstick.jsx';
import ProductForEyes from './component/Products/ProductForEyes.jsx';
import ProductsBlush from './component/Products/ProductsBlush.jsx';
import ProductBrushes from './component/Products/ProductsBrushes.jsx';
import HomePagesAddedItem from './component/HomePages/HomePagesAddedItem.jsx';
import { CartProvider } from './component/Context/CartContext.jsx';
import HomePagesUSerDetalis from './component/HomePages/HomePagesUserDetalis.jsx';
import HomePageAboutUs from './component/HomePages/HomePageAboutUs.jsx';
import HomePagesContactUs from './component/HomePages/HomePagesContactUs.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <Router>
      <Routes>
        <Route path="" element={<Layout />} >
        <Route path='/' element={<App />} />
        <Route path='/ProductsLipstick' element={<ProductsLipstick></ProductsLipstick>}></Route>
        <Route path="/ProductForEyes" element={<ProductForEyes></ProductForEyes>}></Route>
        <Route path='/ProductsBlush' element={<ProductsBlush></ProductsBlush>}></Route>
        <Route path="/ProductBrushes" element={<ProductBrushes></ProductBrushes>}></Route>
        <Route path='/AddedItem' element={<HomePagesAddedItem></HomePagesAddedItem>}></Route>
        <Route path='/USerDetalis' element={<HomePagesUSerDetalis></HomePagesUSerDetalis>}></Route>
        <Route path='/AboutUS' element={<HomePageAboutUs />}></Route>
        <Route path='/Contact' element={<HomePagesContactUs />}></Route>
        </Route>
        
      </Routes>
    </Router>
    </CartProvider>
  </StrictMode>
);
