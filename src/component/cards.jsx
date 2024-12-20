import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure you have axios imported for API calls
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import heart from "../assets/card-icon/heart.svg";
import view from "../assets/card-icon/view.svg";
import star from "../assets/card-icon/star.svg";
import cStar from "../assets/card-icon/color-star.svg";

// Card component
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
              <img src={heart} alt="" /> 
              <img src={view} alt="" />
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
          <p className='m-0'>
            <img src={cStar} alt="" className='inline-block'/>
            <img src={cStar} alt="" className='inline-block'/>
            <img src={cStar} alt="" className='inline-block'/>
            <img src={cStar} alt="" className='inline-block'/>
            <img src={star} alt="" className='inline-block' />
            {value}
          </p>
        </div>
      </div>
    </Link>
  );
}

// Time component for countdown
function Time() {
  return (
    <div className='beaich gap-2 h-60 w-[100%] justify-between'>
      <div className='w-[80%]'>
        <div className='w-[10%] h-14 beaich'>
          <div className='w-8 h-16 mr-10'>
            <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
          <span className='text-red-600 font-medium mb-4'>Today's</span>
        </div>
        <div className='float-left mr-8'>
          <p className='text-4xl font-semibold mt-8'>Flash Sales</p>
        </div>
        <div className='ml-64 mt-4'>
          <p className='text-xs inline float-left font-medium m-2'>Day's<span className='block text-3xl font-semibold'>03 :</span></p>
          <p className='text-xs inline float-left font-medium m-2'>Hours<span className='block text-3xl font-semibold'>23 :</span></p>
          <p className='text-xs inline float-left font-medium m-2'>Minute<span className='block text-3xl font-semibold'>19 :</span></p>
          <p className='text-xs inline float-left font-medium m-2'>Second<span className='block text-3xl font-semibold'>56 :</span></p>
        </div>
      </div>
    </div>
  );
}

// Button Component
function Button() {
  const pro = [
    { name: 'View All Products', myPath: '/Products' }
  ];

  return (
    <div className='beaich p-14 border-b-2'>
      {pro.map((item, index) => (
        <button key={index} className='bg-red-600 text-white w-[20%] h-12 font-semibold rounded'>
          <Link to={item.myPath}>{item.name}</Link>
        </button>
      ))}
    </div>
  );
}

// AddCard Component
function AddCard() {
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
      <Time/>
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
      <Button/>
    </div>
  );
}

export default AddCard;
