import React from 'react'
import dfood from "../assets/card-img/Dfood.png"
import shooz from "../assets/card-img/shooz.png"
import gjekit from "../assets/card-img/Gjekit.png"
import ispiker from "../assets/card-img/ispiker.png"
import laptop from "../assets/card-img/laptop.png"
import remont from "../assets/card-img/remont.png"
import soodkas from "../assets/card-img/soodkas.png"
import toicar from "../assets/card-img/toicar.png"
import heart from "../assets/card-icon/heart.svg"
import view from "../assets/card-icon/view.svg"
import star from "../assets/card-icon/star.svg"
import cStar from "../assets/card-icon/color-star.svg"

function Nav(){
    return(
        <div className='beaich gap-2 h-60 w-[100%]'>
          <div className=' w-[80%]'>
            <div className='w-[10%] h-14 beaich'>
              <div className='w-12 h-20'>
              <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
              </div>
              <span className='text-red-600 font-medium  mb-7 ml-3 '>Our_Products</span>
            </div>
            <div className='float-left'>
            <p className='text-4xl font-semibold mt-8'>Explore our Products</p>
            </div>
          </div>
        </div>
      );
}

function Card(props){
    return(
        <>
        <div className="group  gap-2 flex flex-col relative w-64 h-[350px] mb-10">
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
            className="m-auto group-hover:scale-110 transition-all duration-300 mt-7 w-40 "
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
        </>
    )
}

function ThirdCard() {
  return (
    <>

    <div className='flex flex-wrap gap-3 beaich'>
        <Nav/>
      {/* Row 3 */}
      <div className='inline-block w-1/5'>
          <Card image={dfood} name="HAVIT HV-G92 Gamepad" value="(88)" price="$120" del="$160" />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={shooz} name="AK-900 Wired Keyboard" value="(75)" price="$960" del="$1160" />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={laptop} name="IPS LCD Gaming Monitor" value="(99)" price="$370" del="$400" />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={remont} name="S-Series Comfort Chair" value="(99)" price="$375" del="$400" />
        </div>

        {/* Row 4 */}
        <div className='inline-block w-1/5'>
          <Card image={soodkas} name="HAVIT HV-G92 Gamepad" value="(88)" price="$120" del="$160" />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={gjekit} name="AK-900 Wired Keyboard" value="(75)" price="$960" del="$1160" />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={toicar} name="IPS LCD Gaming Monitor" value="(99)" price="$370" del="$400" />
        </div>
        <div className='inline-block w-1/5'>
          <Card image={ispiker} name="S-Series Comfort Chair" value="(99)" price="$375" del="$400" />
        </div>
        
      </div>
      <div className='beaich my-8'>
      <button className='w-44 h-14 bg-red-600 text-white'>View All Products</button>
      </div>
      
    </>
  )
}

export default ThirdCard
