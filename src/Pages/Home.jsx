import React from 'react';
import Page from '../component/page';
import AddCard from '../component/cards';
import List from '../component/list';
import Second from '../component/seacond';  // Renamed from 'Seacond'np to 'Second'
import Isticar from '../component/isticar';
import ThirdCard from '../component/ThirdCard';
import Grid from '../component/Grid';
// import Products from './Products';  // Ensure you're using this somewhere if necessary
import { useSelector } from 'react-redux';
import watch from "../assets/card-icon/icon-smart.png"
import camera from "../assets/card-icon/iconcamera.png"
import game from "../assets/card-icon/icongame.png"
import headphone from "../assets/card-icon/iconhead.png"
import computer from "../assets/card-icon/iconcomputer.png"
import phone from "../assets/card-icon/iconphone.png"
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
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={phone} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={computer} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={watch} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={camera} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={headphone} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={game} alt="" />
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
