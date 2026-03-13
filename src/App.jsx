import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NurserySection from './Components/NurserySection'
import TopSellingProducts from './Components/TopSellingProducts'
import Blogs from './Components/Blogs'
import FAQ from './Components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <NurserySection/>
    <TopSellingProducts/>
    <Blogs/>
    <FAQ/>
    </>
  )
}

export default App
