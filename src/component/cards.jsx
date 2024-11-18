import React, { useState } from 'react'
import bord from "../assets/card-img/bord.png"
import key from "../assets/card-img/key.png"
import chair from "../assets/card-img/chair.png"
import screen from "../assets/card-img/screen.png"
import heart from "../assets/card-icon/heart.svg"
import view from "../assets/card-icon/view.svg"
import star from "../assets/card-icon/star.svg"
import cStar from "../assets/card-icon/color-star.svg"

// const cardArr= [
//   {img:{key},



// }
// ];

function Card(props) {
    return (
      <div className="group mt-6 gap-2 flex flex-col relative w-64 h-[350px]  justify-between">
        <div>
        </div>
        <div className=' bg-[#F5F5F5] w-64 h-60'>
        {props.off && <div className="discount absolute top-3 left-3 bg-red-600 w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
          {props.off}
        </div>}
        <div className="flex">
          <img 
            src={props.image}
            alt="product img"
            className="m-auto group-hover:scale-110 transition-all duration-300 mt-10"
          />
           <div className='absolute ml-56'><img src={heart} alt="" /> <img src={view} alt="" /></div>
        </div>
        
       
        </div>
        <div className='bg-white left-3'>
        <button className=' group-hover:bg-black text-white bg-white  hover:text-[#F5F5F5] h-10 w-[250px] font-medium text-lg'>Add</button>
        <h3 className="font-medium group-hover:text-primary transition-all duration-300 m-0">
          {props.name}
        </h3>
  
        <p className='m-0'>
          <span className='text-red-600'>{props.price}</span> <span className='line-through'>{props.del}</span>
        </p>
       <p className='m-0 '><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={cStar} alt="" className='inline-block'/><img src={star} alt="" className='inline-block' />{props.value}</p>
        </div>
      </div>
    );
  }

function Time(){
  return(
    <div className='beaich gap-2 h-60 w-[100%]  justify-between'>
      <div className=' w-[80%]'>
        <div className='w-[10%] h-14 beaich'>
          <div className='w-8 h-16  mr-10'>
          <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
          <span className='text-red-600 font-medium  mb-4'>Today's</span>
        </div>
        <div className='float-left  mr-8'>
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

function Button(){
  return(
    <>
      <div className='beaich p-14 border-b-2 '>
        <button className='bg-red-600 text-white w-[20%] h-12 font-semibold rounded'>View All Products</button>
      </div>
    </>
  )
}

export default function AddCard(){
  return(
    <>
      <Time/>
      <div className='flex gap-3 beaich'>
      <div className='inline-block w-1/5'>
          <Card image={bord} name="HAVIT HV-G92 Gamepad" value="(88)" price="$120" del="$160" off='-40%' />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={screen} name="AK-900 Wired Keyboard" value="(75)" price="$960" del="$1160" off='-35%' />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={key} name="IPS LCD Gaming Monitor" value="(99)" price="$370" del="$400" off='-30%' />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={chair} name="S-Series Comfort Chair" value="(99)" price="$375" del="$400" off='-25%' />
        </div>
      </div>
      <Button/>
    </>
  );
}