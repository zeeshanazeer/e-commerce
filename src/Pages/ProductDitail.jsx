// import React, { useEffect, useState } from 'react';

// import CardDitail from '../component/CardDitail';
// // import useSWR from 'swr'
// function ProductDitail() {
//   // const [product, setProducts] = useState([]); // Initialize as an empty array instead of null

//   // // Fetch products
//   // const getProductDeta = async () => {
//   //     try {
//   //         const response = await axios.get(API_KEY); // Use axios.get for fetching
//   //         setProducts(response?.data?.products); // Set products from response
//   //     } catch (error) {
//   //         console.error("Error fetching products:", error);
//   //     }
//   // };

  
//   // useEffect(() => {
//   //   getProductDeta(); // Fetch product data when component mounts
//   // }, []);
//   return (
//     <div>
      
//       {/* {product.map((item) => {
//                     let discountPrice= Math.ceil(item.price-(item.discountPercentage)*(item.price/100)).toFixed(2)
//                     return (
//                     <>
//                     <CardDitail 
//                     // off={`(item.discountPercentage)%`}
//                     image={item.thumbnail}
//                     id={item.id}
//                     price={`$${discountPrice}`}
//                     // del={`$${item.price.toFixed(2)}`}
//                     name={item.title}
                    
//                     />
//                     </>
//                     );
//                 })} */}
//                 <CardDitail/>
//     </div>
//   )
// }

// export default ProductDitail
// return (
//     isLoading ? (
//       <div className={`${darkMode?"text-white":""} ${darkMode?"pageDark":""} font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none`}>
//        <img src={loadingImg} alt="Loading..." />
//       </div>
//     ) : 
//     <>
      
//       {error ? (
//         <div className={`${darkMode?"text-white":""} ${darkMode?"pageDark":""} font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none`}>
//          {error.response?.data?.message}
//         </div>
//       ) : (
//         <div className={`${darkMode?"pageDark":""} main   flex flex-col justify-center  `}>
//           <div className="flex justify-center my-5 items-start">
//             <div className="w-full max-w-6xl  text-gray-400 text-sm mb-5">
//               <Link to={"/"}>Home</Link> /{" "}
//               <span className="text-gray-200 hover:text-gray-400">
//                 <Link to={"/AllProduct"}>Card</Link>{" "}
//               </span>
//               <span className={`${darkMode?"text-white":""} text-black cursor-none`}>
//                 {" "}
//                 <span className={` text-gray-400 `}> /</span> {product?.category}
//               </span>
//             </div>
//           </div>

//           <div className="w-[] gap-7    2xl:flex-row xl:flex-row lg:flex-row flex md:flex-col sm:flex-col mobile:flex-col  justify-center items-center 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-auto sm:h-auto mobile:h-auto  bg-fuchsia">
//             {/* Product Images Start */}

//             <div className="bg- flex 2xl:flex-row xl:flex-row lg:flex-row lg:flex xl:flex md:flex 2xl:flex md:flex-row sm:hidden mobile:hidden  gap-6 2xl:w-[50%] xl:w-[50%] lg:w-[50%]  md:w-[100%] md:justify-center md:items-center h-auto">
//               {product?.images.length === 1 ? null : (
//                 <div className="bg-red-  w-[170px] h-[600px] flex-col flex gap-3 justify-start items-center ">
//                   {product?.images.map((image, i) => {
//                     return (
//                       <img
//                         key={i}
//                         className={` ${darkMode?"darkTheme":""} w-[121px] h-[114px] shadow-2xl cursor-pointer bg-[#F5F5F5]`}
//                         src={image}
//                         alt=""
//                         onMouseOver={() => setSelectImg(image)}
//                       />
//                     );
//                   })}
//                 </div>
//               )}
//               <div className={`${darkMode?"darkTheme":""} flex justify-center  shadow-2xl  items-center bg-[#F5F5F5] w-[500px] h-[600px]`}>
//                 {selectImg ? (
//                   <img src={selectImg} alt="" />
//                 ) : (
//                   <img
//                     className="w-[px] h-[315px] "
//                     src={product?.images[0]}
//                     alt=""
//                   />
//                 )}
//               </div>
//             </div>
//             {/* Product Images End */}


//   {/* COMPLETE DETAILS Start */}

