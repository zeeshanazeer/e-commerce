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
import AddToCard from './Pages/AddCard';
import Product from './Pages/Product';
import CardTotal from './Pages/CardTotal';
import CardDitail from './component/CardDitail';
import AddProduct from './Pages/AddProduct';
// import Products from './Pages/Products';

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
        <Route path='/Products' element={<Product/>}/>
        <Route path='/ProductDitail/:id' element={<CardDitail/>}/>
        <Route path='/AddCard' element={<AddToCard/>}/>
        <Route path='/CardTotal' element={<CardTotal/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
