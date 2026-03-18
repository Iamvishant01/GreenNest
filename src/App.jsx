import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar'
import NurserySection from './Components/NurserySection'
import TopSellingProducts from './Components/TopSellingProducts'
import Blogs from './Components/Blogs'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import GreenNestLogin from './Components/GreenNestLogin'

// Home Page Layout
const Home = () => {
  return (
    <>
      <Navbar />
      <NurserySection />
      <TopSellingProducts />
      <Blogs />
      <FAQ />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Login Page */}
        <Route path="/admin" element={<GreenNestLogin />} />

      </Routes>
    </Router>
  );
}

export default App;