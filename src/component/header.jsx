// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { Link } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { IoSunnyOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../store/darkModeSlice";




// const Nev= [{name:'Home',myPath:"/"},{name:'About',myPath:"/About"},{name:'Contact Us',myPath:"/Contact"},{name:'Login', myPath:"/Login"},{name:'Products', myPath:"/Products"}, {name:'AddNewProducts', myPath:"/AddProduct"}];
// export default function Header() {
//   // const DarkMood =  true;
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.darkMode.darkMode);
//   const login = false;
//   return (
//   //   <>
    
//   //   <div className={`${darkMode?"bg-slate-900 text-white":""} h-20 beaich gap-18 border-b-2 justify-between`} >
//   //     <h1 className='float-left text-2xl font-bold'>Exclusive</h1>
//   //     <div className=''>
//   //       <ul className='ml-24 mr-10 mt-2'>
//   //         {Nev.map((item, i) => (
//   //         <li key={i} className='inline m-1 ml-3 hover:border-b-2 hover:text-gray-500 active:text-gray-500 w-[75px] h-10'>
//   //          <Link to={item.myPath}>{item.name}</Link> 
//   //         </li>
//   //         ))}
//   //       </ul>
//   //     </div>
//   //     <div>
//   //       <div className={ `  beaich bg-[#F5F5F5] w-60 h-10 float-left inline-block`}>
//   //         <input type="search" placeholder='What are you looking for ?' className='float-left border-none bg-[#F5F5F5] h-10 w-52'/>
//   //       <IoSearchSharp className='text-2xl text-black' />
//   //       </div>
//   //       <div className='inline-block beaich text-3xl font-extrabold px-2 h-10'>
//   //       <button onClick={() =>   dispatch(toggleDarkMode())} className='w-8'> {darkMode ?<BsMoonStarsFill /> : <IoSunnyOutline />}</button>
//   //       <CgProfile />
//   //       {login && <div className='inline-block beaich text-3xl font-extrabold px-2 h-10'>
//   //       <MdOutlineShoppingCart />
//   //       <FaRegHeart />
//   //       </div>}
//   //       </div>
//   //        <div>
          
//   //        </div>
//   //     </div>
      
//   //   </div>
//   // </>
//   // <>
//   // <nav
//   //       className={` flex   items-center  justify-evenly p-6  border-b-2 border-gray-100  transition-colors duration-500 relative ${
//   //         darkMode ? "darkTheme" : ""
//   //       } bg-white `}
//   //     >
//   //       {/* logo */}
//   //       <div className="imglogo center ">
//   //         <Link to={"/"}>
//   //           {" "}
            
//   //         </Link>
//   //         <Link to={"/"}>
//   //           {" "}
//   //           <img
//   //             className="w-10 xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobile:flex"
//   //             src={darkMode ? mdDarkLogo : logomd}
//   //             alt="logo"
//   //           />
//   //         </Link>
//   //       </div>
//   //       {/* searchbar */}
//   //       <div className="  mobile:w-[200px]  md:w-[250px] center lg:w-[250px]  h-[38px] gap-6">
//   //         <div
//   //           className={`  sm:w-[400px]  w-[243px] h-[38px] flex gap-2 center  rounded bg-[#F5F5F5] ${
//   //             darkMode ? "bg-black" : ""
//   //           }`}
//   //         >
//   //           <form
//   //             onSubmit={submitHandler}
//   //             className="search   h-6 flex justify-center "
//   //           >
//   //             <input
//   //               className={`outline-none  w-[100%] bg-[#F5F5F5] placeholder:font-normal md:text-base text-xs text-gray-300 ${
//   //                 darkMode ? "bg-black" : ""
//   //               } ${darkMode ? "placeholder:text-white" : ""}  ${
//   //                 darkMode ? "text-white" : ""
//   //               }`}
//   //               placeholder="What are looking for"
//   //               type="search"
//   //               name="search"
//   //               id=" searchinp"
//   //             />
//   //             <div>
//   //               <button type="submit">
//   //                 <CiSearch
//   //                   className={`${
//   //                     darkMode ? "text-white" : ""
//   //                   } text-2xl cursor-pointer font-semibold`}
//   //                 />
//   //               </button>
//   //             </div>
//   //           </form>
//   //         </div>
//   //       </div>

//   //       {/* links */}
//   //       <div className="link sm:hidden md:hidden mobile:hidden lg:flex xl:flex 2xl:flex ">
//   //         <ul className="flex  gap-5">
//   //           {Nev.map((item, i) => {
//   //             return (
//   //               <li
//   //                 className={` ${
//   //                   darkMode
//   //                     ? "text-white link-dark-underline link-dark-underline-black"
//   //                     : ""
//   //                 }  hover:cursor-pointer`}
//   //                 key={i}
//   //               >
//   //                 <Link
//   //                   className="link-underline link-underline-black link-underline:hover"
//   //                   to={item.myPath}
//   //                 >
//   //                   {" "}
//   //                   {item.name}
//   //                 </Link>
//   //               </li>
//   //             );
//   //           })}

//   //           {logSing ? null : (
//   //             <>
//   //               <li className=" hover:cursor-pointer">
//   //                 <Link
//   //                   className={`link-underline link-underline-black link-underline:hover ${
//   //                     darkMode
//   //                       ? "text-white link-dark-underline link-dark-underline-black"
//   //                       : ""
//   //                   } `}
//   //                   to={"/SiginUp"}
//   //                 >
//   //                   SignUp
//   //                 </Link>
//   //               </li>
//   //               <li className=" hover:cursor-pointer ">
//   //                 <Link
//   //                   className={`link-underline link-underline-black link-underline:hover ${
//   //                     darkMode
//   //                       ? "text-white link-dark-underline link-dark-underline-black"
//   //                       : ""
//   //                   } `}
//   //                   to={"/Login"}
//   //                 >
//   //                   Login
//   //                 </Link>
//   //               </li>
//   //             </>
//   //           )}
//   //         </ul>
//   //       </div>
//   //       <div className="flex justify-center items-center list-none gap-2 mobile:text-xs sm:text-xs">
//   //         {" "}
//   //         <li className="2xl:text-2xl xl:text-2xl  lg:text-2xl md:text-xl sm:text-sm mobile:text-sm">
//   //           <button onClick={() => dispatch(toggleDarkMode())}>
//   //             {darkMode ? (
//   //               <IoSunny className="text-lg text-white " />
//   //             ) : (
//   //               <IoMoon className="text-lg text-black " />
//   //             )}
//   //           </button>
//   //         </li>
//   //         {logSing === true ? (
//   //           <>
//   //             <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
//   //               <CiHeart />
//   //             </li>
//   //             <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
//   //            <Link to={"/addCard"}> <MdOutlineShoppingCart /></Link>   
//   //             </li>

//   //             <li className="w-[30px] h-[30px] rounded-full overflow-hidden">
//   //               <Link to="/profile">
//   //                 <img src={mypic} alt="" />
//   //               </Link>
//   //             </li>
//   //           </>
//   //         ) : (
//   //           <>
//   //             <li className="text-myTheme text-2xl hover:cursor-pointer">
//   //               <Link to={"/profile"}>
//   //                 <FaUserCircle />
//   //               </Link>
//   //             </li>
//   //           </>
//   //         )}
//   //       </div>

//   //       {/* sm screen */}

//   //       {menu ? (
//   //         <div
//   //           data-aos="fade-right"
//   //           className="link top-[70px] bg-white w-[100%] z-10   lg:hidden xl:hidden 2xl:hidden absolute"
//   //         >
//   //           <ul className="flex pl-8 flex-col gap-5">
//   //             {Mylink.map((value, index) => {
//   //               return (
//   //                 <li className=" hover:cursor-pointer" key={index}>
//   //                   <Link
//   //                     className="link-underline link-underline-black link-underline:hover"
//   //                     onClick={() => {
//   //                       setMenu(false);
//   //                     }}
//   //                     to={value.path}
//   //                   >
//   //                     {" "}
//   //                     {value.name}
//   //                   </Link>
//   //                 </li>
//   //               );
//   //             })}

//   //             {logSing === true ? (
//   //               <>
//   //                 <li className=" hover:cursor-pointer">
//   //                   <Link
//   //                     className="link-underline link-underline-black link-underline:hover"
//   //                     to={"/SiginUp"}
//   //                   >
//   //                     SignUp
//   //                   </Link>
//   //                 </li>
//   //                 {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
//   //                 <CiHeart />
//   //               </li>
//   //               <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
//   //                 <MdOutlineShoppingCart />
//   //               </li> */}

//   //                 {/* <li className="w-[30px] h-[35px] rounded-full overflow-hidden">
//   //                 <img src={mypic} alt="" />
//   //               </li> */}
//   //               </>
//   //             ) : (
//   //               <>
//   //                 <li className=" hover:cursor-pointer">
//   //                   <Link
//   //                     className="link-underline link-underline-black link-underline:hover"
//   //                     to={"/SiginUp"}
//   //                   >
//   //                     SignUp
//   //                   </Link>
//   //                 </li>
//   //                 <li className=" hover:cursor-pointer">
//   //                   <Link
//   //                     className="link-underline link-underline-black link-underline:hover"
//   //                     to={"/Login"}
//   //                   >
//   //                     Login
//   //                   </Link>
//   //                 </li>
//   //                 {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
//   //                 <FaUserCircle />
//   //               </li> */}
//   //               </>
//   //             )}
//   //           </ul>
//   //         </div>
//   //       ) : null}

