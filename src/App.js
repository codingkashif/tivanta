import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import Products from './components/products'
import Price from './components/price'
import Gallery from './components/gallery'
import About from './components/about'
import Contact from './components/contact'
import 'font-awesome/css/font-awesome.min.css'

const App = ()=>
  {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/price" element={<Price />}/>
        </Routes>
      </BrowserRouter>
    )
  }
  export default App;