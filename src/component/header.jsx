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
import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

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
    <div className="w-[100%] h-32">
      {/* Summer Sale Banner */}
      <div>
        <p className="bg-black text-white h-10 flex items-center justify-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-extrabold pl-2">ShopNow</span>
        </p>
      </div>
  
      {/* Navbar */}
     <nav
        className={`flex items-center justify-evenly p-6 border-b-2 border-gray-100 transition-colors duration-500 relative ${darkMode ? "bg-slate-800" : "bg-white text-black"}`}
      >
        {/* Logo */}
        <div className="imglogo center">
          <Link to={"/"}>
            <img className="w-16" src="https://i.imghippo.com/files/lFVw6430ySw.png" alt="logo" />
          </Link>
        </div>
  
        {/* Links */}
        <div className="hidden lg:flex items-center gap-5 w-[25%]">
          <ul className="flex">
            {Mylink.map((value, index) => (
              <li key={index} className={`hover:cursor-pointer p-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                <Link to={value.path} className="link-underline link-underline-black">
                  {value.name}
                </Link>
              </li>
            ))}
            {!logSing && (
              <>
                <li className="hover:cursor-pointer">
                  <Link to={"/SignUp"} className={`link-underline ${darkMode ? 'text-white' : 'text-black'}`}>
                    SignUp
                  </Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to={"/Login"} className={`link-underline ${darkMode ? 'text-white' : 'text-black'}`}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="mobile:w-full md:w-[150px] lg:w-[150px] h-[30px] gap-6">
  <div
    className={`sm:w-[200px] w-full h-[32px] p-1 flex gap-2 center rounded bg-[#F5F5F5] ${darkMode ? "bg-black" : ""}`}
  >
    <form onSubmit={submitHandler} className="search h-6 flex justify-center w-full">
      <input
        className={`outline-none bg-[#F5F5F5] placeholder:font-normal md:text-base text-xs text-gray-300 ${darkMode ? "bg-black" : ""} ${darkMode ? "placeholder:text-white" : ""} ${darkMode ? "text-white" : ""} w-full`}
        placeholder="What are you looking for"
        type="search"
        name="search"
        id="searchinp"
      />
      <div>
        <button type="submit">
          <CiSearch
            className={`${darkMode ? "text-white" : ""} text-2xl cursor-pointer font-semibold`}
          />
        </button>
      </div>
    </form>
  </div>
</div>


        {/* Dark Mode Button and Icons */}
        <div className="flex w-28 justify-center items-center list-none gap-2 mobile:text-xs sm:text-xs">
          <li className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm">
            <button onClick={() => dispatch(toggleDarkMode())}>
              {darkMode ? <IoSunny className="text-lg text-white" /> : <IoMoon className="text-lg text-black" />}
            </button>
          </li>
          {logSing ? (
            <>
              <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <CiHeart className={`${darkMode ? "bg-black text-white rounded-full font-extrabold text-2xl p-1" : "text-black bg-transparent"}`} />
              </li>
              <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <Link to={"/AddToCard"}>
                  <MdOutlineShoppingCart className={`${darkMode ? "bg-black text-white rounded-full font-bold p-1" : "text-black bg-transparent"}`} />
                </Link>
              </li>
              <li className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Link to="/profile">
                  <img src="https://i.imghippo.com/files/spe3216xYQ.jpg" alt="Profile" />
                </Link>
              </li>
            </>
          ) : (
            <li className="text-myTheme text-2xl hover:cursor-pointer">
              <Link to={"/profile"}>
                <FaUserCircle />
              </Link>
            </li>
          )}
        </div>
  
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenu(!menu)} className="text-2xl text-black">
            {menu ? <IoMdClose /> : <MdOutlineMenu />}
          </button>
        </div>
  
        {/* Mobile Menu Items */}
        {menu && (
          <div className="absolute top-[70px] left-0 w-full bg-white z-10 lg:hidden">
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
              {!logSing && (
                <>
                  <li>
                    <Link to="/SignUp" className="link-underline link-underline-black">
                      SignUp
                    </Link>
                  </li>
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
    </div>
  );
}  
