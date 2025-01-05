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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePagesNav></HomePagesNav>
      <HomePagesHead></HomePagesHead>
      <HomePagesArtical></HomePagesArtical>
      <HomePageProduct ></HomePageProduct>
      <HomePagesReview></HomePagesReview>
      <HomePagesFooter />
      
    </>
  )
}

export default App

