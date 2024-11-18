import React, { useState } from 'react'
import bord from "../assets/card-img/bord.png"
import key from "../assets/card-img/key.png"
import chair from "../assets/card-img/chair.png"
import screen from "../assets/card-img/screen.png"
import gperse from "../assets/card-img/Gparse.png"
import facewash from "../assets/card-img/facewash.png"
import Bjekit from "../assets/card-img/Bjekit.png"
import camera from "../assets/card-img/camera.png"
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


function Card(props) {
    return (
      <>
        <div className="group  gap-2 flex flex-col relative w-64 h-[350px]">
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
      <br/>
      </>
    );
  }

function Time(){
  return(
    <>
      <div className=' w-[80%]'>
        <div className='x-'>
          <div className='w-5 h-12 bg-red-600 rounded-md float-left mb-5'></div>
          <span className='text-red-600 font-medium m-8'>Today's</span>
        </div>
        <div>
            <p className='text-4xl font-semibold m-5'>Flash Sales</p>
        </div>
      </div>
    </>
  );
}

export default function AddFullCard(){
  return(
    <>
      <div className='beaich'>
      <Time/>
      </div>
      <div className='flex flex-wrap gap-3 beaich'>
        {/* Row 1 */}
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

        {/* Row 2 */}
        <div className='inline-block w-1/5'>
        <Card image={facewash} name="Curology Product Set" value="(145)" price="$500" del=""/>
      </div>
      <div className='inline-block w-1/5'>
        <Card image={Bjekit} name="Quilted Satin Jacket" value="(55)" price="$660"/>
      </div>
      <div className='inline-block w-1/5'>
        <Card image={gperse} name="Gucci duffle bag" value="(95)" price="$960" del="$1160" off="10% OFF" />
      </div>
      <div className='inline-block w-1/5'>
        <Card image={camera} name="CANON EOS DSLR Camera" value="(95)" price="$360" del=""/>
        </div>

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
    </>
  );
}
