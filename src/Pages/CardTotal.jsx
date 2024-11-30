import React from 'react'

function CardTotal() {
  return (
    <div>
       <div className="center flex flex-col items-center my-10 px-4">
        {/* Breadcrumb */}
        <div className="w-full max-w-6xl text-gray-400 text-sm mb-5">
          Home / <span className="text-gray-200">Card</span>
        </div>
              {/* large screen table */}
        {/* Table Section */}
        <div className="w-full max-w-6xl  justify-center   h-[356px] rounded sm:hidden mobile:hidden 2xl:flex xl:flex lg:flex md:flex  flex-col gap-6 p-6 shadow-md">
          {/* Table Header */}
          <div className="hidden z-10  md:grid grid-cols-4 gap-4 bg-slate-100 p-4 rounded text-center md:text-left font-semibold text-gray-700">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Table Body */}
          <div className="space-y-4 md:space-y-0  h-auto overflow-y-auto flex flex-col gap-6 ">
            {/* First Product Row */}
            <div className="flex  mobile:items-center flex-col md:grid grid-cols-4 gap-4 bg-slate-100 p-4 rounded">
              <div className="flex sm:justify-center mobile:justify-center items-center md:gap-2 gap-4">
                <img className="w-16 h-12" src={led} alt="LCD Monitor" />
                <p className="text-gray-700 md:text-xs md:font-normal font-medium">LCD Monitor</p>
              </div>
              <div className="text-gray-700 text-center md:text-left flex items-center">$650</div>
              <div className="text-center flex items-center">
                <select className="border border-gray-300 rounded w-20 p-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-gray-700 text-center md:text-left  flex items-center ">$650</div>
            </div>

            {/* Second Product Row */}
            <div className="flex flex-col mobile:items-center md:grid grid-cols-4 gap-4 bg-slate-100 p-4 rounded">
              <div className="flex items-center md:gap-2 gap-4 sm:justify-center mobile:justify-center">
                <img className="w-16 h-12" src={game} alt="Gamepad" />
                <p className="text-gray-700 md:text-xs md:font-normal font-medium">HI Gamepad</p>
              </div>
              <div className="text-gray-700 text-center md:text-left">$650</div>
              <div className="text-center flex items-center ">
                <select className="border border-gray-300 rounded w-20 p-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-gray-700 text-center md:text-left">$650</div>
            </div>
          </div>
        </div>
              {/* small screen table */}
              <div className="overflow-y-auto h-[280px] lg:hidden xl:hidden 2xl:hidden md:hidden p-1">
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden  p- rounded sm:flex flex-col mobile:flex">
          <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2"><div className="font-semibold text-gray-700">Product : </div><div className="flex sm:justify-center mobile:justify-center items-center md:gap-2 gap-4">
                <img className="w-14 h-10" src={led} alt="LCD Monitor" />
                <p className="text-gray-700 text-[12px]  font-normal ">LCD Monitor</p>
              </div></div>
          <div  className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
            <div className="font-semibold text-gray-700">Price : </div><div>$650</div>
          </div>
          <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
            <div className="font-semibold text-gray-700">Quantity : </div>
            <div className="text-center flex items-center">
                <select className="border border-gray-300 rounded w-20 p-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
          </div>
          <div  className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2 ">
            <div className="font-semibold text-gray-700">Subtotal</div>
            <div>$650</div>
          </div>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden  p- rounded sm:flex flex-col mobile:flex">
          <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2"><div className="font-semibold text-gray-700">Product : </div><div className="flex sm:justify-center mobile:justify-center items-center md:gap-2 gap-4">
                <img className="w-14 h-10" src={game} alt="LCD Monitor" />
                <p className="text-gray-700 text-[12px]  font-normal">HI Gamepad</p>
              </div></div>
          <div  className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
            <div className="font-semibold text-gray-700">Price : </div><div>$650</div>
          </div>
          <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
            <div className="font-semibold text-gray-700">Quantity : </div>
            <div className="text-center flex items-center">
                <select className="border border-gray-300 rounded w-20 p-2">
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
          </div>
          <div  className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2 ">
            <div className="font-semibold text-gray-700">Subtotal</div>
            <div>$650</div>
          </div>
        </div></div>
        {/* complete small screen table */}

        {/* Buttons */}
        <div className="w-full xl:flex-row md:flex-row  2xl:flex-row lg:flex-row max-w-6xl flex sm:flex-col mobile:flex-col   justify-between mt-">
          <button className="px-6  2xl:w-[218px] 2xl:h-[56px] xl:w-[218px] xl:h-[56px] lg:w-[218px] lg:h-[56px] md:w-[218px] md:h-[56px]  py-3 text-base sm:my-2 mobile:my-2 bg-white active:bg-red-700 active:text-white text-black font-medium border border-black rounded  ">
            Return To Shop
          </button>
          <button className="px-6  2xl:w-[218px] 2xl:h-[56px] xl:w-[218px] xl:h-[56px] lg:w-[218px] lg:h-[56px] md:w-[218px] md:h-[56px]  py-3 text-base sm:my-2 mobile:my-2 bg-white active:bg-red-700 active:text-white text-black font-medium border border-black rounded ">
            Update Cart
          </button>
        </div>

        {/* Cart Summary */}
        <div className="w-full  max-w-6xl flex sm:flex-col lg:flex-row mobile:flex-col  mt-10 gap-6">
          {/* Coupon Section */}
          <div className="flex  sm:flex-col 2xl:justify-start xl:justify-start sm:justify-center sm:items-center mobile:justify-center mobile:items-center md:justify-between md:items-  lg:justify-start 2xl:items-start xl:items-start lg:items-start lg:w-2/3">
            <div className="flex xl:flex-row 2xl:flex-row md:flex-row lg:flex-row  gap-4 sm:flex-col mobile:flex-col mobile:w-auto  mobile:h-auto mobile:gap-4">
              <input
                className="border border-gray-300 rounded mobile:w-auto  p-3"
                placeholder="Coupon Code"
                type="text"
              />
              <button className=" md:px-6 md:py-3 2xl:w-[211px] 2xl:h-[56px] xl:w-[211px] xl:h-[56px] lg:w-[211px] lg:h-[56px] mobile:w-auto mobile:h-auto sm:w-auto sm:h-auto md:text-sm  mobile:px-4 mobile:py-2 mobile:text-[12px] bg-myTheme text-white rounded active:bg-red-700">
                Apply Coupon
              </button>
            
            </div>
          </div>

          {/* Total Section */}
          <div className="lg:w-1/3 border border-gray-400 p-6 rounded shadow-md bg-white">
            <h2 className="font-bold text-xl mb-4">Cart Total</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span className="font-bold">$1750</span>
              </div>
            </div>
            <button className="mt-6 w-full py-3 bg-myTheme text-white rounded active:bg-red-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTotal
