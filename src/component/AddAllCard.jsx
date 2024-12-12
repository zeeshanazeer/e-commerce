import React from 'react'
import view from "../assets/card-icon/view.svg"
import star from "../assets/card-icon/star.svg"
import cStar from "../assets/card-icon/color-star.svg"
import heart from "../assets/card-icon/heart.svg"
import { Link } from 'react-router-dom'

function AddAllCard({
    off,
    image,
    price,
    titlename,
    del,
    value,
    id,
}) {
    return (
      <>
        <Link id={id} to={`/ProductDitail/${id}`}>
        <div className="group  gap-2 flex flex-col relative w-64 h-[350px]">
        <div>
        </div>
        <div className=' bg-[#F5F5F5] w-64 h-60'>
        {off && <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
          {off}
        </div>}
        <div className="flex">
          <img 
            src={image}
            alt="product img"
            className="m-auto group-hover:scale-110 transition-all duration-300 mt-7 w-40 "
          />
           <div className='absolute ml-56'><img src={heart} alt="" /> <img src={view} alt="" /></div>
        </div>
        
       
        </div>
        <div className='bg-white left-3'>
        <button className=' group-hover:bg-black text-white bg-white  hover:text-[#F5F5F5] h-10 w-[250px] font-medium text-lg'>Add</button>
        <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0">
          {titlename}
        </h3>
  
        <p className='m-0'>
          <span className='text-red-600'>{price}</span> <span className='line-through'>{del}</span>
        </p>

       <p className='m-0 '><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={star} alt="" className='inline-block' />{value}</p>
        </div>
      </div>
      </Link>
      </>
    );
  }

export default AddAllCard