//   //       <div className="menu center sm:flex md:flex mobile:flex lg:hidden xl:hidden 2xl:hidden">
//   //         <button
//   //           onClick={() => {
//   //             setMenu(!menu);
//   //           }}
//   //         >
//   //           {menu ? <IoMdClose /> : <MdOutlineMenu />}
//   //         </button>
//   //       </div>
//   //     </nav>
//   //   </>
//   )
// }

import { MdOutlineMenu, MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { useNavigate } from "react-router-dom";

let Mylink = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/Contact" },
  { name: "About", path: "/About" },
  {name:'Login', path:"/Login"},
  {name:'Products', path:"/Products"},
  // You can add more links here
];
let logSing = true;  // You may want to manage login state dynamically

export default function Header() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target.children[0].value;
    if (!searchTerm) return;
    navigate(`/search?query=${searchTerm}`);
    e.target.children[0].value = "";
  };

  return (
    <>
    <div>
        <p className='bg-black text-white beaich h-10'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-extrabold pl-2'>ShopNow</span></p>
      </div>
      <nav
        className={`flex justify-center  items-center p-6 border-b-2 border-gray-100 transition-colors duration-500 relative ${darkMode ? "bg-slate-800" : "text-white"} `}>
        {/* Logo */}
        <div className="imglogo center w-32">
          <Link to={"/"}>
          <h1 className={`float-left text-2xl text-black font-bold ${darkMode ? 'text-white': ''}`}>Exclusive</h1>
          </Link>
        </div>

       

        {/* Links */}
        <div className="hidden ml-4 mr-4 lg:flex items-center gap-5 w-[25%]">
          <ul className="flex gap-5">
            {Mylink.map((value, index) => (
              <li key={index} className={`hover:cursor-pointer ${darkMode ? 'text-white': ''} text-black`}>
                <Link
                  to={value.path}
                  className="link-underline link-underline-black link-underline:hover"
                >
                  {value.name}
                </Link>
              </li>
            ))}
            {logSing ? null : (
              <>
                <li className="hover:cursor-pointer">
                  <Link
                    to={"/SignUp"}
                    className={`link-underline text-black link-underline-black  ${darkMode ? 'text-white': ''}`}
                  >
                    SignUp
                  </Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link
                    to={"/Login"}
                    className={`link-underline text-black link-underline-black  ${darkMode ? 'text-white': ''}`}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

         {/* Search Bar */}
         <div className="flex gap-6 items-center">
          <div className={`w-[243px] h-[38px] rounded flex items-center gap-2  ${darkMode ? 'text-white': ''}`}>
            <form onSubmit={submitHandler} className="flex w-full h-6">
              <input
                className={` ${darkMode ? 'text-white': ''}text-black w-full outline-none bg-transparent placeholder:font-normal text-xs md:text-base text-gray-300`}
                placeholder="What are you looking for?"
                type="search"
                name="search"
                id="searchinp"
              />
              <button type="submit" className="text-2xl cursor-pointer">
                <CiSearch className={` ${darkMode ? 'text-white': ''} text-black`} />
              </button>
            </form>
          </div>
        </div>

        {/* Dark Mode Button and Icons */}
        <div className="flex items-center gap-4 ml-4">
          <button onClick={() => dispatch(toggleDarkMode())}>
            {darkMode ? (
              <IoSunny className="text-lg text-white" />
            ) : (
              <IoMoon className="text-lg text-black " />
            )}
          </button>

          {logSing && (
            <>
              <CiHeart className={`text-2xl text-black cursor-pointer hover:text-gray  ${darkMode ? 'text-white': ''}`} />
              <Link to="/AddToCard">
                <MdOutlineShoppingCart className={`text-2xl text-black cursor-pointer hover:text-gray  ${darkMode ? 'text-white': ''}`} />
              </Link>
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Link to="/Profile">
                  <img src="/path/to/your/image.jpg" alt="Profile" />
                </Link>
              </div>
            </>
          )}

          {!logSing && (
            <Link to="/profile">
              <FaUserCircle className="text-2xl cursor-pointer hover:text-myTheme" />
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenu(!menu)} className="text-2xl text-black">
            {menu ? <IoMdClose /> : <MdOutlineMenu />}
          </button>
        </div>

        {menu && (
          <div
            data-aos="fade-right"
            className="absolute top-[70px] left-0 w-full bg-white z-10 lg:hidden"
          >
            <ul className="flex flex-col gap-5 pl-8 py-4">
              {Mylink.map((value, index) => (
                <li key={index}>
                  <Link
                    to={value.path}
                    onClick={() => setMenu(false)}
                    className="link-underline link-underline-black"
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
              {logSing && (
                <>
                  <li>
                    <Link to="/SignUp" className="link-underline link-underline-black">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
              {!logSing && (
                <>
                  <li>
                    <Link to="/Login" className="link-underline link-underline-black">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}


