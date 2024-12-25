import React from 'react';

function Nav(){
  return(
    <div className='w-full md:w-[80%] h-auto md:h-[450px] flex flex-col md:flex-row justify-center items-center gap-3 mx-auto'>
      {/* Left Column - One image */}
      <div 
        className='bg-black text-white w-full md:w-[45%] h-auto md:h-[450px]' 
        style={{
          backgroundImage: "url('https://i.imghippo.com/files/hshh1689sOI.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        <div className='m-5 mt-10 md:mt-[50%]'>
          <h1 className='text-xl md:text-2xl font-medium'>Play Station 05</h1>
          <p className='w-60'>Black and White version of the PS5 coming out on sale</p>
          <button className='text-white block mt-5 hover:border-b-2 hover:font-bold'>Shop Now</button>
        </div>
      </div>

      {/* Right Column - Stack of three images */}
      <div className='flex flex-col w-full md:w-[45%] gap-3'>
        {/* Top Image */}
        <div 
          className='bg-black text-white h-[218px] w-full' 
          style={{
            backgroundImage: 'url(https://i.imghippo.com/files/am8918UA.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
        >
          <div className='m-5 mt-14'>
            <h1 className='text-xl md:text-2xl font-medium'>Woman Collection's</h1>
            <p className='w-60'>Featured woman collections that give you another vibe.</p>
            <button className='text-white block mt-3 hover:border-b-2 hover:font-bold'>Shop Now</button>
          </div>
        </div>

        {/* Middle Row - Two Images side by side */}
        <div className='flex flex-wrap gap-3'>
          {/* Left Image */}
          <div 
            className='bg-black text-white h-[218px] w-full md:w-[48%]' 
            style={{
              backgroundImage: 'url(https://i.imghippo.com/files/iqs5772hnE.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
          >
            <div className='m-3 mt-24'>
              <h1 className='text-xl md:text-2xl font-medium'>Speaker's</h1>
              <p className='w-60'>Amazon wireless speakers</p>
              <button className='text-white block mt-2 hover:border-b-2 hover:font-bold'>Shop Now</button>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className='bg-black text-white h-[218px] w-full md:w-[48%]' 
            style={{
              backgroundImage: 'url(https://i.imghippo.com/files/Kwh8541Ec.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
          >
            <div className='m-3 mt-24'>
              <h1 className='text-xl md:text-2xl font-medium'>Perfume</h1>
              <p className='w-60'>GUCCI INTENSE OUD EDP</p>
              <button className='text-white block mt-2 hover:border-b-2 hover:font-bold'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Head(){
  return (
    <div className='w-full h-60'>
      <div className='w-full md:w-[80%] mx-auto'>
        <div className='w-full md:w-[100%] h-14'>
          <div className='w-8 h-16'>
            <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
          <span className='text-red-600 font-medium ml-1 mb-5'>Feature</span>
        </div>
        <div className='float-left'>
          <p className='text-xl md:text-4xl font-semibold mt-5'>New Arrival</p>
        </div>
      </div>
    </div>
  )
}

function Catacg(props){
  return(
    <div className='w-full md:w-[26%] my-16 text-center'>
      <img src={props.image} alt="" className='w-16 h-16 text-xl bg-black rounded-full mx-auto'/>
      <p className='text-xl md:text-2xl font-medium'>{props.head}</p>
      <p>{props.para}</p>
    </div>
  );
}

export default function Grid() {
  return (
    <>
      <Head/>
      <div className='mb-12'>
        <Nav/>
      </div>
      <div className='flex justify-between gap-5 mb-12'>
        <Catacg image='https://i.imghippo.com/files/zee7488FKY.png' head="Free and Fast Delivery" para="Free delivery for all orders over $140"/>
        <Catacg image='https://i.imghippo.com/files/VD9777NEw.png' head="24/7 CUSTOMER SERVICE" para="Friendly 24/7 customer support"/>
        <Catacg image='https://i.imghippo.com/files/zee7488FKY.png' head="MONEY BACK GUARANTEE" para="We return money within 30 days"/>
      </div>
    </>
  )
}
