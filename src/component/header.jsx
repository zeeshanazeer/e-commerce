import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";




const Nev= [{name:'Home',myPath:"/"},{name:'About',myPath:"/About"},{name:'Contact Us',myPath:"/Contact"},{name:'Login', myPath:"/Login"},{name:'Products', myPath:"/Products"}, {name:'AddNewProducts', myPath:"/AddProduct"}];
export default function Header() {
  // const DarkMood =  true;
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const login = false;
  return (
    <>
    <div>
        <p className='bg-black text-white beaich h-10'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-extrabold pl-2'>ShopNow</span></p>
      </div>
    <div className={`${darkMode?"bg-slate-900 text-white":""} h-20 beaich gap-18 border-b-2 justify-between`} >
      <h1 className='float-left text-2xl font-bold'>Exclusive</h1>
      <div className=''>
        <ul className='ml-24 mr-10 mt-2'>
          {Nev.map((item, i) => (
          <li key={i} className='inline m-1 ml-3 hover:border-b-2 hover:text-gray-500 active:text-gray-500 w-[75px] h-10'>
           <Link to={item.myPath}>{item.name}</Link> 
          </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={ `  beaich bg-[#F5F5F5] w-60 h-10 float-left inline-block`}>
          <input type="search" placeholder='What are you looking for ?' className='float-left border-none bg-[#F5F5F5] h-10 w-52'/>
        <IoSearchSharp className='text-2xl text-black' />
        </div>
        <div className='inline-block beaich text-3xl font-extrabold px-2 h-10'>
        <button onClick={() =>   dispatch(toggleDarkMode())} className='w-8'> {darkMode ?<BsMoonStarsFill /> : <IoSunnyOutline />}</button>
        <CgProfile />
        {login && <div className='inline-block beaich text-3xl font-extrabold px-2 h-10'>
        <MdOutlineShoppingCart />
        <FaRegHeart />
        </div>}
        </div>
         <div>
          
         </div>
      </div>
      
    </div>
  </>
  )
}



