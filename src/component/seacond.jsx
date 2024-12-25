import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars';

// Card component
function Card(props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  
  return (
    <>
      <div className={`${darkMode ? "bg-slate-800 text-white" : ""} text-black group mt-6 gap-2 flex flex-col relative w-64 h-[350px] justify-between`}>
        <div className={`${darkMode ? 'bg-slate-800 text-white' : ''} bg-[#F5F5F5] w-64 h-60`}>
          {props.off && (
            <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
              {props.off}
            </div>
          )}
          <div className="flex">
            <img 
              src={props.image || "/path/to/default-image.jpg"}  // Fallback image if `props.image` is not available
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300 mt-7 w-40"
            />
            <div className='absolute ml-56'>
              <CiHeart /> <MdOutlineRemoveRedEye />
            </div>
          </div>
        </div>
        <div className={`${darkMode ? "bg-slate-800" : ""} bg-white left-3`}>
          <button 
            className={`h-10 w-[250px] font-medium text-lg 
              ${darkMode 
                ? "group-hover:bg-black text-slate-800 bg-slate-800 group-hover:text-[#F5F5F5]" 
                : "group-hover:bg-black text-white bg-white group-hover:text-[#F5F5F5]"}
            `}
          >
            Add
          </button>
          <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0">{props.name}</h3>
          <p className='m-0'>
            <span className='text-red-600'>{props.price}</span> <span className='line-through'>{props.del}</span>
          </p>
          <div className="star-img sm:block hidden bg-amber-">
            <ReactStars
              count={5}
              value={props.rating || 3} // Assuming rating is passed as a prop
              size={24}
              edit={false}
              color2={"#ffd700"}
            />
          </div>
          <div className="star-img sm:hidden block bg-amber-">
            <ReactStars
              count={5}
              value={props.rating || 3}
              size={12}
              edit={false}
              color2={"#ffd700"}
            />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

// Header component
const pro = [
  { name: 'View All', myPath: '/Products' }
];

function Head() {
  return (
    <div className='beaich gap-2 h-60 w-[100%]'>
      <div className='w-[80%]'>
        <div className='w-[10%] h-14 beaich'>
          <div className='w-8 h-16'>
            <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
          <span className='text-red-600 font-medium ml-3 mb-4'>This Month</span> {/* Fixed typo */}
        </div>
        <div className='float-left'>
          <p className='text-4xl font-semibold mt-8'>Best selling product</p>
        </div>
        {pro.map((item, index) => (
          <button
            key={index}
            className='bg-red-600 text-white w-[10%] h-8 font-semibold rounded'
          >
            <Link to={item.myPath}>{item.name}</Link>
          </button>
        ))}
      </div>
    </div>
  );
}

// Main Component to fetch and display products
export default function Seacond() {
  const API_KEY = 'https://dummyjson.com/products?limit=4&skip=104'; // Your API endpoint
  const [products, setProducts] = useState([]);

  // Fetch products
  const getProductDeta = async () => {
    try {
      const response = await axios.get(API_KEY);
      console.log("response", response.data.products);
      setProducts(response?.data?.products); // Set products from response
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductDeta();
  }, []);

  return (
    <div>
      <Head />
      <div className='flex justify-center items-center'>
        <div className='w-[90%] gap-4 justify-center my-14 flex flex-wrap'>
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
  );
}
