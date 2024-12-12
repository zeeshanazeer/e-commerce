import React from 'react'
import speeker from '../assets/main-img/speeker.png'

function Ist(){
  return(
    <div className='bg-black w-[82%] h-[344px] beaich'>
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
                    <img src={speeker} alt="" />
                </div>
            </div>
  )
}

export default function Isticar() {
  return (
      <div className='beaich mt-16 mb-10'>
        <Ist/>
      </div>
  )
}
