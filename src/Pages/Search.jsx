// import axios from "axios";
// import React, { useState } from "react";
// import useSWR from "swr";
// import { useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import AddAllCard from "../component/AddAllCard";
// import { useNavigate } from "react-router";
// // import loadingImg from "../assets/loading/loading.gif";

// function Search() {
//   let [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const searchValue = searchParams.get("qurey");
//   const { data, error, isLoading } = useSWR(
//     `https://dummyjson.com/products/search?q=${searchValue}`,
//     axios
//   );
//   console.log(data?.data?.products);
//   const searchData = data?.data?.products;
//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   return (
//     // <div className='h-[100vh]'>Search {searchParams.get("qurey") }{JSON.stringify(data)}</div>
//     <div className={`${darkMode ? "pageDark" : ""}`}>
//       {/* {isLoading ? (
//         <div
//           className={`${
//             darkMode ? "pageDark" : ""
//           } font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none`}
//         >
//           <img src={loadingImg} alt="Loading..." />
//         </div>
//       ) : null} */}
//       <div
//         className={`${
//           darkMode ? "pageDark" : ""
//         } mx-auto max-w-7xl sm:px-6 lg:px-8 `}
//       ></div>
//       <div
//         className={`${
//           darkMode ? "" : ""
//         } flex justify-center items-center   my-14  flex-row`}
//       >
//         <div className=" flex sm:flex-col  w-[1170px]  flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
//           {isLoading ? (
//             <div className="font-extrabold text-4xl h-[100vh]">Loading...</div>
//           ) : null}

//           {error}
//           {/* sir se question karna he */}
//           {/* {searchProducts.length=== 0?'Product Is Not Found':null} */}
//           {/* {searchData?.map((value, index) => {
//             let discountPrice = Math.ceil(
//               value.price - value.discountPercentage * (value.price / 100)
//             ).toFixed(2);
//             // console.log(discountPrice);

//             return (
//               <div key={value.id}>
//                 {" "}
//                 <AddAllCard
//                   key={value.id}
//                   id={value.id}
//                   className="bg-myTheme"
//                   discount={`${Math.round(value.discountPercentage)}%`}
//                   productName={value.title}
//                   delPrice={`$${value.price.toFixed(2)}`}
//                   newPrice={`$${discountPrice}`}
//                   image={value.thumbnail}
//                   rating={value.rating}
//                 />
//               </div>
//             );
//           })}
//            */}
//         {searchData?.map((item,i) => {
//                     let discountPrice= Math.ceil(item.price-(item.discountPercentage)*(item.price/100)).toFixed(2)
//                     return (
//                     <div key={i}>
//                     <AddAllCard 
//                     off={`${item.discountPercentage.toFixed(0)}%`}
//                     image={item.thumbnail}
//                     id={item.id}
//                     price={`$${discountPrice}`}
//                     del={`$${item.price.toFixed(0)}`}
//                     titlename={item.title}
                    
//                     />
//                     </div>
//                     );
//                 })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import ReactStars from 'react-stars';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure you have axios imported for API calls
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Card({ off, image, del, name, price, id, value }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  
  return (
    <Link id={id} to={`/ProductDitail/${id}`}>
      <div className={`${darkMode ? "bg-slate-800 text-white" : ""} text-black group mt-6 gap-2 flex flex-col relative w-64 h-[350px] justify-between`}>
        <div>
          {off && <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
            {off}
          </div>}
          <div className="flex">
            <img 
              src={image}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300 mt-10"
            />
            <div className='absolute ml-56'>
              <CiHeart/> 
              <MdOutlineRemoveRedEye/>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? "bg-slate-800" : ""}bg-white left-3`}>
        <button 
  className={`h-10 w-[250px] font-medium text-lg 
    ${darkMode 
      ? "group-hover:bg-black text-slate-800 bg-slate-800 group-hover:text-[#F5F5F5]" 
      :"group-hover:bg-black  text-white bg-white group-hover:text-[#F5F5F5]"
  }`}
>
  Add
</button>
          <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0">{name}</h3>
          <p className='m-0'>
            <span className='text-red-600'>{price}</span> 
            <span className='line-through'>{del}</span>
          </p>
          <div className="star-img sm:block hidden  bg-amber- ">
            <ReactStars
              count={5}
              value={value || 3}
              size={24}
              edit={false}
              color2={"#ffd700"}
            />
          </div>
          <div className="star-img sm:hidden block bg-amber- ">
            <ReactStars
              count={5}
              value={value || 3}
              size={12}
              edit={false}
              color2={"#ffd700"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

function Search() {
  const API_KEY = 'https://dummyjson.com/products?limit=4&skip=100'; // Your API endpoint
  const [products, setProducts] = useState([]); // Initialize as an empty array instead of null

  // Fetch products
  const getProductDeta = async () => {
    try {
      const response = await axios.get(API_KEY); // Use axios.get for fetching
      console.log("response", response.data.products);
      setProducts(response?.data?.products); // Set products from response
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductDeta(); // Fetch product data when component mounts
  }, []); // Empty dependency array to run only once

  console.log(products);

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[90%] gap-4 justify-center my-14 flex flex-wrap'>
          {products.map((item) => {
            let discountPrice = Math.ceil(item.price - (item.discountPercentage) * (item.price / 100)).toFixed(2);
            return (
              <div key={item.id}>
                <Card 
                  off={`${item.discountPercentage}%`}
                  image={item.thumbnail}
                  id={item.id}
                  price={`$${discountPrice}`}
                  del={`$${item.price.toFixed(2)}`}
                  name={item.title}
                  value={item.rating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
