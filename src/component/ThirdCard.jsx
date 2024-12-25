import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Navigation component
function Nav() {
  return (
    <div className='flex gap-2 h-60 w-full'>
      <div className='w-[80%]'>
        <div className='w-[10%] h-14 flex'>
          <div className='w-12 h-20'>
            <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
          <span className='text-red-600 font-medium mb-7 ml-3 text-lg sm:text-xl md:text-2xl'>Our Products</span>
        </div>
        <div className='float-left'>
          <p className='text-3xl sm:text-4xl font-semibold mt-8 text-center md:text-left'>Explore our Products</p>
        </div>
      </div>
    </div>
  );
}

// Card component to display individual products
function Card(props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-800 text-white" : ""} group gap-2 flex flex-col relative w-full sm:w-64 h-[300px] sm:h-[380px]`}>
      <div className={`${darkMode ? 'bg-slate-800 text-white' : ''} bg-[#F5F5F5] w-full h-[250px] sm:w-64 sm:h-60`}>
        {props.off && (
          <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
            {props.off}
          </div>
        )}
        <div className="flex justify-center">
          <img
            src={props.image}
            alt="product img"
            className="m-auto group-hover:scale-110 transition-all duration-300 w-24 sm:w-40"
          />
          <div className='absolute top-2 right-2'>
            <CiHeart /> <MdOutlineRemoveRedEye />
          </div>
        </div>
      </div>
      <div className={`${darkMode ? "bg-slate-800 text-white" : ""} bg-white p-2 sm:p-4`}>
        <button 
          className={`h-10 w-full sm:w-[250px] font-medium text-lg 
            ${darkMode 
              ? "group-hover:bg-black text-slate-800 bg-slate-800 group-hover:text-[#F5F5F5]" 
              : "group-hover:bg-black text-white bg-white group-hover:text-[#F5F5F5]"}`}
        >
          Add
        </button>
        <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0 text-sm sm:text-base md:text-lg">
          {props.name}
        </h3>
        <p className='m-0 text-xs sm:text-sm md:text-base'>
          <span className='text-red-600'>{props.price}</span> <span className='line-through'>{props.del}</span>
        </p>
        <div className="star-img sm:block hidden bg-amber">
          <ReactStars
            count={5}
            value={props.rating || 3} // Use the rating from props
            size={24}
            edit={false}
            color2={"#ffd700"}
          />
        </div>
        <div className="star-img sm:hidden block bg-amber">
          <ReactStars
            count={5}
            value={props.rating || 3} // Use the rating from props
            size={12}
            edit={false}
            color2={"#ffd700"}
          />
        </div>
      </div>
    </div>
  );
}

// Button to view all products
const pro = [
  { name: 'View All Products', myPath: '/Products' }
];

function ThirdCard() {
  const API_KEY = 'https://dummyjson.com/products?limit=8&skip=108'; // Your API endpoint
  const [products, setProducts] = useState([]); // Initialize as an empty array instead of null

  // Fetch products from API
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
  }, []);

  return (
    <>
      <div className='flex flex-wrap gap-3'>
        <Nav />
        {/* Displaying the fetched products */}
        <div className='flex justify-center items-center'>
          <div className='w-[90%] gap-4 justify-center my-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
            {products.map((item, index) => {
              let discountPrice = Math.ceil(item.price - (item.discountPercentage) * (item.price / 100)).toFixed(2);
              return (
                <div key={index}>
                  <Card
                    off={`${item.discountPercentage}%`}
                    image={item.thumbnail}
                    price={`$${discountPrice}`}
                    del={`$${item.price.toFixed(2)}`}
                    name={item.title}
                    rating={item.rating}  // Pass the rating here
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='my-8'>
        {pro.map((item, index) => (
          <button
            key={index}
            className='bg-red-600 text-white w-[20%] h-12 font-semibold rounded'
          >
            <Link to={item.myPath}>{item.name}</Link>
          </button>
        ))}
      </div>
    </>
  );
}

export default ThirdCard;
