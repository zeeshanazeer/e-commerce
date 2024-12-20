import React, { useEffect, useState } from 'react'
import heart from "../assets/card-icon/heart.svg"
import view from "../assets/card-icon/view.svg"
import star from "../assets/card-icon/star.svg"
import cStar from "../assets/card-icon/color-star.svg"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Card(props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <>
        <div className={`${darkMode ? "bg-slate-800 text-white" : ""} text-black group mt-6 gap-2 flex flex-col relative w-64 h-[350px] justify-between`}>
        <div>
        </div>
        <div className={`${darkMode ? 'bg-slate-800 text-white':''} bg-[#F5F5F5] w-64 h-60`}>
     {props.off &&   <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
          {props.off}
        </div>}
        <div className="flex">
          <img 
            src={props.image}
            alt="product img"
            className="m-auto group-hover:scale-110 transition-all duration-300 mt-7 w-40 "
          />
           <div className='absolute ml-56'><img src={heart} alt="" /> <img src={view} alt="" /></div>
        </div>
        
       
        </div>
        <div className={`${darkMode ? "bg-slate-800" : ""}bg-white left-3`}>
        <button 
  className={`h-10 w-[250px] font-medium text-lg 
    ${darkMode 
      ? "group-hover:bg-black text-slate-800 bg-slate-800 group-hover:text-[#F5F5F5]" 
      : "group-hover:bg-black  text-white bg-white group-hover:text-[#F5F5F5]"
  }`}
>
  Add
</button>
        <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0">
          {props.name}
        </h3>
  
        <p className='m-0'>
          <span className='text-red-600'>{props.price}</span> <span className='line-through'>{props.del}</span>
        </p>
       <p className='m-0 '><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={star} alt="" className='inline-block' />{props.value}</p>
        </div>
      </div>
      <br/>
      </>
  );
}

const pro = [
  { name: 'View All', myPath: '/Products' }
];

function Head(){
  return(
    <div className='beaich gap-2 h-60 w-[100%]'>
      <div className=' w-[80%]'>
        <div className='w-[10%] h-14 beaich'>
        <div className='w-8 h-16'>
          <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
          <span className='text-red-600 font-medium ml-3 mb-4'>This_Mouth</span>
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

export default function Seacond() {
  const API_KEY = 'https://dummyjson.com/products?limit=4&skip=104'; // Your API endpoint
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
    }, []);
  return (
    <div className=''>
      <Head/>
        <div className=' flex justify-center items-center'>
        <div className='w-[90%] gap-4 justify-center my-14 flex flex-wrap' >
                {products.map((item) => {
                    let discountPrice= Math.ceil(item.price-(item.discountPercentage)*(item.price/100)).toFixed(2)
                    return (
                    <>
                    <Card off={`${item.discountPercentage}%`}
                    image={item.thumbnail}
                    price={`$${discountPrice}`}
                    del={`$${item.price.toFixed(2)}`}
                    name={item.title}
                    
                    />
                    </>
                    );
                })}
        </div>
        </div>
    </div>
  );
}
