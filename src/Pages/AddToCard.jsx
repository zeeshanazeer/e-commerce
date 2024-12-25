
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddToCard() {
  let API_KEY = () => {
    let data = fetch("//dummyjson.com/test");
  };

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-800 text-white" : "bg-white text-black"}`}>
      <div className={`center flex flex-col items-center my-10 px-4`}>
        {/* Breadcrumb */}
        <div className={`w-full max-w-6xl text-gray-400 text-sm mb-5`}>
          <Link to={"/"}>Home</Link> /{" "}
          <span className="text-gray-200">
            <Link to={"/AllProduct"}>Card</Link>
          </span>
        </div>

        {/* Large screen table */}
        <div className="w-full max-w-6xl justify-center h-[356px] rounded sm:hidden mobile:hidden 2xl:flex xl:flex lg:flex md:flex flex-col gap-6 p-6 shadow-md">
          {/* Table Header */}
          <div
            className={`${
              darkMode ? "bg-slate-700 text-white" : "bg-black text-white"
            } hidden z-10 md:grid grid-cols-4 gap-4 p-4 rounded text-center md:text-left font-semibold`}
          >
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Table Body */}
          <div className="space-y-4 md:space-y-0 h-auto overflow-y-auto flex flex-col gap-6">
            {/* First Product Row */}
            <div
              className={`${
                darkMode ? "bg-slate-700 text-white" : "bg-slate-100 text-black"
              } flex mobile:items-center flex-col md:grid grid-cols-4 gap-4 p-4 rounded`}
            >
              <div
                className={`${
                  darkMode ? "bg-slate-700" : "text-black"
                } flex sm:justify-center mobile:justify-center text-black items-center md:gap-2 gap-4`}
              >
                <img className="w-16 h-12" src='https://i.imghippo.com/files/aTs6921Etg.png' alt="LCD Monitor" />
                <p className="md:text-xs md:font-normal font-medium">
                  LCD Monitor
                </p>
              </div>
              <div className="text-center md:text-left"> $650 </div>
              <div className="text-center flex items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border border-gray-300 text-black rounded w-20 p-2"
                />
              </div>
              <div className="text-center md:text-left"> $650 </div>
            </div>

            {/* Second Product Row */}
            <div
              className={`${
                darkMode ? "bg-slate-700 text-white" : "bg-slate-100 text-black"
              } flex flex-col mobile:items-center md:grid grid-cols-4 gap-4 p-4 rounded`}
            >
              <div className="flex items-center md:gap-2 gap-4 sm:justify-center mobile:justify-center">
                <img className="w-16 h-12" src='https://i.imghippo.com/files/cdf7075Hc.png' alt="Gamepad" />
                <p className="md:text-xs md:font-normal font-medium">
                  HI Gamepad
                </p>
              </div>
              <div className="text-center md:text-left"> $650 </div>
              <div className="text-center flex items-center ">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border text-black border-gray-300 rounded w-20 p-2"
                />
              </div>
              <div className="text-center md:text-left"> $650 </div>
            </div>
          </div>
        </div>

        {/* Small screen table */}
        <div className="overflow-y-auto h-[280px] lg:hidden xl:hidden 2xl:hidden md:hidden p-1">
          <div className="sm:flex flex-col mobile:flex">
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Product :</div>
              <div className="flex sm:justify-center mobile:justify-center items-center md:gap-2 gap-4">
                <img className="w-14 h-10" src='https://i.imghippo.com/files/cdf7075Hc.png' alt="LCD Monitor" />
                <p className="text-gray-700 text-[12px] font-normal"> LCD Monitor </p>
              </div>
            </div>
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Price :</div>
              <div> $650 </div>
            </div>
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Quantity :</div>
              <div className="text-center flex items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border text-black border-gray-300 rounded w-20 p-2"
                />
              </div>
            </div>
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Subtotal</div>
              <div>$650</div>
            </div>
          </div>

          <div className="sm:flex flex-col mobile:flex">
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Product :</div>
              <div className="flex sm:justify-center mobile:justify-center items-center md:gap-2 gap-4">
                <img className="w-14 h-10" src='https://i.imghippo.com/files/aTs6921Etg.png' alt="Gamepad" />
                <p className="text-gray-700 text-[12px] font-normal"> HI Gamepad </p>
              </div>
            </div>
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Price :</div>
              <div>$650</div>
            </div>
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Quantity :</div>
              <div className="text-center flex items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border text-black border-gray-300 rounded w-20 p-2"
                />
              </div>
            </div>
            <div className="flex gap-10 justify-between items-center bg-slate-200 p-2 rounded my-2">
              <div className="font-semibold text-gray-700">Subtotal</div>
              <div>$650</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full xl:flex-row md:flex-row 2xl:flex-row lg:flex-row max-w-6xl flex sm:flex-col mobile:flex-col justify-between mt-6">
          <button
            className={`${
              darkMode ? "bg-slate-700" : "bg-gray-300"
            } px-6  py-3 text-base font-medium border border-black rounded`}
          >
            Return To Shop
          </button>
          <button
            className={`${
              darkMode ? "bg-slate-700" : "bg-gray-300"
            } px-6  py-3 text-base font-medium border border-black rounded`}
          >
            Update Cart
          </button>
        </div>

        {/* Cart Summary */}
        <div className="w-full max-w-6xl flex sm:flex-col lg:flex-row mobile:flex-col mt-10 gap-6">
          {/* Coupon Section */}
          <div className="flex sm:flex-col 2xl:justify-start xl:justify-start sm:justify-center sm:items-center mobile:justify-center mobile:items-center md:justify-between md:items- lg:justify-start 2xl:items-start xl:items-start lg:items-start lg:w-2/3">
            <div className="flex xl:flex-row 2xl:flex-row md:flex-row lg:flex-row gap-4 sm:flex-col mobile:flex-col mobile:w-auto mobile:h-auto mobile:gap-4">
              <input
                className="border border-gray-300 rounded mobile:w-auto p-3"
                placeholder="Coupon Code"
                type="text"
              />
              <button className="md:px-6 md:py-3 2xl:w-[211px] 2xl:h-[56px] xl:w-[211px] xl:h-[56px] lg:w-[211px] lg:h-[56px] mobile:w-auto mobile:h-auto sm:w-auto sm:h-auto md:text-sm mobile:px-4 mobile:py-2 mobile:text-[12px] bg-myTheme text-white rounded active:bg-red-700">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Total Section */}
          <div
            className={`${
              darkMode ? "bg-slate-700 text-white" : "bg-white text-black"
            } lg:w-1/3 border text-black border-gray-400 p-6 rounded shadow-md`}
          >
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
  );
}

export default AddToCard;