//   <div className=" 2xl:flex xl:flex lg:flex md:flex  sm:hidden mobile:hidden flex-col    gap-6 pl-3 w-[500px]  h-[600px] ">
//               <div>
//                 <h1 className={ `${darkMode?"text-white":""} font-semibold text-2xl text-black `}>
//                   {product?.title}
//                 </h1>
//               </div>
//               <div className="star-img  h-[21px] flex items-center gap-3">
//                 <span>
//                   {
//                     <ReactStars
//                       count={5}
//                       value={product?.rating ? product.rating : 3}
//                       // onChange={ratingChanged}
//                       size={24}
//                       edit={false}
//                       color2={"#ffd700"}
//                     />
//                   }
//                 </span>
//                 <span className="font-normal text-sm text-gray-400">
//                   {" "}
//                   ({product?.reviews.length} {}Reviews)
//                 </span>
//                 <span className="text-gray-400">|</span>
//                 <span className=" font-normal text-sm text-[#00FF66]">
//                   {" "}
//                   Stock: {product?.stock}
//                 </span>
//               </div>
//               <div className={`${darkMode?"text-white":""} price font-normal text-2xl`}>
//                 ${discountPrice * count}
//                 {}
//                 {} PKR {Math.floor(discountPrice * count * 278.9)}{" "}
//               </div>
//               <div className="border-b-gray-400 border-b-2 pb-6">
//                 <p className={`${darkMode?"text-white":""} font-normal text-sm text-black`}>
//                   {product?.description}
//                 </p>
//               </div>
//               <div className="minus-plus-btn-buy-btn-heart    flex gap-5 items-center">
//                 <div className=" countbtn w-[159px]  flex  border-2 rounded">
//                   <button
//                     onClick={() => setCount(count < 2 ? 1 : count - 1)}
//                     className="w-10 h-11 bg-white  active:bg-slate-200   text-2xl"
//                   >
//                     -
//                   </button>
//                   <div className={`${darkMode?"text-white":""} w-20 h-11  border-x-2 flex justify-center items-center `}>
//                     {" "}
//                     {count}
//                   </div>{" "}
//                   <button
//                     onClick={() =>
//                       setCount(
//                         count < product?.minimumOrderQuantity
//                           ? count + 1
//                           : product?.minimumOrderQuantity
//                       )
//                     }
//                     className="w-10 h-11 bg-myTheme active:bg-red-800 text-white   text-2xl"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div>
//                   <button className="w-[165px] h-11 bg-myTheme text-white rounded active:bg-red-800 ">
//                     Buy Now
//                   </button>
//                 </div>
//                 <button className={`${darkMode?"text-white":""} border-2 active:bg-myTheme active:text-white w-10 h-10 flex items-center justify-center rounded text-2xl`}>
//                   <GoHeart className="" />
//                 </button>
//               </div>
//               <div className="delvery flex flex-col w-[399px] h-[180px]  justify-around  border-2 rounded">
//                 <div className="flex pl-3 gap-4 border-b-2 pb-4">
//                   <div className="w-10 h-10">
//                     <TbTruckDelivery className={`${darkMode?"text-white":""} text-5xl`} />
//                   </div>
//                   <div className="">
//                     <h1 className={`${darkMode?"text-white":""} font-medium text-base`}>
//                       Shipping Information
//                     </h1>
//                     <p className={`${darkMode?"text-white":""} font-normal text-xs`}>
//                       {product?.shippingInformation}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex pl-3 gap-4">
//                   <div className={`${darkMode?"text-white":""} w-10 h-10`}>
//                   <GiReturnArrow  className={`${darkMode?"text-white":""} text-4xl`} />
//                   </div>
//                   <div>
//                     <h1 className={`${darkMode?"text-white":""} font-medium text-base`}>Return Policy</h1>
//                     <p className={`${darkMode?"text-white":""} font-normal text-xs`}>
//                       {product?.returnPolicy}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div></div>
//               <div className="flex justify-start items-center pl-3 gap-4 rounded border-2 w-[399px] h-[x] mb-2 p-1">
//                 <div className={`${darkMode?"text-white":""} w-10 h-10`}>
//                   {product?.warrantyInformation == "No warranty" ? (
//                     <TbShieldX className="text-3xl" />
//                   ) : (
//                     <IoShieldCheckmark className="text-3xl" />
//                   )}
//                 </div>
//                 <div>
//                   <p className={ `${darkMode?"text-white":""} font-medium text-base`}>
//                     {product?.warrantyInformation}
//                   </p>
//                 </div>
//               </div>
//             </div>
//                       {/* COMPLETE DETAILS End */}



//           </div>
          

// <div className="flex justify-center items-center  flex-col">


//   {/* Small Screen Product Images Start */}

// <div className="bg- flex flex-col 2xl:hidden xl:hidden  lg:hidden md:hidden sm:flex mobile:flex  gap-6 2xl:w-[50%] xl:w-[50%] lg:w-[50%]  md:w-[100%] md:justify-center md:items-center h-auto">
//               {product?.images.length === 1 ? null : (
//                 <div className="bg-red-    flex-row flex gap-7 justify-center items-center ">
//                   {product?.images.map((image, i) => {
//                     return (
//                       <img
//                         key={i}
//                         className={ `${darkMode?"darkTheme":""} w-[80px] h-[80px] shadow-2xl cursor-pointer bg-[#F5F5F5]`}
//                         src={image}
//                         alt=""
//                         onMouseOver={() => setSelectImg(image)}
//                       />
//                     );
//                   })}
//                 </div>
//               )}
//               <div className={`${darkMode?"darkTheme":""} flex justify-center  shadow-2xl  items-center bg-[#F5F5F5] w-[300px] h-[300px]`}>
//                 {selectImg ? (
//                   <img src={selectImg} alt="" />
//                 ) : (
//                   <img
//                     className="w-[px] h-[315px] "
//                     src={product?.images[0]}
//                     alt=""
//                   />
//                 )}
//               </div>
//             </div>
//             {/* Small Screen Product Images End */}



          
//                        {/* Small Screen  COMPLETE DETAILS Start */}

