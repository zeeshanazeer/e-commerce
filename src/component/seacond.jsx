import React from 'react'
import facewash from "../assets/card-img/facewash.png"
import Bjekit from "../assets/card-img/Bjekit.png"
import camera from "../assets/card-img/camera.png"
import gperse from "../assets/card-img/Gparse.png"
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
        <button className='bg-red-600 text-white ml-[580px] w-40 h-12 rounded'>All View</button>
      </div>
    </div>
  );
}

export default function Seacond() {
  return (
    <div className='flex flex-wrap gap-3 beaich'>
      <Head/>
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
    </div>
  );
}
