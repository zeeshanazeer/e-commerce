import React from 'react'

function Ist(){
  return(
    <>
    <div className='bg-slate-800 p-20 h-[450px] flex justify-center items-center mt-10  2xl:hidden xl:flex lg:hidden md:hidden sm:hidden mobile:hidden'>
                <div className='w-[50%] px-14 float-left mb-24'>
                    <div className='h-20'>
                        <div className='block'>
                            <button className='text-white hover:text-green-400 hover:font-semibold  mt-10 mb-5'>Categories</button>
                        </div>
                        <span className='text-white text-5xl font-semibold mt-10'>Enhance Your<br/> Music Experience</span>
                        <div className='mt-8 mb-5 h-10 w-[80%] text-black'>
                            <p className='text-xs inline float-left font-medium m-2 bg-white rounded-full w-16 h-16 p-3'><span className='block text-2xl font-bold'>03</span>Day's</p>
                            <p className='text-xs inline float-left font-medium m-2 bg-white rounded-full w-16 h-16 p-3'><span className='block text-2xl font-bold'>23</span>Hours</p>
                            <p className='text-xs inline float-left font-medium m-2 bg-white rounded-full w-16 h-16 p-3'><span className='block text-2xl font-bold'>19</span>Minute</p>
                            <p className='text-xs inline float-left font-medium m-2 bg-white rounded-full w-16 h-16 p-3'><span className='block text-2xl font-bold'>56</span>Second</p>
                        </div>
                        <button className='text-white bg-green-500 block mt-10 hover:font-bold w-28 h-12 rounded-md'>Buy Now</button>
                    </div>
                </div>
                <div className='w-[50%] mt-5'>
                    <img src="https://i.imghippo.com/files/pRTZ9778AM.png" alt="" />
                </div>
            </div>
            <div className="container mx-auto my-2   2xl:flex xl:hidden lg:flex md:flex sm:flex mobile:flex ">
                    <img className="container mx-auto rounded-xl cursor-none darkTheme" src="https://i.imghippo.com/files/WSbv9649nU.png" alt="" />
            </div> 
            
            </>
  )
}

export default function Isticar() {
  return (
      <div className='beaich mt-16 mb-10'>
        <Ist/>
      </div>
  )
}
