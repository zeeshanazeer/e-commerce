import React from 'react'
import phone from '../assets/main-img/iPhone.png'
import apple from '../assets/main-img/apple.png'


const left =['Woman’s Fashion', 'Men’s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby’s & Toys', 'Groceries & Pets', 'Health & Beauty']
export default function Page() {
  return (
    <>
        <div>
            <div className='w-[25%] h-96 border-r-2 p-5 mt-3 float-left'>
                <ul className='h-96 '>
                    {left.map((item)=>(
                        <li className='m-3 ml-20 hover:font-bold'>
                        {item}
                      </li>
                    ))}
                </ul>
            </div>
            <div className='bg-black w-[65%] h-[344px] inline-block m-8'>
                <div className='w-[50%] px-14 float-left py-16'>
                    <div className='h-20'>
                    <img src={apple} alt="" className='float-left w-10 h-12'/> <span className='pt-4 mr-36 text-white beaich'>iPhone 14 Series</span>
                    </div>
                    <div>
                        <span className='text-white text-5xl font-semibold'>Up to 10%<br/> off Voucher</span>
                        <button className='text-white block mt-5  hover:border-b-2 hover:font-bold'>Shop No</button>
                    </div>
                </div>
                <div className='w-[50%] float-left mt-5'>
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