//             <div className=" 2xl:hidden xl:hidden  my-10 flex-wrap lg:hidden md:hidden justify-items-center items-center  sm:flex mobile:flex flex-col    gap-6 pl-3 w-[500px]  h-[600px] ">
//               <div>
//                 <h1 className={`${darkMode?"text-white":""} font-semibold text-xl text-black `}>
//                   {product?.title}
//                 </h1>
//               </div>
//               <div className="star-img  h-[15px] flex items-center gap-2">
//                 <span>
//                   {
//                     <ReactStars
//                       count={5}
//                       value={product?.rating ? product.rating : 3}
//                       // onChange={ratingChanged}
//                       size={24}
//                       edit={false}
//                       color2={"#ffd700"}
//                     />
//                   }
//                 </span>
//                 <span className="font-normal text-xs text-gray-400">
//                   {" "}
//                   ({product?.reviews.length} {}Reviews)
//                 </span>
//                 <span className="text-gray-400">|</span>
//                 <span className=" font-normal text-xs text-[#00FF66]">
//                   {" "}
//                   Stock: {product?.stock}
//                 </span>
//               </div>
//               <div className={ `${darkMode?"text-white":""} price font-normal text-xl`}>
//                 ${discountPrice * count}
//                 {}
//                 {} PKR {Math.floor(discountPrice * count * 278.9)}{" "}
//               </div>
//               <div className="border-b-gray-400  border-b-2 pb-6">
//                 <p className={`${darkMode?"text-white":""} font-normal text-[10px]  w-[300px] p-2 text-center text-black`}>
//                   {product?.description}
//                 </p>
//               </div>
//               <div className="minus-plus-btn-buy-btn-heart    flex gap-5 items-center">
//                 <div className=" countbtn w-[159px]  flex  border-2 rounded">
//                   <button
//                     onClick={() => setCount(count < 2 ? 1 : count - 1)}
//                     className="w-10 h-11 bg-white  active:bg-slate-200 rounded  text-2xl"
//                   >
//                     -
//                   </button>
//                   <div className={ `${darkMode?"text-white":""} w-20 h-11  border-x-2 flex justify-center items-center `}>
//                     {" "}
//                     {count}
//                   </div>{" "}
//                   <button
//                     onClick={() =>
//                       setCount(
//                         count < product?.minimumOrderQuantity
//                           ? count + 1
//                           : product?.minimumOrderQuantity
//                       )
//                     }
//                     className="w-10 h-11 bg-myTheme active:bg-red-800 text-white rounded  text-2xl"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div>
//                   <button className="w-[150px] h-11 bg-myTheme text-white rounded active:bg-red-800 ">
//                     Buy Now
//                   </button>
//                 </div>
//                 <button className="border-2 active:bg-myTheme active:text-white w-8 h-8 flex items-center justify-center rounded text-2xl">
//                   <GoHeart className="" />
//                 </button>
//               </div>
//               <div className="delvery flex flex-col w-[300px] h-[180px]  justify-around  border-2 rounded">
//                 <div className="flex pl-3 gap-4 border-b-2 pb-4">
//                   <div className="w-10 h-10">
//                     <TbTruckDelivery className={`${darkMode?"text-white":""} text-5xl`} />
//                   </div>
//                   <div className="">
//                     <h1 className={`${darkMode?"text-white":""} font-medium text-sm`}>
//                       Shipping Information
//                     </h1>
//                     <p className={`${darkMode?"text-white":""} font-normal text-xs`}>
//                       {product?.shippingInformation}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex pl-3 gap-4">
//                   <div>
//                     {/* <img className="w-8 h-8" src={IconReturn} alt="" /> */}
//                     <GiReturnArrow  className={`${darkMode?"text-white":""} text-4xl`} />

//                   </div>
//                   <div>
//                     <h1 className={`${darkMode?"text-white":""}  font-medium text-sm`}>Return Policy</h1>
//                     <p className={`${darkMode?"text-white":""}  font-normal text-xs`}>
//                       {product?.returnPolicy}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//               <div className="flex justify-start items-center  pl-3 gap-4 rounded border-2 w-[300px] h-[] mb-2 p-1">
//                 <div className={ `${darkMode?"text-white":""}  w-10 h-10`}>
//                   {product?.warrantyInformation == "No warranty" ? (
//                     <TbShieldX className="text-3xl" />
//                   ) : (
//                     <IoShieldCheckmark className="text-3xl" />
//                   )}
//                 </div>
//                 <div className="">
//                   <p className={`${darkMode?"text-white":""}  font-medium text-sm`}>
//                     {product?.warrantyInformation}
//                   </p>
//                 </div>
//               </div>
//               </div>
//             </div>
//                       {/* Small Screen COMPLETE DETAILS End */}
// </div>




          

         
//           <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
//             <MyCountBox name={""} days={"Related Item"} />
//            < div className="">
//             <Categary category={product?.category} />
            
//             </div>
       
//           </div>
//         </div>
//       )}

//     </>
//   );
// }