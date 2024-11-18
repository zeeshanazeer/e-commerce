import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './component/header';
import { Routes, Route ,Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Footer from './component/Footer';
import Products from './Pages/Products';

export default function App() {
  const [card, setCard] = useState();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/AllProducts' element={<Products/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
