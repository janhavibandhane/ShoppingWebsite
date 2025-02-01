import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePagesNav from './component/HomePages/HomePagesNav'
import HomePagesHead from './component/HomePages/HomePagesHead'
import HomePagesArtical from './component/HomePages/HomePagesArtical'
import HomePageProduct from './component/HomePages/HomePagesProduct'
import HomePagesReview from './component/HomePages/HomePagesReview'
import HomePagesFooter from './component/HomePages/HomePagesFooter'
import ProductsLipstick from './component/Products/ProductsLipstick'
import ProductForEyes from './component/Products/ProductForEyes'


function App() {
  const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
    };
  
    // Function to remove items from the cart
    const removeFromCart = (index) => {
      setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

  return (
    <>
      
      <HomePagesHead></HomePagesHead>
      <HomePagesArtical></HomePagesArtical>
      <HomePageProduct addToCart={addToCart} ></HomePageProduct>
      <HomePagesReview></HomePagesReview>

      
    </>
  )
}

export default App

