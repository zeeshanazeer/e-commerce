import React from 'react'
import gamingImage from '../assets/main-img/gaming.png';
import lady from '../assets/main-img/lady.png';
import speaker from '../assets/main-img/speaker.png';
import sant from '../assets/main-img/sant.png';
import service from "../assets/card-icon/service.png"
import deliver from "../assets/card-icon/delivery.png"

function Nav(){
  return(
    <div className='w-[80%] h-[450px] flex justify-center items-center gap-3'>
  {/* Left Column - One image */}
  <div 
    className='bg-black text-white w-[45%] h-[450px]' 
    style={{
      backgroundImage: `url(${gamingImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
    }}
  >
    <div className='m-10 mt-[50%]'>
    <h1 className='text-2xl font-medium'>Play Station 05</h1>
    <p className='w-60'>Black and White version of the PS5 coming out on sale</p>
    <button className='text-white block mt-5  hover:border-b-2 hover:font-bold'>Shop Now</button>
    </div>
  
  </div>

  {/* Right Column - Stack of three images */}
  <div className='flex flex-col w-[45%] gap-3'>
    {/* Top Image */}
    <div 
      className='bg-black text-white h-[218px] w-[100%]' 
      style={{
        backgroundImage: `url(${lady})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      <div className='m-5 mt-14'>
    <h1 className='text-2xl font-medium'>Woman Collection's</h1>
    <p className='w-60'>Featured woman collections that give you another vibe.</p>
    <button className='text-white block mt-3  hover:border-b-2 hover:font-bold'>Shop Now</button>
    </div>
      </div>
    {/* Middle Row - Two Images side by side */}
    <div className='flex w-full gap-3'>
      {/* Left Image */}
      <div 
        className='bg-black text-white h-[218px] w-[48%]' 
        style={{
          backgroundImage: `url(${speaker})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      >

    <div className='m-3 mt-24'>
    <h1 className='text-2xl font-medium'>Speaker's</h1>
    <p className='w-60'>Amazon wireless speakers</p>
    <button className='text-white block mt-2  hover:border-b-2 hover:font-bold'>Shop Now</button>
    </div>
      </div>

      {/* Right Image */}
      <div 
        className='bg-black text-white h-[218px] w-[48%]' 
        style={{
          backgroundImage: `url(${sant})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      >
      <div className='m-3 mt-24'>
        <h1 className='text-2xl font-medium'>Perfume</h1>
        <p className='w-60'>GUCCI INTENSE OUD EDP</p>
        <button className='text-white block mt-2  hover:border-b-2 hover:font-bold'>Shop Now</button>
      </div>
      </div>
    </div>
  </div>
</div>
  );
}

function Head(){
  return (
      <>
          <div className='beaich gap-2 h-60 w-[100%]'>
              <div className=' w-[80%]'>
              <div className='w-[10%] h-14 beaich'>
              <div className='w-8 h-16'>
        <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
        </div>
          <span className='text-red-600 font-medium ml-1 mb-5'>Feature</span>
          </div>
                  <div className='float-left'>
                      <p className='text-4xl font-semibold mt-5'>New Arrival</p>
                  </div>
              </div>
          </div>
      </>
    )
}

function Catacg(props){
  return(
    <>
      <div className='w-[26%] my-16'>
        <img src={props.image} alt=""  className='w-16 h-16 text-xl bg-black rounded-full mx-auto'/>
        <p className='text-2xl font-medium beaich'>{props.head}</p>
        <p className='beaich'>{props.para}</p>
      </div>
    </>
  );
}

export default Grid

function Grid() {
  return (
    <>
    <Head/>
    <div className='beaich mb-12'>
      <Nav/>
    </div>
    <div className='beaich'>
    <Catacg image={deliver} head="Free and Fast Delivery" para="Free delivery for all orders over $140"/>
    <Catacg image={service} head="24/7 CUSTOMER SERVICE" para="Friendly 24/7 customer support"/>
    <Catacg image={deliver} head="MONEY BACK GUARANTEE" para="We reurn money within 30 days"/>
    </div>
    </>
  )
}


