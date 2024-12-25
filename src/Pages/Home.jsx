import React from 'react';
import Page from '../component/page';
import AddCard from '../component/cards';
import Second from '../component/seacond';  // Renamed from 'Seacond'np to 'Second'
import Isticar from '../component/isticar';
import ThirdCard from '../component/ThirdCard';
import Grid from '../component/Grid';
// import Products from './Products';  // Ensure you're using this somewhere if necessary
import { useSelector } from 'react-redux';
import AOS from "aos";
import "aos/dist/aos.css";



function Home() {
  AOS.init({
    duration: 1000,
  });
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      id="mainhome"
      className={` ${
        darkMode ? "bg-slate-800" : ""
      } transition-colors duration-500  flex flex-col justify-center `}
    >
      {/* Hero */}
      <Page />
      <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
        <AddCard />
      </div>
      <div
        className={`${
          darkMode ? "hidden" : "flex"
        } flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0  `}
      >
        <div
          className={`${
            darkMode ? "bg- rounded mx-12 py-2" : ""
          } flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col mobile:flex-col gap-5 my-10 border-b-gray-100`}
        >
          <div className="flex gap-5">
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none border-2">
            <img src="https://i.imghippo.com/files/Bwxy2435Fts.png" alt=""  className='mx-auto'/>
            <p className='justify-center items-center flex'>Smarth Phone</p>
          </div>
          <div
            data-aos="flip-right"
            className="sm:w-28 w-[100px]  cursor-none border-2">
            <img src="https://i.imghippo.com/files/GnLa8091yDo.png" alt="" className='mx-auto' />
            <p className='justify-center items-center flex'>Computer</p>
          </div>
          </div>
          <div className="flex gap-5">
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none border-2 className='mx-auto'">
            <img src="https://i.imghippo.com/files/Ldt5574Gs.png" alt="" className='mx-auto' />
            <p className='justify-center items-center flex'>Smarth Watch</p>
          </div>
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none border-2">
            <img src="https://i.imghippo.com/files/niVt6682NK.png" alt=""  className='mx-auto'/>
            <p className='justify-center items-center flex'>Camera</p>
          </div>
          </div>
          <div className="flex gap-5">
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none border-2">
            <img src="https://i.imghippo.com/files/XAwC7858As.png" alt="" className='mx-auto' />
            <p className='justify-center items-center flex'>Head Phone</p>
          </div>
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none border-2">
            <img src="https://i.imghippo.com/files/PGT9405maE.png" alt="" className='mx-auto' />
            <p className='justify-center items-center flex'>Game</p>
          </div>
          </div>
        </div>
      </div>
      {/* <CardListSlider /> */}

      <div className=" flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16 ">
        <Second />
      </div>
      {/* Spiker-Session */}
      <Isticar />
      {/* Arrival-Session  */}
      <ThirdCard />

      <Grid />
    </div>
  );
}

export default Home;
