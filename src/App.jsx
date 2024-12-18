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
import Product from './Pages/Product';
// import CardTotal from './Pages/CardTotal';
import CardDitail from './component/CardDitail';
import AddProduct from './Pages/AddProduct';
import Search from './Pages/Search';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import AddToCard from './Pages/AddToCard';
// import Products from './Pages/Products';

export default function App() {

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
        <Route path='/AddToCard' element={<AddToCard/>}/>
        {/* <Route path='/CardTotal' element={<CardTotal/>}/> */}
        <Route path='/AddProduct' element={<AddProduct/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
